/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function Comment(props) {
  const { comment, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Comment")}
    >
      <Flex
        gap="0"
        direction="row"
        width="1280px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="1245px"
          height="71px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="116px"
            height="62px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={comment?.username}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="978px"
            height="71px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={comment?.comment}
            {...getOverrideProps(overrides, "Paragraph")}
          ></Text>
        </Flex>
      </Flex>
      <Divider
        width="1280px"
        height="1px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
