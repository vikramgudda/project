var express = require("express");
var app = express(); //include the module .this give us the capability the read the body.

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const fs = require('fs');
let users=[];
const fun=()=>{
}

app.post("/Login", function (request, response) {
  let user1 = request.body.username;
  let passwd = request.body.password;
  console.log(user1);
  if(!user1) {
      response.status(400).json("enter username");
// stop further execution in this callback
      return;
  }
  if(!passwd) {
      response.status(400).json("enter password");
// stop further execution in this callback
      return;
  }
 
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);
        const u=databases["Users"]
        
        for (let index = 0; index < u.length; index++) {
            const element = u[index]["name"];
            const e=u[index]["password"];
            users.push(element+":"+e);
            
        }
        console.log(users);
        let val = users.includes(user1+":"+passwd);
        console.log(val);
        
          if(val){
              console.log("success");
              response.status(200).json("user authenticated");
        
              return;
          } else {
              response.status(400).json("user does not exist");
              return;
          }
   
        // print all databases
        // databases.forEach(db => {
        //     console.log(`${db.name}: ${db.type}`);
        // });
    }

});  
 
  
});
app.listen(4000);