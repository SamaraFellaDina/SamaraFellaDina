import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
	const query = gql`
		query aboutMe {
			aboutMes {
				heroImages {
					id
					url
					width
					height
				}
				aboutMe
				loveProducts
				loveSubjects
				}
			}
		}
	`;

	const data = await hygraph.request(query);

	return {
		aboutMe: data.aboutMes[0]
	};
};
