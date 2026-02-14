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
    tools
    stepsOfCareer {
      titleOfStep
      dateOfStep
      content
      tools
      subjectImage {
        id
        url
        width
        height
      }
    }
  }
}
	`;

	const data = await hygraph.request(query);

	return {
		aboutMe: data.aboutMes[0]
	};
};
