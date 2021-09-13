import {
  useQuery,
  useMutation,
} from "@apollo/client";
import { EditCityModal } from "../../components/EditCityModal";
import { Card } from "../../components/Card";
import { Container } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AddCityModal } from "../../components/AddCityModal";
import { CREATE_CYTES, UPDATE_CYTES, DELETE_CYTES, GET_CITIES } from './api';

interface IGetCities {
  id: string,
  name: String,
  country: String,
  weather: {
    temperature: {
      actual: number
    }
  }
}

export const Dashboard: React.FC = () => {
  const { loading, error, data = [] } = useQuery(GET_CITIES);
  const [remove] = useMutation(DELETE_CYTES);
  const [create] = useMutation(CREATE_CYTES);
  const [update] = useMutation(UPDATE_CYTES);

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataApi, setDataApi] = useState<IGetCities[]>([]);
  const [id, setId] = useState('');

  useEffect(() => {
    const { getCities = [] } = data;
    setDataApi(getCities);
  }, [data])

  const hanbleOpenCloseModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])

  const openModal = useCallback((id: string) => {
    setId(id)
    setOpenModalEdit(!openModalEdit)
  }, [openModalEdit])

  const removeItem = useCallback((id: string) => {
    remove({ variables: { id } });
    setDataApi(dataApi.filter((city: { id: string }) => city.id === id ? null : city));
  }, [dataApi, remove])

  const createItem = useCallback(async (data: any) => {
    const newCity = await create({
      variables: {
        data: {
          "name": data.name,
          "country": data.country,
          "weather": {
            "summary": {
              "title": data.title,
              "description": data.description,
              "icon": data.icon
            },
            "wind": {
              "speed": Number(data.speed),
              "deg": Number(data.deg)
            },
            "temperature": {
              "actual": Number(data.actual),
              "feelsLike": Number(data.feelsLike),
              "min": Number(data.min),
              "max": Number(data.max)
            },
            "clouds": {
              "all": Number(data.all),
              "visibility": Number(data.visibility),
              "humidity": Number(data.humidity)
            },
          },
          "coord": {
            "lon": data.localization.lon,
            "lat": data.localization.lat
          }
        }
      }
    })
    const cities: IGetCities[] = [...dataApi, newCity.data.CreateCity]
    setDataApi(cities)
    hanbleOpenCloseModal()
  }, [create, dataApi, hanbleOpenCloseModal])

  const updateItem = useCallback(async (data: any) => {
    const updateCity = await update({
      variables: {
        data: {
          "id": data.id,
          "name": data.name,
          "country": data.country,
          "weather": {
            "summary": {
              "title": data.title,
              "description": data.description,
              "icon": data.icon
            },
            "wind": {
              "speed": Number(data.speed),
              "deg": Number(data.deg)
            },
            "temperature": {
              "actual": Number(data.actual),
              "feelsLike": Number(data.feelsLike),
              "min": Number(data.min),
              "max": Number(data.max)
            },
            "clouds": {
              "all": Number(data.all),
              "visibility": Number(data.visibility),
              "humidity": Number(data.humidity)
            },
          },
          "coord": {
            "lon": data.localization.lon,
            "lat": data.localization.lat
          }
        }
      }
    })
    const cities: IGetCities[] = dataApi.map(city => city.id === updateCity.data.UpdateCity.id ? { ...updateCity.data.UpdateCity } : city)
    setDataApi(cities)
  }, [dataApi, update])

  if (loading) return null;

  if (error) return (<> {`Error! ${error}`}</>);

  return (
    <>
      <Header OpenModa={hanbleOpenCloseModal} />
      <Container>
        <AddCityModal isOpen={isOpen} onRequestClose={hanbleOpenCloseModal} createCard={createItem} />
        <EditCityModal isOpen={openModalEdit} onRequestClose={() => setOpenModalEdit(!openModalEdit)} editCard={updateItem} id={id} />
        {
          dataApi.map(({ id, name, weather }: IGetCities, int) => (
            <Card
              id={id}
              key={int}
              name={name}
              temperatura={weather.temperature.actual}
              openModal={(id: string) => openModal(id)}
              removeCard={(id: string) => removeItem(id)}
            />))
        }
      </Container>
    </>
  )
}