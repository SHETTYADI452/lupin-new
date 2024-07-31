import { gql } from '@apollo/client';
import client from '../apollo-client';

// Define the query
const GET_NAVBAR = gql`
  query {
    navbar {
      data {
        attributes {
          Navbar {
            __typename
            ...on ComponentNavbarNavbar {
              Tabs {
                Title
                links {
                  Text
                  URL
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Action Types
export const FETCH_NAVBAR_SUCCESS = 'FETCH_NAVBAR_SUCCESS';
export const FETCH_NAVBAR_FAILURE = 'FETCH_NAVBAR_FAILURE';

// Action Creators
export const fetchNavbar = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: GET_NAVBAR });
    const navbarData = data.navbar.data.attributes.Navbar[0]; // Access the first item in the array
    dispatch({ type: FETCH_NAVBAR_SUCCESS, payload: navbarData });
  } catch (error) {
    dispatch({ type: FETCH_NAVBAR_FAILURE, payload: error.message });
  }
};
