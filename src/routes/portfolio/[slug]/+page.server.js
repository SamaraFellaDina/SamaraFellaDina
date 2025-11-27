import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async ({ params }) => {
  const { slug } = params; 
  const query = gql`
    query PortfolioCase {
      portfolios {
        listOfCases (where: { slug: "${slug}" }){
          id
          caseTitle
          casecontent
          tags
          date
          location
          thumbnail {
            height
            width
            url
            size
          }
        }
      }
    }
  `;

  const data = await hygraph.request(query);

  return {
    cases: data.portfolios[0].listOfCases
  };
};