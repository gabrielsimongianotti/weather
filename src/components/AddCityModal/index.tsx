import { useRef, useState } from "react";
import Modal from "react-modal";
import GoogleMapReact from 'google-map-react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";
import { OptionInput } from "../OptionInput";
import Input from "../Input";
import getValidationErrors from "../../utils/getValidationError";

interface NewCityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  createCard: (data: any) => void,
}

interface AddCityModalFormData {
  id: String,
  name: String,
  country: String,
  weather: {
    summary: {
      title: String
      description: String
      icon: String
    },
    wind: {
      speed: String
      deg: String
    }
    clouds: {
      all: String
      visibility: String
      humidity: String
    },
    temperature: {
      actual: number
      feelsLike: number
      min: number
      max: number
    }
    timestamp: String
  },
  coord: {
    lon: String
    lat: String
  }
}

export function AddCityModal ({ isOpen, onRequestClose, createCard }: NewCityModalProps) {
  const formRef = useRef<FormHandles>(null);
  const [localization, setLocalization] = useState({});

  const handleCityNewCity = async (data: AddCityModalFormData) => {
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
      await schema.validate({ ...data, localization }, { abortEarly: false })
console.log(data)
      createCard({ ...data, localization });
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
          onSubmit={handleCityNewCity}
        >
          <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className="react-modal-close" />

          <h2>Cadastrar nova cidade</h2>

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
              placeholder="sensação termica"
              type="number"
              name='feelsLike'
            />
            <Input
              placeholder="Atual"
              type="number"
              name='actual'
            />
            <Input
              type="number"
              placeholder="min"
              name='min'
            />
            <Input
              placeholder="max"
              type="number"
              name='max'
            />
          </OptionInput>
          <OptionInput name="Vento" >
            <Input
              placeholder="velocidade"
              type="number"
              name='speed'
            />
            <Input
              placeholder="grau de vento"
              type="number"
              name='deg'
            />
          </OptionInput>
          <OptionInput name="Nuvens">
            <Input
              placeholder="velocidade"
              type="number"
              name='visibility'
            />
            <Input
              placeholder="grau de vento"
              type="number"
              name='humidity'
            />
             <Input
              placeholder="Numéro de nuvens"
              name='all'
            />
          </OptionInput>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              onChange={(data) => { setLocalization(data.center) }}
              bootstrapURLKeys={{ key: 'AIzaSyDkZMI8Wtwg6pLGCwl30DlPcI5NMt-kM14', libraries: ['places'] }}
              defaultCenter={{
                lat: 0,
                lng: 0
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