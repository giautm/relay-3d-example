/**
 * @generated SignedSource<<6ed93087de568cd636f9f81bb7ead6ed>>
 * @relayHash 3dc8b17bd1bd04954b59c8fe8373140a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 29f6d7f114b76ad5ca743e72ef5df9d0dc718b1de43eed4a3c9bc94ec0994a44

import { ConcreteRequest } from 'relay-runtime';
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables = {
  cloudId: string;
  searchText?: string | null | undefined;
};
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$data = {
  readonly jira: {
    readonly projectCategories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly categoryId: string;
          readonly id: string;
          readonly name: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery = {
  response: JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$data;
  variables: JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cloudId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchText"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "JiraQuery",
    "kind": "LinkedField",
    "name": "jira",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "cloudId",
            "variableName": "cloudId"
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "searchText"
          }
        ],
        "concreteType": "JiraProjectCategoryConnection",
        "kind": "LinkedField",
        "name": "projectCategories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JiraProjectCategoryEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JiraProjectCategory",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "categoryId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "29f6d7f114b76ad5ca743e72ef5df9d0dc718b1de43eed4a3c9bc94ec0994a44",
    "metadata": {},
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e28b8d85210966d817c2273dc27cf455";

export default node;
