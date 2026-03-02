import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
	const query = gql`
		query Portfolio {
			portfolios {
				listOfCases(orderBy: year_DESC, where: { archive: false, archive_not: true }) {
					id
					caseTitle
					slug
					summary
					archive
					year
					location
					thumbnail {
						height
						width
						url
						size
						fileName
						mimeType
					}
				}
				workingProjects {
					hyperlink
					titleOfHyperlink
					id
				}
			}
		}
	`;

	const data = await hygraph.request(query);

	return {
		cases: data.portfolios
	};
};
