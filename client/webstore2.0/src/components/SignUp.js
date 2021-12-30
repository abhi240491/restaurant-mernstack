import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom'
import './SignUp.css';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {showErrorMsg,showSuccessMsg} from '../helpers.js/Message';
import {showLoading} from '../helpers.js/loader';
import { signup } from "../api/auth";


function SignUP() {
    const [formData, setFormData] = useState({
        username: 'Joe',
        email: 'joe@gmail.in',
        password:'kkkeeeee',
        confPassword: 'kkkeeeee',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username, 
        email, 
        password,
        confPassword,
        successMsg,
        errorMsg,
        loading
        }   =   formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: false,
            successMsg: false,
        })
        
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(formData);
        if(isEmpty(username)||isEmpty(password) || isEmpty(email) || isEmpty(confPassword)){
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
                successMsg: false,
            })
        }
        else if(!isEmail(email)){
            setFormData({
                ...formData,
                errorMsg: 'Incorrect Email',
                successMsg: false,
            })
        }
        else if(!equals(password,confPassword)){
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match',
                successMsg: false,
            })
        }
        else {
            const {username,email,password} = formData;
            const data = {username,email,password};
            setFormData({...formData,loading:true});
            //the response from axios returned signup if the post request works.
            signup(data)
                .then(res => {
                    console.log(`Hurrah!!! axios did work repsone:${res}`);
                })
                .catch(err => console.log("Axios signup error"));
        }
    }


    const SignUpForm = () =>(
        <form   className = "signup-form "
                onSubmit = {handleSubmit}
                novalidate="novalidate"
        >

        {/*UserName*/}
        <div className="form-group input-group">
            <div className = 'input-group-prepend'>
                <span className = "input-group-text">
                    <i className = 'fa fa-user'></i>
                </span>
            </div>
            <input 
                name = 'username'
                value = {username}
                className = 'form-control'
                placeholder = 'Username'
                type = 'text'
                onChange = {handleChange}
                />
        </div>
        {/*EMAIL*/}
        <div className = 'form-group input-group'>
            <div className = 'input-group-prepend'>
                <span className = 'input-group-text'>
                    <i className = 'fa fa-envelope'></i>
                </span>
            </div>
            <input 
                name = 'email'
                value = {email}
                className = 'form-control'
                placeholder = 'Email-Address'
                type = 'email'
                onChange = {handleChange}
                />
        </div>
        {/*Password*/}
        <div className = 'form-group input-group'>
            <div className = 'input-group-prepend'>
                <span className = 'input-group-text'>
                    <i className = 'fa fa-lock'></i>
                </span>
            </div>
            <input 
                name = 'password'
                value = {password}
                className = 'form-control'
                placeholder = 'Create Password'
                type = 'password'
                onChange = {handleChange}
                />
        </div>
        {/*Confirm Password*/}

        <div className = 'form-group input-group'>
            <div className = 'input-group-prepend'>
                <span className = 'input-group-text'>
                    <i className = 'fa fa-lock'></i>
                </span>
            </div>
            <input 
                name = 'confPassword'
                value = {confPassword}
                className = 'form-control'
                placeholder = 'Confirm Password'
                type = 'password'
                onChange = {handleChange}
                />
        </div>
        <div className="form-group d-grid">
            <button 
                type="submit" 
                className="btn btn-primary btn-block" 
            >
                SignUp
            </button>
        </div>
        {/*already have account*/}
        <p className = 'text-center text-white bg-dark'>
            Already have an account?
            <Link to = '/signin'>Log In</Link>
        </p>
      </form>
    );
  return (
    <div className = "signup-container">
        <div className = 'row px-5 vh-100'>
            <div className = 'col-md-5 mx-auto align-self-center' >
                {errorMsg && showErrorMsg(errorMsg)}
                {successMsg && showSuccessMsg(successMsg)}
                {loading && showLoading()}
                {SignUpForm()}              
            
    </div>
    </div>
    </div>
  );
}

export default SignUP;
