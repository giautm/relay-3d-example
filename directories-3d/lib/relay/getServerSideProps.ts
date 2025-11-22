import {networkFetch} from './network';
import {ConcreteRequest, Variables} from 'relay-runtime';

export async function getPreloadedQuery(
  {params}: ConcreteRequest,
  variables: Variables,
) {
  const response = await networkFetch(params.id, variables, params.text);
  return {
    params,
    variables,
    response,
  };
}
