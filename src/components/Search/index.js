import {GrSearch} from 'react-icons/gr'
import { Label } from "./styles";


export function Search () {

    return(
        <Label>
            <GrSearch color='#EFEFEF' fontSize={16}  />
            <input type='text' placeholder='Pesquisa no site'/>
        </Label>
    )
}