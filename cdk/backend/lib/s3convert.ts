import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface s3convertProps {
    downstream: lambda.IFunction;
    inputBucket: s3.IBucket;
    outputBucket: s3.IBucket;
}