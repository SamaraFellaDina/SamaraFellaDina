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
      tags
      summary
      references {
        id
        link
        titleOfHyperlink
      }
      paragraphs {
        context
        subject
      }
      allAssets {
        height
        url
        width
        fileName
        mimeType
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