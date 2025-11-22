/**
 * @generated SignedSource<<e9ddee74522356e68904bc835bc660e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryCreateItem_directory$data = {
  readonly canPerform: boolean | null | undefined;
  readonly " $fragmentType": "JiraGenericDirectoryCreateItem_directory";
};
export type JiraGenericDirectoryCreateItem_directory$key = {
  readonly " $data"?: JiraGenericDirectoryCreateItem_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryCreateItem_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectoryCreateItem_directory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canPerform",
      "storageKey": null
    }
  ],
  "type": "JiraCreateEntityAction",
  "abstractKey": null
};

(node as any).hash = "b6957cf8f63bd5a4f287700f51943033";

export default node;
