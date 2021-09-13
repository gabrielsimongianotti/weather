import { gql } from "@apollo/client";

export const GET_CITIES_BY_ID = gql`
  query($id: String) {
    getCityById(id: $id) {
      name
      id
      country
      weather {
        summary{
          title
          description
          icon
        }
        wind{
          speed
          deg
        }
        clouds{
          all
          visibility
          humidity
        }
        temperature{
          actual
          feelsLike
          min
          max
        }
        timestamp
      }
      coord{
        lon
        lat
      }
    }
  }
`;
