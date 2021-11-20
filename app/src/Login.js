import {useState} from "react";
import axios from "axios";
// import "./Login.css";
 import store from "./store";
import {useHistory} from "react-router-dom";
function Login(){
    const[username1,setUsername]= useState("");
    const[password1,setPassword]= useState("");
    const history = useHistory();
    const LoginUser=()=>{
        
        axios.post("/Login",{username:username1, password:password1}).then((red)=>{
              
            store.dispatch({type:"loginSuccess"});
            store.getState().user=username1
            console.log(store.getState())
            
            history.push("/profile");
        }
        ).catch((err)=>{
            store.dispatch({type:"loginFail"});
            
            alert("Invalid username or password");
        })
    };

    return(
        <div class = "center">
            <h1>Login</h1>
            <div class ="form">
                <div class ="text-field">
                    <input type="username" placeholder="enter username" onChange={(e)=>setUsername(e.target.value)}/><br/>
                </div>
                <div class = "text-field">
                    <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                </div>
            
                
                <button class="button" onClick={LoginUser}>Login</button>
                <div class="signup_link">
                    Not a member?<a href="signup">Signup</a>
                </div>
            </div>
            
        </div>
    )
}


export default Login;
