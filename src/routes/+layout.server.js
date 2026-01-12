import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
  const query = gql`
  query Footer {
    footers {
      code {
        titleOfLink
        hyperlink
      }
      socialsList {
        hyperlink
        titleOfLink
      }
    }
  }
  `;

  const data = await hygraph.request(query);

  return {
    cases: data.portfolios
  };
};