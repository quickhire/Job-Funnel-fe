import React, {useState} from "react";
import axios from 'axios'
import TopNav from "./TopNav"

<<<<<<< HEAD
=======
import "../less/ComponentStyles/LoginForm.less"
>>>>>>> c1c08127fa8d33c247c79c7b76993827c564461f
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import "./LoginForm.css"

const LoginForm = (props) => {

  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }


  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    axios.post('https://quickhire.herokuapp.com/api/auth/login', login)
        .then( res => {
            console.log('res from post', res.data)
            sessionStorage.setItem('token', res.data.token)
            setLogin({...login, isLoggedIn: true})
            props.history.push('/dashboard')
            setLoading(false);
        })
        .catch(error => {
            console.error(error)
            setLoading(false);
        })
  }

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <>
            <TopNav login={login} />
            <div className ="main-div">
                <div className="second-main">
                <h3 className="make">Make the most of your professional life.</h3>
                    <form className="main-form" onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            <label>Email</label>
                                <input type="text" name="email" value={login.email} onChange={handleChange} />
                            <label>Password</label>
                                <input type="password" name="password" value={login.password} onChange={handleChange} />
                        </div>
                        <button className="buttonclass"onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
            </>
        </StyledLoader>
    )
}

export default LoginForm;

const Buttonc = styled.div`

&: hover .buttonclass{
  background: #fff;
  color: #3073AB; 
  }
`
const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
