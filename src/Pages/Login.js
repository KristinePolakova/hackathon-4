import '../Components/Login.css'


function Login(props) {

    function form_submit_login()
    {
        props.setLogin(true);
    }

    return (
        <div>
            <form onSubmit={()=>form_submit_login()}>
                <div className="container separateLoginTable">
                    <img className="imgLogo" src="images/logo.png"></img>
                    <div className="textfields">
                        <div className="login">
                            <input type="email" id="email" placeholder="Email address"></input>
                            <br/>
                            <input type="password" id="password" placeholder="Password" required minlength="8"></input>
                        </div>
                    </div>
                    <div>
                        <button  className="btn btn-dark btn-submit">Log In</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login