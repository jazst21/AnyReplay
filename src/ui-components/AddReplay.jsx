/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Replay } from "../models";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddReplay(props) {
  const { replay, overrides, ...rest } = props;
  const [textFieldgrvValue, setTextFieldgrvValue] = useStateMutationAction("");
  const [textFieldxxaValue, setTextFieldxxaValue] = useStateMutationAction("");
  const [textFieldeerValue, setTextFieldeerValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      teamA: textFieldgrvValue,
      teamB: textFieldxxaValue,
      image_url_replay: textFieldeerValue,
    },
    model: Replay,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddReplay")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Replay Video"
            {...getOverrideProps(overrides, "Add Replay Video")}
          ></Text>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividermic")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload new Video URL"
            {...getOverrideProps(overrides, "Upload new Video URL")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Team A"
            placeholder="John Doe"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            value={textFieldgrvValue}
            onChange={(event) => {
              setTextFieldgrvValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldgrv")}
          ></TextField>
          <TextField
            label="Team B"
            placeholder="Seattle, WA"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            value={textFieldxxaValue}
            onChange={(event) => {
              setTextFieldxxaValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldxxa")}
          ></TextField>
          <TextField
            label="Video Replay"
            placeholder="john.doe@awsamplify.com"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            value={textFieldeerValue}
            onChange={(event) => {
              setTextFieldeerValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldeer")}
          ></TextField>
          <Button
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            display="flex"
            shrink="0"
            width="71px"
            backgroundColor="rgba(4,125,149,1)"
            size="default"
            variation="primary"
            children="Save"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividerpkh")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
