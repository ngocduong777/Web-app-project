import React from 'react'

function SignUp() {
    return (
        <div className="sign-up-container">
            <div>
                <p className="sign-up-title">Sign Up!</p>
            </div>
            <div >
                <div className="sign-up-input-container" >
                    <label className="sign-up-labels">Email address: (*)</label>
                    <input className="sign-up-inputs" autoComplete="off" type="email" name="email" id="email" /><br />
                </div>
                <div className="sign-up-input-container">
                    <label className="sign-up-labels">Username: (*)</label>
                    <input className="sign-up-inputs" autoComplete="off" type="text" name="username" id="uname" /><br />
                </div>
                <div className="sign-up-input-container">
                    <label className="sign-up-labels">Gender: </label>
                    <input className="sign-up-radios" type="radio" name="Male" value="male" />Male
                    <input className="sign-up-radios" type="radio" name="Female" value="female" />Female<br />
                </div>
                <div className="sign-up-input-container">
                    <label className="sign-up-labels">Age: </label>
                    <input className="sign-up-inputs" autoComplete="off" type="text" name="age" id="age" /><br />
                </div>
                <div className="sign-up-input-container">
                    <label className="sign-up-labels">Password: (*)</label>
                    <input className="sign-up-inputs" autoComplete="off" type="password" name="password" id="pwd" /><br />
                </div>
                <div className="sign-up-input-container">
                    <label className="sign-up-labels">Confirm password: (*)</label>
                    <input className="sign-up-inputs" autoComplete="off" type="password" name="confirm-password" id="cf-pwd" /><br />
                </div>
            </div>
            <div className="sign-up-button-container">
                <input className="sign-up-buttons" type="submit" value="Sign Up" />
                <button className="sign-up-buttons" onClick={() => {
                        window.open("/", "_self");
                        window.close();
                    }}>Cancel</button>
            </div>
        </div>
    )
}

export default SignUp
