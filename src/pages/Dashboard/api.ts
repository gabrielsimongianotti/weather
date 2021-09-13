import { gql } from "@apollo/client";

export const CREATE_CYTES = gql`
  mutation create($data: InputCity){
    CreateCity(city: $data){
      id
      name
      country
      weather{
        temperature {
          actual
        }
      }
    }
  }
`;

export const UPDATE_CYTES = gql`
  mutation updata($data: InputUpdataCity){
    UpdateCity(updataCity: $data){
      id
      name
      country
      weather {
        temperature {
          actual
        }
      }
    }
  }
`;

export const DELETE_CYTES = gql`
    mutation remove($id: String!){
      DeleteCity(id:$id)
    }  
  `;

export const GET_CITIES = gql`
  query {
    getCities {
      name
      id
      weather {
        temperature {
          actual
        }
      }
    }
  }
`;
