/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardC(props) {
  const { replay, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"/replaydetail/"}${replay?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="306px"
      height="372px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardC")}
    >
      <Image
        width="306px"
        height="170px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={replay?.image_url_replay}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="306px"
        height="161px"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${replay?.teamA}${" VS "}${replay?.teamB}`}
            {...getOverrideProps(overrides, "Team A VS Team B")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${replay?.scoreA}${" : "}${replay?.scoreB}`}
            {...getOverrideProps(overrides, "Score A : Score B")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Rating : "}${replay?.rating}`}
          {...getOverrideProps(overrides, "Rating :")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="127px"
          height="33px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="small"
          isDisabled={false}
          variation="primary"
          children="View Replay"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
