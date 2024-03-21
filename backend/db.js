const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhy:NjvbdUT45XODDWDa@cluster0.hiczyck.mongodb.net/TODO_fullstack');


// Define schemas
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed: Boolean
});


const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo
}
