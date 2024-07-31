import { gql } from '@apollo/client';
import client from '../apollo-client';

export const FETCH_LANDING_PAGE = 'FETCH_LANDING_PAGE';

const LANDING_PAGE_QUERY = gql`
  {
    landingPage {
      data {
        attributes {
          PageContent {
            __typename
            ... on ComponentCarouselCarousel {
              Image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentTitlesTitle {
              id
              Title
              SubTitle
            }
            ... on ComponentTestsTestList {
              id
              Tests {
                __typename
                ... on ComponentTestsTests {
                  id
                  TestName
                  Amount
                  Description
                }
              }
            }
            ... on ComponentHeaderHeader {
              id
              Header
            }
            ... on ComponentPartnershipPartnerShipList {
              id
              SchemeList {
                __typename
                ... on ComponentPartnershipPartnerShip {
                  id
                  Scheme
                  Description
                  Logo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentExperienceExperience {
              id
              Name
              Designation
              Experience
              Profile {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const fetchLandingPage = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: LANDING_PAGE_QUERY });
    dispatch({ type: FETCH_LANDING_PAGE, payload: data.landingPage.data.attributes.PageContent });
  } catch (error) {
    console.error('Error fetching landing page:', error);
  }
};
    