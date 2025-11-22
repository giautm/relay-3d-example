/**
 * @generated SignedSource<<ae93c121e9e14235cc6b2d993ce481b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type JiraIconStyle = "CIRCLE" | "SQUARE" | "%future added value";
export type JiraLabelDecoration = "NORMAL" | "STRIKE_THRU" | "%future added value";
export type JiraTextTransform = "UPPER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraGenericField_content$data = {
  readonly color: string | null | undefined;
  readonly icon: {
    readonly altText: string | null | undefined;
    readonly image: {
      readonly medium: string | null | undefined;
    } | null | undefined;
    readonly style: JiraIconStyle | null | undefined;
  } | null | undefined;
  readonly label: {
    readonly altText: string | null | undefined;
    readonly decoration: JiraLabelDecoration | null | undefined;
    readonly linkUrl: any | null | undefined;
    readonly stringValue: string | null | undefined;
    readonly textTransform: JiraTextTransform | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "JiraGenericField_content";
};
export type JiraGenericField_content$key = {
  readonly " $data"?: JiraGenericField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericField_content">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "altText",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericField_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraIcon",
      "kind": "LinkedField",
      "name": "icon",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraIconImage",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "medium",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "style",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraLabel",
      "kind": "LinkedField",
      "name": "label",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "stringValue",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "decoration",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "linkUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "textTransform",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    }
  ],
  "type": "JiraGenericField",
  "abstractKey": null
};
})();

(node as any).hash = "f03960a24f15a97ca46124ae8361b8d3";

export default node;
