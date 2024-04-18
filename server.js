const express = require('express')
const app = express();

app.get("/",(req,res)=>{
  res.json([
    {
      id:1,
      name:"harsh"
    },

    {
      id:1,
      name:"rahul"
    },

    {
      id:1,
      name:"aman"
    }
  ])
});

app.listen(3000,()=>{
  console.log("app is running on port 3000");
})