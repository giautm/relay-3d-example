/**
 * @generated SignedSource<<eed3d5d8dfc00046334198a66b1b8ab4>>
 * @relayHash ca6ad8aaea54703241a87145917108d7
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 75bb94b0ae4b61f5e865ec670395384d7cb2fb3b2b443573ad72b4002adbd13f
// @dataDrivenDependency TypeBasedDirectoryPageQuery.jira.directory {"branches":{"JiraGenericDirectory":{"component":"JiraGenericDirectory","fragment":"JiraGenericDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type TypeBasedDirectoryPageQuery$variables = {
  cloudId: string;
  id: string;
  page?: number | null | undefined;
  searchText?: string | null | undefined;
  selectedCategory?: string | null | undefined;
  selectedTypes?: ReadonlyArray<string> | null | undefined;
  sortDirection?: SortDirection | null | undefined;
  sortField?: string | null | undefined;
};
export type TypeBasedDirectoryPageQuery$data = {
  readonly jira: {
    readonly directory: {
      readonly __fragmentPropName?: string | null | undefined;
      readonly __module_component?: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectory_directory">;
    };
  } | null | undefined;
};
export type TypeBasedDirectoryPageQuery = {
  response: TypeBasedDirectoryPageQuery$data;
  variables: TypeBasedDirectoryPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cloudId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "searchText"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "selectedCategory"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "selectedTypes"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortDirection"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortField"
},
v8 = [
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
                "value": "JiraDirectorySearchTextFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "KEYWORD"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "searchText"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.0"
          },
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraGenericDirectoryProjectTypesFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "MULTISELECT"
              },
              {
                "kind": "Variable",
                "name": "values",
                "variableName": "selectedTypes"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.1"
          },
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraGenericDirectoryProjectCategoriesFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "SELECT"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "selectedCategory"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.2"
          }
        ],
        "kind": "ListValue",
        "name": "criteria"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Variable",
        "name": "sortDirection",
        "variableName": "sortDirection"
      },
      {
        "kind": "Variable",
        "name": "sortField",
        "variableName": "sortField"
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
    "value": "8uSBL"
  }
],
v9 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "TypeBasedDirectoryPageQuery",
      "fragmentName": "JiraGenericDirectory_directory",
      "fragmentPropName": "directory",
      "kind": "ModuleImport"
    }
  ],
  "type": "JiraGenericDirectory",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TypeBasedDirectoryPageQuery",
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
            "args": (v8/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              (v9/*: any*/)
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v7/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "TypeBasedDirectoryPageQuery",
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
            "args": (v8/*: any*/),
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
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "75bb94b0ae4b61f5e865ec670395384d7cb2fb3b2b443573ad72b4002adbd13f",
    "metadata": {},
    "name": "TypeBasedDirectoryPageQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a1ab000e91984f60bb4670422250d182";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
