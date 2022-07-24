import React from 'react'
import '../Login/Login.css'
export default function Login() {
  return (
    <div>
        <div className='box'>
            <div className='a'>
                <label for="chk1">Login</label>
                <label for="chk1" id="sup">Sign up</label>
            </div>
            <div className='b'>
                <form action='' className='frm'>
                    <h6 className='title'>SIGN-UP</h6>
                    <input type="text" placeholder="Enter user name"/>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter password"/>
                    <input type="button" value="Sign up" id="btn"/>
                    <label for="chk1" id="btm"></label>
                </form>
            </div>
            <div className='c'>
            <form action='' className='frm'>
                    <h6 className='title'>LOGIN</h6>
                    <input type="text" placeholder="Enter user name"/>
                    <input type="password" placeholder="Enter password"/>
                    <input type="button" value="Login" id="btn"/>
                    <label for="chk2" id="btm"></label>
                </form>
            </div>
            <div className='d'></div>
            <div className='e'></div>
        </div>
        
    </div>
  )
}
