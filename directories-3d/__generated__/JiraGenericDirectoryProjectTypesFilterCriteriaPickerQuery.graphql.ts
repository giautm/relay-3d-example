/**
 * @generated SignedSource<<27aee83a1dc203a2633175571a5c97bf>>
 * @relayHash 466667b82fe2ff412d0176b13654e9cd
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ff697c58bc6b7e545386f320b1ef8f5cdbe021fd9c98b6cca8b103f695b8b92f

import { ConcreteRequest } from 'relay-runtime';
export type JiraProjectType = "BUSINESS" | "PRODUCT_DISCOVERY" | "SERVICE_DESK" | "SOFTWARE" | "UNKNOWN" | "%future added value";
export type JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery$variables = {
  cloudId: string;
  searchText?: string | null | undefined;
};
export type JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery$data = {
  readonly jira: {
    readonly projectTypes: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly displayName: string;
          readonly id: string;
          readonly type: JiraProjectType;
        } | null | undefined;
      } | null | undefined> | null | undefined;
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery = {
  response: JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery$data;
  variables: JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery$variables;
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
            "kind": "Variable",
            "name": "searchText",
            "variableName": "searchText"
          }
        ],
        "concreteType": "JiraProjectTypeDetailsConnection",
        "kind": "LinkedField",
        "name": "projectTypes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JiraProjectTypeDetailsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JiraProjectTypeDetails",
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
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "displayName",
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
    "name": "JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "ff697c58bc6b7e545386f320b1ef8f5cdbe021fd9c98b6cca8b103f695b8b92f",
    "metadata": {},
    "name": "JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "27b89791ca491fefb8f255cf2ac654c3";

export default node;
