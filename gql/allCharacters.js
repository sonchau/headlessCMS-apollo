import gql from 'graphql-tag';

export const NAVS = gql`
	query Navs {
        navs{
            title
            link
            parent
            extend
        }
      }
`;
