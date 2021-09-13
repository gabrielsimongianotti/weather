import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import GoogleMapReact from 'google-map-react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useLazyQuery } from "@apollo/client"
import * as Yup from 'yup';

import { GET_CITIES_BY_ID } from "./api";
import { Container } from "./styles";
import { OptionInput } from "../OptionInput";
import Input from "../Input";
import closeImg from "../../assets/close.svg";
import getValidationErrors from "../../utils/getValidationError";

interface NewCityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  editCard: (data: any) => Promise<void>;
  id: string;
}

export function EditCityModal ({ isOpen, onRequestClose, editCard, id }: NewCityModalProps) {
  const formRef = useRef<FormHandles>(null);
  const [localization, setLocalization] = useState({ lat: 0, lon: 0 })
  const [getCityById, { data = {} }] = useLazyQuery(GET_CITIES_BY_ID);

  useEffect(() => {
    getCityById({ variables: { id } })
  }, [getCityById, id])

  useEffect(() => {
    if (isOpen && data.getCityById !== null && data.getCityById !== undefined) {
      const { lon = 0, lat = 0 } = data.getCityById.coord;
      
      setLocalization({ lat, lon });
    }
  }, [data, isOpen])

  const handleUpdateNewCity = async (newData: any) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        country: Yup.string().required('Pais obrigatorio'),
        title: Yup.string().required('Titulo obrigatorio'),
        description: Yup.string().required('Descrição obrigatorio'),
        icon: Yup.string().required('Icone obrigatorio'),
        actual: Yup.number().required('Temperatura atual obrigatorio'),
        feelsLike: Yup.number().required('Sensação termica é obrigatorio'),
        min: Yup.number().required('Temperatura Maxima é obrigatorio'),
        max: Yup.number().required('Temperatura Minima é obrigatorio'),
        speed: Yup.number().required('Velocidade é obrigatorio'),
        deg: Yup.number().required('grau de vento é obrigatorio'),
        all: Yup.number().required('Numéro de nuvels é obrigatorio'),
        visibility: Yup.number().required('Visibilidade é obrigatorio'),
        humidity: Yup.number().required('Humidade é obrigatorio'),
      })
      await schema.validate({ ...newData, localization, id }, { abortEarly: false })

      editCard({ ...newData, localization, id })
      onRequestClose()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
       
        formRef.current?.setErrors(errors);

        return;
      }
    }
  }

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <Container >
        <Form
          ref={formRef}
          onSubmit={handleUpdateNewCity}
          initialData={isOpen && data.getCityById !== null && data.getCityById !== undefined ? {
            ...data.getCityById,
            ...data.getCityById.weather.summary,
            ...data.getCityById.weather.wind,
            ...data.getCityById.weather.clouds,
            ...data.getCityById.weather.temperature
          } : {}
          }
        >
          <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className="react-modal-close" />
          <h2>Atualizar cidade</h2>

          <Input
            placeholder="Nome"
            name='name'
          />

          <Input
            placeholder="Pais"
            name='country'
          />
          <OptionInput name="Resumo">

            <Input
              placeholder="Titulo"
              name='title'
            />
            <Input
              placeholder="descrição"
              name='description'
            />
            <Input
              placeholder="icone"
              name='icon'
            />
          </OptionInput>
          <OptionInput name="Temperatura">
            <Input
              placeholder="Sensação termica"
              name='feelsLike'
            />
            <Input
              placeholder="Atual"
              name='actual'
            />
            <Input
              placeholder="min"
              name='min'
            />
            
            <Input
              placeholder="max"
              name='max'
            />
          </OptionInput>
          <OptionInput name="Vento" >
            <Input
              placeholder="velocidade"
              name='speed'
            />
            <Input
              placeholder="grau de vento"
              name='deg'
            />
          </OptionInput>
          <OptionInput name="Nuvens">
            <Input
              placeholder="Velocidade"
              name='visibility'
            />
            <Input
              placeholder="Humidade"
              name='humidity'
            />
            <Input
              placeholder="Numéro de nuvens"
              name='all'
            />
          </OptionInput>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              onChange={(data) => setLocalization({ lat: data.center.lat, lon: data.center.lng })}
              bootstrapURLKeys={{ key: 'AIzaSyDkZMI8Wtwg6pLGCwl30DlPcI5NMt-kM14', libraries: ['places'] }}
              defaultCenter={{
                lat: localization.lat,
                lng: localization.lon
              }}
              defaultZoom={11}
            />
          </div>
          <button type="submit" > Cadastrar</button>
        </Form>
      </Container>
    </Modal >
  );
}