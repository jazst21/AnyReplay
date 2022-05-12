/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Replay } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardC from "./CardC";
import { Collection } from "@aws-amplify/ui-react";
export default function CardCCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Replay,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CardCCollection")}
    >
      {(item, index) => (
        <CardC
          replay={item}
          // height="auto"
          // width="auto"
          margin="5px 5px 5px 5px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardC>
      )}
    </Collection>
  );
}
