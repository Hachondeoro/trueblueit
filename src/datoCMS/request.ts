import { GraphQLClient } from 'graphql-request';
export function request(query) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer a08ac1b8fb0f6e67ceefab2e065759`,
    },
  });
  const finalQuery = `query MyQuery{${query}}`;
  return client.request(finalQuery as any);
}
