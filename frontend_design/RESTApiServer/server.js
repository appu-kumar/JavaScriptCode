import express from "express";

const app = express();
// req.body to json
app.use(express.json())

console.log("oye coming here");
const todos = [
    { id: 1, title: "break fast", completed: false },
    { id: 2, title: "lunch", completed: false },
    { id: 3, title: "dinner", completed: false },
  ];


 // GET all todos 
app.get("/api/todos/", (req, res) => {
  res.json(todos);
});

app.get("/api/todo/:id",(req,res)=>{
     const foundTodoIdx = todos.findIndex((todo)=>todo.id === Number(req.params.id));
     if(foundTodoIdx !== -1){
         res.json(todos[foundTodoIdx]);
     }
     else{
        res.json("Todo not found")
     }
})

// POST add todo
app.post("/api/todos/",(req,res)=>{
    const newTodo = req.body;   // we can not do this thing without this app.use(express.json())
    todos.push(newTodo);
    res.json("Todo added successfully!");
})

// put update todo 

app.put("/api/todos/",(req,res)=>{
    const comingTodo = req.body;
    const foundTodoIdx = todos.findIndex((todo)=>todo.id === Number(comingTodo.id));
    if(foundTodoIdx !== -1){
        todos[foundTodoIdx] = {...comingTodo};
        res.json("Todo updated successfully")
    }
    else{
        res.json("todo not found")
    }
})

// partial update
app.patch("/api/todos/",(req,res)=>{
    const comingTodo = req.body;
    const foundTodoIdx = todos.findIndex((todo)=>todo.id === Number(comingTodo.id));
    if(foundTodoIdx !== -1){
        todos[foundTodoIdx] = {...todos[foundTodoIdx],...comingTodo};
        res.json("Todo updated successfully")
    }
    else{
        res.json("todo not found")
    }
})

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
