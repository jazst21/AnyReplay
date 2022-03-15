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
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function CardB(props) {
  const { replay, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonzrdOnClick = useDataStoreUpdateAction({
    fields: { rating: replay?.rating+1 },
    id: replay?.id,
    model: Replay,
  });
  const buttonrjdOnClick = useDataStoreCreateAction({
    fields: {
      replay_id: authAttributes["name"],
      username: authAttributes["name"],
      comment: textFieldValue,
    },
    model: Comments,
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
              padding="6px 12px 6px 12px"
              display="flex"
              width="37px"
              height="35px"
              shrink="0"
              size="small"
              variation="default"
              children="Like"
              onClick={() => {
                buttonzrdOnClick();
              }}
              {...getOverrideProps(overrides, "Buttonzrd")}
            ></Button>
            <TextField
              width="183px"
              display="flex"
              height="33px"
              shrink="0"
              placeholder="Placeholder"
              size="small"
              labelHidden={true}
              variation="default"
              value={textFieldValue}
              onChange={(event) => {
                setTextFieldValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
            <Button
              padding="6px 12px 6px 12px"
              display="flex"
              width="37px"
              height="35px"
              shrink="0"
              size="small"
              variation="default"
              children="Post"
              onClick={() => {
                buttonrjdOnClick();
              }}
              {...getOverrideProps(overrides, "Buttonrjd")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
