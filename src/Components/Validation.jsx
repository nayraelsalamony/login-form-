import React, { useState ,useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
export default function Validation() {
    let [inputName,setInputName]=useState();
    let[inputEmail,setInputEmail]=useState();
   let[inputPassword, setInputPassword]=useState();
    let changeNameInput=(e)=>{
        if (e.target.value===""){
            setInputName("name is requer");
            e.target.style.borderColor='red';
        }
        
        else if (e.target.value.match("^[A-Za-z][A-Za-z0-9_]{3,29}$")){
            setInputName("");
            e.target.style.borderColor='green';
        }
        else {
            setInputName("should be more than 3 can not start with number ");
            e.target.style.borderColor='red';
        }
    }
    let changeEmailInput=(e)=>{
        if (e.target.value===""){
            setInputEmail("email is requer");
            e.target.style.borderColor='red';
        }
       else if(e.target.value.indexOf("@") > 1 &&
        e.target.value.indexOf(".", e.target.value.indexOf("@")) >=
        e.target.value.indexOf("@") + 1){
            setInputEmail("");
            e.target.style.borderColor='green';
        }else{
            setInputEmail("Not valid email");
            e.target.style.borderColor='red';
        }
    }
    let changePasswordInput=(e)=>{
        if (e.target.value===""){
            setInputPassword("password is requer");
            e.target.style.borderColor='red';
        }
       else if(e.target.value.length < 8){
            setInputPassword("Not valid password");
            e.target.style.borderColor='red';
        }else{
            setInputPassword("");
            e.target.style.borderColor='green';
        }  
    }
    let loginvalid=(name , email ,password)=>{
        if (password.target.value===""){
            setInputPassword("password is requer");
            password.target.style.borderColor='red';
        }
        if (email.target.value===""){
            setInputEmail("email is requer");
            email.target.style.borderColor='red';
        }
        if (name.target.value===""){
            setInputName("name is requer");
            name.target.style.borderColor='red';
        }
    }
    return (
        <>
            <div style={{ backgroundColor: 'gray', width: "450px", height: "380px", borderRadius: "10px" ,marginLeft:"400px",marginTop:"150px"}}>
                <Form style={{ width: "400px", height: "350px" ,paddingLeft:"10%", marginBottom:"50px" }}>
                   <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formname">
                        <Form.Control type="text" placeholder="Enter username"  
                        onChange={(e)=>{
                            changeNameInput(e);
                        }}/>
                        <Form.Label style={{border:"3px"}}>{inputName}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email " 
                        onChange={(e)=>{
                            changeEmailInput(e);
                        }}
                        />
                        <Form.Label style={{border:"3px"}}>{inputEmail}</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"
                        onChange={(e)=>{
                            changePasswordInput(e);
                        }}
                        />
                        <Form.Label style={{border:"3px"}}>{inputPassword}</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(named,email,pass)=>{loginvalid(named,email,pass);}}>
                        login
                    </Button>
                </Form>
            </div>
        </>
    )
}

