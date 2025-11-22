/**
 * @generated SignedSource<<00c1e71b23bf4e891efbc2758b83414a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericFavouriteField_content$data = {
  readonly favoriteInfo: {
    readonly isFavorite: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "JiraGenericFavouriteField_content";
};
export type JiraGenericFavouriteField_content$key = {
  readonly " $data"?: JiraGenericFavouriteField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericFavouriteField_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericFavouriteField_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraGenericFavoriteInfo",
      "kind": "LinkedField",
      "name": "favoriteInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFavorite",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericFavouriteField",
  "abstractKey": null
};

(node as any).hash = "873b284f73700a40a84debdfdbf17007";

export default node;
