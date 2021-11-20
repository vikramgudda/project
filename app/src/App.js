// import logo from './logo.svg';
import './App.css';
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import store from "./store"
// import Button from "@material-ui/core/Button"
 import {useState} from "react";
 import { useEffect } from 'react';
import api from "./api/contacts"
// import Counter from './Counter';
import Signup from "./Signup"
import Login from './Login';
import Home from './Home'
import Send from "./Send"
function App() {
  // const [color,setColor]=useState("red");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(()=>count+1);
  //   }, 3000);
  // });
 const [user,setUser] = useState();
  const retrieve=async()=>{
    const response=await(api.get("/Users"));
    // console.log(response.data);
    // const sol=response.data;
    const sol=response.data;
        for (let index = 0; index < sol.length; index++) {
            if(sol[index].name === "v")
            {
                return sol[index];
            }
            
        }
        return false;
    
  }
  
  useEffect(() => {
   const getall=async()=>{
   const all= await retrieve();
   console.log(all)
   if(all)setUser(all) 
   };
   getall();
  }, []);

  const addUserHandler=async (u)=>{
    console.log(u);
    const request={
      "id":uuid(),
      "balance":Math.floor(Math.random() * 100000) + 1,
      ...u
    }
    const response=await(api.post("/Users",request));
    console.log(response);
    setUser([response.data]);

  }
  
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [user]);
//  console.log(store.getState());

  return (
    <div className="ui container">
      <Router>
    
          {/* <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          /> */}
          <Route
            path="/Signup"
            render={(props) => (
              <Signup {...props} addContactHandler={addUserHandler} />
            )}
          />

           <Route
            path="/Login"
            render={() => (
              <Login />
            )}
          /> 
           <Route
            path="/profile"
            render={() => (
              <Home/>
            )}
          /> 
          <Route
            path="/send"
            render={() => (
              <Send/>
            )}
          /> 

          {/* <Route path="/contact/:id" component={ContactDetail} /> */}

      </Router>
    </div>
  );
}

export default App;