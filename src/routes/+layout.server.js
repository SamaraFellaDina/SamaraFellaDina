import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
  const query = gql`
  query Footer {
    footers {
      code {
        hyperlink
        titleOfHyperlink
      }
      socialsList {
        hyperlink
        titleOfHyperlink
      }
    }
  }
  `;

  const data = await hygraph.request(query);

  return {
    footer: data.footers[0]
  };
};