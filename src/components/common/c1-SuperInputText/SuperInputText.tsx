type PropsType = {
  inputHeader: string
  inputText: string
}

export const SuperInputText = (props: PropsType) => {
  return (
      <div>
        <input value={props.inputText}/>
      </div>
  )
}

