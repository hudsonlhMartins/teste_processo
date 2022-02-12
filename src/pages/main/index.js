import { Header } from "../../components/Header";
import { Button, Buttons, Container, Content, ContentInput, SectionLeft, SectionLeftContent } from "./styles";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputError } from "../../components/InputError";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Simulation } from "../../components/Simulation";



const submitValueSchema = yup.object().shape({
  aporte: yup.number().required(),
  prazo: yup.number().required(),
  aportemes: yup.number().required(),
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
    //console.log(values)

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
      //console.log(res)
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
                    <span>Redimento</span>
                  </div>
                  <Buttons>
                    <button type="button" className={typeRendimento == 'bruto' ? 'active' : ''} onClick={handleTypeRendimentoBruto}>Buto</button>
                    <button type="button" className={typeRendimento == 'liquido' ? 'active' : ''} onClick={handleTypeRendimentoLiquido}>Liquido</button>
                  </Buttons>
                  
                 
                  <label id="aporte" className={formState.errors.aporte ? 'error' : ''} >Aporte Inicial</label>
                  <input className={formState.errors.aporte ? 'errorInput' : ''} type='text' id='aporte' {...register('aporte')}/>
                  {formState.errors.aporte && (
                   <InputError type={formState.errors.aporte.type}  field='aporte'/>
                  )}
                  

                  <label id="prazo" >prazo (ao mes)</label>
                  <input className={formState.errors.prazo ? 'errorInput' : ''} type='text' id='prazo' {...register('prazo')}/>
                  
                  {formState.errors.prazo && (
                    <InputError type={formState.errors.prazo.type}  field='prazo'/>
                  )}

                  <label id="ipca" >IPCA (ao ano)</label>
                  <input type='text' disabled value={indicadores[1]?.valor +'%'} id='ipca'/>
                  

                  <Button type="button" onClick={clearFields} >Limpa campos</Button>

                </SectionLeftContent>

                <SectionLeftContent>
                  <div>
                    <span>Tipo de indexação</span>
                  </div>
                  <Buttons>
                    <button type="button" className={activeIndex == 'pre' ? 'active' : ''} onClick={ActiveFunctionPre}>PRÈ</button>
                    <button type="button" className={activeIndex == 'pos' ? 'active' : ''} onClick={ActiveFunctionPos}>POS</button>
                    <button type="button" className={activeIndex == 'ipca' ? 'active' : ''} onClick={ActiveFunctionFixado}>FIXADO</button>

                  </Buttons>
                  
                  <label id="aportemes" className={formState.errors.aportemes ? 'error' : ''} >Aporte Mensal</label>
                  <input className={formState.errors.aportemes ? 'errorInput' : ''} type='text' id='aportemes' {...register('aportemes')}/>
                  {formState.errors.aportemes && (
                    <InputError type={formState.errors.aportemes.type}  field='aportemes'/>

                  )}

                  <label className={formState.errors.rentabilidade ? 'error' : ''} id="rentabilidade" >Rentabilidade</label>
                  <input className={formState.errors.rentabilidade ? 'errorInput' : ''} type='text' id='rentabilidade' {...register('rentabilidade')}/>
                  {formState.errors.rentabilidade && (
                    <InputError type={formState.errors.rentabilidade.type}  field='rentabilidade'/>
                  )}

                  <label id="cdi" >CDI (ao ano)</label>
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