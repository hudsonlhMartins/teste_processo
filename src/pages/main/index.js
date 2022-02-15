import { Header } from "../../components/Header";
import { Button, Buttons, Container, Content, ContentInput, SectionLeft, SectionLeftContent } from "./styles";
import {FiCheck} from 'react-icons/fi'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputError } from "../../components/InputError";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Simulation } from "../../components/Simulation";
import { InputMoney } from "../../components/Form/InputMoney";



const submitValueSchema = yup.object().shape({
  aporte: yup.string().required(),
  prazo: yup.number().required(),
  aportemes: yup.string().required(),
  rentabilidade: yup.number().required(),
})


export function Main() {

  const {register, handleSubmit, formState, reset} = useForm({
    resolver: yupResolver(submitValueSchema)
  })
  const [activeIndex, setActiveIndex] = useState('pos')
  const [typeRendimento , setTypeRendimento] = useState('bruto')

  const [indicadores, setIndicadores] = useState([])

  const [simulation, setSimulation] = useState([])

  const handleSubmitValues = async (values)=>{
    const res = await api.get(`/simulacoes?tipoIndexacao=${activeIndex}&tipoRendimento=${typeRendimento}`)

    setSimulation(res.data)
  }
  
  const ActiveFunctionPos = () =>{
    setActiveIndex('pos')
  }
  const ActiveFunctionPre = () =>{
    setActiveIndex('pre')
  }
  const ActiveFunctionFixado = () =>{
    setActiveIndex('ipca')
  }
  const handleTypeRendimentoBruto = () =>{
    setTypeRendimento('bruto')
  }
  const handleTypeRendimentoLiquido = () =>{
    setTypeRendimento('liquido')
  }

  const clearFields = ()=>{
    reset()
    setSimulation([])
  }

  useEffect(()=>{
    const getApi = async ()=>{
      const res = await api.get('/indicadores')
      setIndicadores(res.data)
    }
    getApi()
  },[])


  return (
      <>
        <Header/>
        <Container>
            <h1>Simulador de Investimento</h1>
            <h2>Simulador</h2>

            <Content>
              <SectionLeft onSubmit={handleSubmit(handleSubmitValues)}>

                <SectionLeftContent>

                  <div>
                    <i>Redimento</i>
                  </div>
                  <Buttons>
                    <button type="button" className={typeRendimento == 'bruto' ? 'active' : ''} onClick={handleTypeRendimentoBruto}>
                      {typeRendimento == 'bruto' &&(<FiCheck color="#fff" size={15} />)}
                      Bruto
                    </button>
                    <button type="button" className={typeRendimento == 'liquido' ? 'active' : ''} onClick={handleTypeRendimentoLiquido}>
                    {typeRendimento == 'liquido' &&(<FiCheck color="#fff" size={15} />)}
                      Liquido
                    </button>
                  </Buttons>
                  

                  <ContentInput>
                    <label htmlFor="aporte" className={formState.errors.aporte ? 'error' : ''} >Aporte Inicial</label>
                    <InputMoney  className={formState.errors.aporte ? 'errorInput' : ''} type='text' id='aporte' {...register('aporte')}/>
                    {formState.errors.aporte && (
                    <InputError type={formState.errors.aporte.type}  field='aporte'/>
                    )}
                  </ContentInput>
                  
                  <ContentInput>
                    <label htmlFor="prazo" >prazo (ao mes)</label>
                    <input className={formState.errors.prazo ? 'errorInput' : ''} type='text' id='prazo' {...register('prazo')}/>
                    {formState.errors.prazo && (
                      <InputError type={formState.errors.prazo.type}  field='prazo'/>
                    )}
                  </ContentInput>

                  <label htmlFor="ipca" >IPCA (ao ano)</label>
                  <input type='text' disabled value={indicadores[1]?.valor +'%'} id='ipca'/>
                  

                  <Button type="button" onClick={clearFields} >Limpa campos</Button>

                </SectionLeftContent>

                <SectionLeftContent>
                  <div>
                    <i>Tipo de indexação</i>
                  </div>
                  <Buttons>
                    <button type="button" className={activeIndex == 'pre' ? 'active' : ''} onClick={ActiveFunctionPre}>
                    {activeIndex == 'pre' &&(<FiCheck color="#fff" size={15} />)}
                      PRÈ
                    </button>
                    <button type="button" className={activeIndex == 'pos' ? 'active' : ''} onClick={ActiveFunctionPos}>
                    {activeIndex == 'pos' &&(<FiCheck color="#fff" size={15} />)}
                      POS
                    </button>
                    <button type="button" className={activeIndex == 'ipca' ? 'active' : ''} onClick={ActiveFunctionFixado}>
                    {activeIndex == 'ipca' &&(<FiCheck color="#fff" size={15} />)}
                      FIXADO
                    </button>

                  </Buttons>
                  
                  <ContentInput>
                    <label htmlFor="aportemes" className={formState.errors.aportemes ? 'error' : ''} >Aporte Mensal</label>
                    <InputMoney className={formState.errors.aportemes ? 'errorInput' : ''} type='text' id='aportemes' {...register('aportemes')}/>
                    {formState.errors.aportemes && (
                      <InputError type={formState.errors.aportemes.type}  field='aportemes'/>

                    )}
                  </ContentInput>

                  <ContentInput>
                    <label className={formState.errors.rentabilidade ? 'error' : ''} htmlFor="rentabilidade" >Rentabilidade</label>
                    <input className={formState.errors.rentabilidade ? 'errorInput' : ''} type='text' id='rentabilidade' {...register('rentabilidade')}/>
                    {formState.errors.rentabilidade && (
                      <InputError type={formState.errors.rentabilidade.type}  field='rentabilidade'/>
                    )}
                  </ContentInput>

                  <label htmlFor="cdi" >CDI (ao ano)</label>
                  <input type='text' disabled value={indicadores[0]?.valor +'%'} id='cdi'/>
                    

                  <Button type="submit" className={`simular ${!!simulation[0] ? 'btnActive' : ''}`}>Simular</Button>

                </SectionLeftContent>
              </SectionLeft>

                  {!!simulation[0] &&(
                      <Simulation value={simulation}/>
                  )}

            </Content>

        </Container>
      </>

  );
}