import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import TaskController from './controllers/TaskController'; // Import the TaskController

const app = express();
const PORT = 3000;

// Initialize the TaskController
const taskController = new TaskController();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes

// Home Route: Display tasks
app.get('/', (req, res) => {
    const tasks = taskController.getTasks(); // Fetch tasks
    res.render('index', { tasks }); // Pass tasks to the view
});

// Add a new task
app.post('/add', (req, res) => {
    const { title, deadline } = req.body;
    if (title) {
        if (deadline) {
            taskController.addTask(title, new Date(deadline)); // Add task with deadline
        } else {
            taskController.addTask(title); // Add task without deadline
        }
    }
    res.redirect('/'); // Redirect to home
});

// Mark a task as complete
app.post('/complete/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse the ID
    taskController.markTaskComplete(id); // Mark the task as complete
    res.redirect('/'); // Redirect to home
});

// Delete a task
app.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse the ID
    taskController.deleteTask(id); // Delete the task
    res.redirect('/'); // Redirect to home
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
