/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Comments } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Comment from "./Comment";
import { Collection } from "@aws-amplify/ui-react";
export default function CommentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Comments,
        }).items;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CommentCollection")}
    >
      {(item, index) => (
        <Comment
          comment={item}
          height="auto"
          width="auto"
          margin="1px 0 1px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Comment>
      )}
    </Collection>
  );
}
