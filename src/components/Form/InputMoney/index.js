import { forwardRef } from "react"

const InputBase = ({...props}, ref)=>{

    const handleKeyUp = (e => {
        let value = e.target.value
        value = value.replace(/\D/g, "")
        value= value.replace(/(\d)(\d{2})$/, "$1, $2")
        value = value ? 'R$ ' + value.replace(/(?=(\d{3})+(\D))\B/g, "."): '' 
        e.target.value = value
        return e
    })

    return(
        <input onKeyUp={handleKeyUp} ref={ref} {...props}/>
    )
}

export const InputMoney = forwardRef(InputBase)