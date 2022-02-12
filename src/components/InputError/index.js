import errors from '../../utils/errros.json'

export function InputError ({type, field}){

    //console.log(field)

    return(
        <span>{errors[field][type]}</span>
    )
}