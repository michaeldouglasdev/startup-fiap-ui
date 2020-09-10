import React, { useRef, useCallback, useEffect, useState } from 'react';
import Root from '../../components/Root';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { FiFileText, FiDollarSign } from 'react-icons/fi';
import { MdTitle } from 'react-icons/md';
import api from '../../services/api';
import { GoLocation } from 'react-icons/go';
import TextArea from '../../components/TextArea';
import Dropdown from '../../components/Dropdown';
import { StateIBGE } from '../../models/StateIBGE';
import { CityIBGE } from '../../models/CityIBGE';
import Button from '../../components/Button';

const JobsRecruiterPage: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const [cities, setCities] = useState<CityIBGE[]>([{} as CityIBGE]);
  const [states, setStates] = useState<StateIBGE[]>([{} as StateIBGE]);
  const [hirings, setHirings] = useState<string[]>([]);

  useEffect(() => {
    async function getStates() {
      await setStates((await api.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).data);
    }

    async function getHirings() {
      setHirings(['CLT', 'PJ']);
    }

    getStates();
    getHirings();
  }, []);

  const handleSubmit = useCallback(async (data: object) => {
    api.post('/jobs', { data })
  }, []);

  const handleSelectState = async (state: StateIBGE) => {
    setCities((await api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.id}/municipios`)).data);
  }

  return (
    <Root titlePage="Vagas">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="title" icon={MdTitle} placeholder="Título da Vaga" />

        <Input name="address" icon={GoLocation} placeholder="Endereço" />

        <Dropdown name="state" icon={GoLocation} placeholder="Estado" data={states} itemLabel="sigla" onSelectItem={handleSelectState} />

        <Dropdown name="city" icon={GoLocation} placeholder="Cidade" data={cities} itemLabel="nome" />

        <Dropdown name="hiring" icon={GoLocation} placeholder="Modelo de contratação " data={hirings} />

        <TextArea name="description" icon={FiFileText} placeholder="Descrição" rows={4} />

        <TextArea name="anotherInfo" icon={FiFileText} placeholder="Outras Informações" rows={4} />

        <Input name="salary" icon={FiDollarSign} placeholder="Salário" />

        <Button type="submit" typeStyle="primary">Cadastrar Vaga</Button>
      </Form>
    </Root>
  )
}

export default JobsRecruiterPage;