import { Container, Content } from "./styles";
import Chart from 'react-apexcharts'

const options = {
    //colors:['#000','#EE8E53'],
    chart: {
      type: 'bar',
      stacked: true,

        toolbar:{
            show: false,

        },
        zoom:{
            enabled: false,
        },

        sparkline: {
            enabled: false,
        }
        
    },
    dataLabels: {
        enabled: false,
        // tira as label que ficar no grafico numero que ficar em cima
    },
    tooltip: {
        enabled: false,
        // quando user passar mouse por cima não fazer nada
    },
    xaxis: {
        axisBorder:{
            show: false,
            //color: '#333',
            // isso e a border que ficar em baixo
        },
        
        title:{
            text: 'Tempo (meses)'
        },


        axisTicks:{
            show: false,
            color: '#333',
            // os potinhos que tem na border
        },
        categories:[
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ],
        
    },

    yaxis:{
        show: true,
        showAlways: false,
        showForNullSeries: false,
        opposite: false,
        reversed: false,
        logarithmic: false,

        title:{
            text: 'Valor (R$)'
        },
        labels: {
            show: false
        }
    }
  }


  

export function Simulation ({value}){

    const valorSem = value[0].graficoValores.semAporte
    const valorCom = value[0].graficoValores.comAporte

    const series = [
        {
            name:'semAporte',
            data:[valorSem[0], valorSem[1],valorSem[2],valorSem[3],valorSem[4], valorSem[5], valorSem[6],valorSem[7],valorSem[8],valorSem[9],valorSem[10] ],
            color: '#000'
        },
        {
            name:'comAporte',
            data:[valorCom[0], valorCom[1],valorCom[2],valorCom[3],valorCom[4], valorCom[5], valorCom[6],valorCom[7],valorCom[8],valorCom[9],valorCom[10] ],
            color: '#EE8E53'
        }
        
    ]

    return(
        <Container>
            <h2>Resultado da Simulação</h2>
            <Content>
                <li>
                    <strong>Valor final Bruto</strong>
                    <span>{new Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(value[0].valorFinalBruto) }
                    </span>
                </li>
                <li>
                    <strong>Aliquota do IR</strong>
                    <span>{value[0].aliquotaIR}%</span>
                </li>
                <li>
                    <strong>Valor Pago em IR</strong>
                    <span>{new Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(value[0].valorPagoIR) }
                    </span>
                </li>
                <li>
                    <strong>Valor Final Líquido</strong>
                    <span className="green">{new Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(value[0].valorFinalLiquido) }
                    </span>
                </li>
                <li>
                    <strong>Valor Total Investido</strong>
                    <span>{new Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(value[0].valorTotalInvestido) }
                    </span>
                </li>
                <li>
                    <strong>Ganho Liquido</strong>
                    <span className="green">{new Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(value[0].ganhoLiquido) }
                    </span>
                </li>
            </Content>

            <div>
                <h3>Projeção de Valores</h3>
                <Chart options={options} type="bar" width='100%' height={350} series={series} />
            </div>
        </Container>
    )
}