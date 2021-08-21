
type PropsType = {
    inputHeader: string
    inputText: string
}

const SuperInputText = (props: PropsType) => {
    return (
        <div>{props.inputHeader}</div>
    )
}

export default SuperInputText
