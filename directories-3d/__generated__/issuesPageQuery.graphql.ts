/**
 * @generated SignedSource<<b373393efa0e857115b0e171d52aa3b4>>
 * @relayHash 45212d9c724f38bf524ce335f863b0a3
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2f2379aeb9b644b524544c3b119901c101014c7c8fa20959b913d73d951b6dd2
// @dataDrivenDependency issuesPageQuery.jira.directory {"branches":{"JiraIssueDirectory":{"component":"JiraIssueDirectory","fragment":"JiraIssueDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectoryJqlBuilderAdvancedCriteria":{"component":"JiraDirectoryJqlBuilderAdvancedCriteria","fragment":"JiraDirectoryJqlBuilderAdvancedCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type issuesPageQuery$variables = {
  cloudId: string;
  id: string;
  jql?: string | null | undefined;
  page?: number | null | undefined;
};
export type issuesPageQuery$data = {
  readonly jira: {
    readonly directory: {
      readonly __fragmentPropName?: string | null | undefined;
      readonly __module_component?: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"JiraIssueDirectory_directory">;
    };
  } | null | undefined;
};
export type issuesPageQuery = {
  response: issuesPageQuery$data;
  variables: issuesPageQuery$variables;
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
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jql"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "cloudId",
    "variableName": "cloudId"
  },
  {
    "fields": [
      {
        "items": [
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraDirectoryJqlBuilderAdvancedCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "JQL_BUILDER_ADVANCED"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "jql"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.0"
          }
        ],
        "kind": "ListValue",
        "name": "criteria"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Literal",
    "name": "supported",
    "value": "1E9YLl"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "issuesPageQuery",
      "fragmentName": "JiraIssueDirectory_directory",
      "fragmentPropName": "directory",
      "kind": "ModuleImport"
    }
  ],
  "type": "JiraIssueDirectory",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "issuesPageQuery",
    "selections": [
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
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "issuesPageQuery",
    "selections": [
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
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "2f2379aeb9b644b524544c3b119901c101014c7c8fa20959b913d73d951b6dd2",
    "metadata": {},
    "name": "issuesPageQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a4943613d9d822ff4f97ce2873316aea";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
