import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
	const query = gql`
		query Portfolio {
			portfolios {
				listOfCases {
					id
					caseTitle
					slug
					archive
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
		cases: data.portfolios
	};
};