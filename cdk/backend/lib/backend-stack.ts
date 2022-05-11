import * as cdk from 'aws-cdk-lib';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import * as mediaconvert from 'aws-cdk-lib/aws-mediaconvert';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as AWS from 'aws-sdk';


export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'BackendQueue', {
      visibilityTimeout: Duration.seconds(300)
    });
    const topic = new sns.Topic(this, 's3movuploaded');
    topic.addSubscription(new subs.SqsSubscription(queue));
    //new step functions with topic lambda media convert
    const mediaConvertLambda = new lambda.Function(this, 'MediaConvertLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'lambdaConvert2.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        S3_BUCKET: 'anyplay-raw',
        S3_KEY: '{key}',
        S3_OUTPUT_BUCKET: 'anyplay-video',
        S3_OUTPUT_KEY: '{key}',
        S3_OUTPUT_FORMAT: 'mp4',
        S3_OUTPUT_PRESET: '1351620000001-200050'
      }
    });
    // Set the Region
    AWS.config.update({region: 'ap-southeast-1'});
    // Set the customer endpoint
    AWS.config.mediaconvert = {endpoint : 'https://xdwfvckxc.mediaconvert.ap-southeast-1.amazonaws.com'};
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'lambdaConvert2.handler'
    });
    //new api gateway with lambda function backend
    const api = new apigw.LambdaRestApi(this, 'BackendApi', {
      handler: mediaConvertLambda
    });
    //create simple s3 bucket raw
    const rawBucket = new s3.Bucket(this, 'RawBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    //create simple s3 bucket videoBucket with permission json
    const videoBucket = new s3.Bucket(this, 'VideoBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED
    });
    //create bucket policy
    const bucketPolicy = new s3.BucketPolicy(this, 'BucketPolicy', {
      bucket: videoBucket,
    });
    //add policy statements on the bucket policy
    bucketPolicy.document.addStatements(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [
          new iam.ServicePrincipal('mediaconvert.amazonaws.com'),
          new iam.ArnPrincipal('arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E33XVGFD54QOT2')
        ],
        // actions: ['s3:GetObject','s3:PutObject','s3:Create','s3:Write'],
        actions: ['*'],
        resources: [videoBucket.bucketArn + '/*']
      })
    );
    //create s3 lambda notification trigger
    rawBucket.addEventNotification(s3.EventType.OBJECT_CREATED_PUT, new s3n.LambdaDestination(mediaConvertLambda));

  }
}
