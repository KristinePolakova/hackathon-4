import '../Components/Login.css'


function Login() {


    return (
        <div>
            <form onsubmit="form_submit_login();return false;">
                <div className="container separateLoginTable">
                    <img className="imgLogo" src="images/logo.png"></img>
                    <div className="title signIn">
                        <h4>LOGO</h4>
                    </div>
                    <div className="textfields">
                        <div className="login">
                            <input type="email" id="email" placeholder="Email address"></input>
                            <br/>
                            <input type="password" id="password" placeholder="Password" required minlength="8"></input>
                        </div>
                    </div>
                    <div>
                        {/* <input type="submit" value="Log In"></input> */}
                        <button className="btn btn-dark btn-submit">Log In</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login