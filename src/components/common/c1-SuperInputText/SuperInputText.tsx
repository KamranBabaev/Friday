import {ChangeEvent} from 'react';

type PropsType = {
    inputHeader: string
    inputText: string
}

const SuperInputText = (props: PropsType) => {
    const textValue=(e:ChangeEvent<HTMLInputElement>)=>{
      return   e.currentTarget.value
    }
    return (
        <div>
            <input value={props.inputHeader} onChange={textValue}/>
        </div>
    )
}

export default SuperInputText
