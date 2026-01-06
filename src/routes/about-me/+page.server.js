import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
  const query = gql`
query aboutMe {
  aboutMes {
    skills {
      sectionHeading
      listOfSkills {
        titleOfSkill
        experience
      }
    }
  }
}
  `;

  const data = await hygraph.request(query);

  return {
    data: data.aboutMes[0]
  };
};