const express = require("express");
const cors = require("cors"); // Import cors module

const port = 3000;
const app = express();

// Use CORS middleware
app.use(cors());

// Mock Todos data
const TODOS = [
  { id: 1, title: "Todo 1", description: "This is todo 1", completed: false },
  { id: 2, title: "Todo 2", description: "This is todo 2", completed: true },
  { id: 3, title: "Todo 3", description: "This is todo 3", completed: false },
  { id: 4, title: "Todo 4", description: "This is todo 4", completed: true },
  { id: 5, title: "Todo 5", description: "This is todo 5", completed: false },
];

// API endpoint to fetch a todo by id
// app.get("/todos", (req, res) => {
//   const id = parseInt(req.query.id, 10); // Ensure id is parsed as an integer
//   const todo = TODOS.find((x) => x.id === id);

//   if (todo) {
//     res.json({ todo });
//   } else {
//     res.status(404).json({ error: "Todo not found" });
//   }
// });

app.get('/todos', (req , res)=>{
	res.status(200).json({todos:TODOS})

})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
