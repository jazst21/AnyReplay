/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Comments, Replay } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function CardB(props) {
  const { replay, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonThreeZeroFiveOneTwoSevenFourSevenOnClick =
    useDataStoreUpdateAction({
      fields: { rating: "100" },
      id: replay?.id,
      model: Replay,
      schema: schema,
    });
  const buttonThreeZeroFiveSevenTwoEightTwoSevenOnClick =
    useDataStoreCreateAction({
      fields: {
        replay_id: authAttributes["name"],
        username: authAttributes["name"],
        comment: textFieldValue,
      },
      model: Comments,
      schema: schema,
    });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardB")}
    >
      <Image
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={replay?.image_url_replay}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
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
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={`${replay?.teamA}${" VS "}${replay?.teamB}`}
            {...getOverrideProps(overrides, "Team A VS Team B")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${replay?.scoreA}${" : "}${replay?.scoreB}`}
            {...getOverrideProps(overrides, "Score A : Score B")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="108px"
            height="35px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Rating : "}${replay?.rating}`}
            {...getOverrideProps(overrides, "Rating : XX")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={replay?.id}
            {...getOverrideProps(overrides, "Replay ID : XX")}
          ></Text>
          <Flex
            gap="16px"
            direction="row"
            width="288px"
            height="40px"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Forms")}
          >
            <Button
              display="flex"
              gap="0"
              direction="row"
              width="37px"
              height="35px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px"
              size="small"
              isDisabled={false}
              variation="default"
              children="Like"
              onClick={() => {
                buttonThreeZeroFiveOneTwoSevenFourSevenOnClick();
              }}
              {...getOverrideProps(overrides, "Button30512747")}
            ></Button>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              width="183px"
              height="33px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              placeholder="Placeholder"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              value={textFieldValue}
              onChange={(event) => {
                setTextFieldValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
            <Button
              display="flex"
              gap="0"
              direction="row"
              width="37px"
              height="35px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px"
              size="small"
              isDisabled={false}
              variation="default"
              children="Post"
              onClick={() => {
                buttonThreeZeroFiveSevenTwoEightTwoSevenOnClick();
              }}
              {...getOverrideProps(overrides, "Button30572827")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
