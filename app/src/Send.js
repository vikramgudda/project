import {useState} from "react";
import api from "./api/contacts"

// import axios from "axios";
// import "./Login.css";
 import store from "./store";
// import {useHistory} from "react-router-dom";
function Send(){
    const [username,setUsername]=useState();
    const [amount,setAmount]=useState();

    const retrieve=async(user)=>{
        const response=await(api.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].name === user)
                {
                    return sol[index];
                }
                
            }
            return false;
        
      }
      
        
     
      
      const gu=async()=>{
        let all;
          const getall=async()=>{
              all= await retrieve(store.getState().user);
              console.log(all) 
              };
             await getall();
              
              console.log(all);
             all.balance=parseInt(all.balance)-parseInt(amount);
             
          const response = api.put(`./Users/${all.id}`,all);
  
      } 
     
      
      const fun=async()=>{
      let all;
        const getall=async()=>{
            all= await retrieve(username);
            console.log(all) 
            };
           await getall();
            
            console.log(all);
           all.balance=parseInt(all.balance) + parseInt(amount);
           
        const response = api.put(`./Users/${all.id}`,all);
            gu();

    }

    return(
        <div class = "center">
            <h1>Send Money</h1>
            <div class ="form">
                <div class ="text-field">
                    <input type="username" placeholder="enter username" onChange={(e)=>setUsername(e.target.value)}/><br/>
                </div>
                <div class = "text-field">
                    <input type="Amount" placeholder="enter Amount" onChange={(e)=>setAmount(e.target.value)}/><br/>
                </div>
            
                
                <button class="button" onClick={fun}>Send</button>
            </div>
            
        </div>
    )
}


export default Send;
