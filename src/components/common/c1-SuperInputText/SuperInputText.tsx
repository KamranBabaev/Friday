type SuperInputPropsType = {
    inputHeader: string
    inputText: string

}

function SuperInput(props: SuperInputPropsType) {
    return (
        <div>
            <div>{props.inputHeader}</div>
            <input/>
        </div>
    )
}

export default SuperInput