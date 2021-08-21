type PropsType = {
    inputHeader: string
    inputText: string
}

const SuperInputText = (props: PropsType) => {
    return (
        <div>
            <div>{props.inputHeader}</div>
            <input/>
        </div>
    )
}

export default SuperInputText
