import {GrHome, GrClose, GrLinkNext, GrLinkPrevious} from 'react-icons/gr'

import {Container, Content, Line} from './styles'
import {Search} from '../Search/index'


export function Header (){


    return(
        <Container>
            <Content>
                <div>
                    <GrLinkPrevious color='#787878' fontSize={20} />
                    <GrLinkNext color='#787878' fontSize={20} />
                    <GrClose color='#787878' fontSize={20} />
                    <GrHome color='#787878' fontSize={20} />
                </div>
                <Line>
                    <span>Calculadora de investimentos</span>
                </Line>

                <Search />
            </Content>
        </Container>
    )
}