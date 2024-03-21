const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");





const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
  const  createPayload = req.body;
  const  parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({msg:"you send the wrong inputs"})
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false

  });

  res.json({
    msg: "TODO Created"
  });

})

app.get("/todo", async (req,res)=>{

    const todos = await todo.find({});
   
   res.json({todos}) 
    

})

app.put("/completed",async (req,res)=>{

    const updatePayload = req.body;
    const  parsePayload = createTodo.safeParse(updatePayload);
    if(!parsePayload.success){
    res.status(411).json({msg:"you send the wrong inputs"})
    return;
    }

    await todo.update({
        _id: req.body.id,
    },{completed: true});

    res.json({msg: "todo marked as Compeleted"});


})

app.listen(3000);