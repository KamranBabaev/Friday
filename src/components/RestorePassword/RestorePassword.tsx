import SuperInput from "../common/c1-SuperInputText/SuperInputText";

export const RestorePassword = () => {
    return(
        <div>
            <h1>Restore Password</h1>
            <h2>Forgot your password?</h2>
            <SuperInput inputHeader="Email" inputText={""}/>
            <p>Enter your email address and we will send you further instruction</p>
            <button>SuperButton</button>
            <p>Did you remember your password?</p>
            <a href=""> Try loginning in</a>
        </div>
    )
}