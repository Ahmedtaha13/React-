class Task {
    constructor(id, description, isDone = false) {
        this.id = id;
        this.description = description;
        this.isDone = isDone;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const taskId = this.tasks.length + 1;
        const task = new Task(taskId, description);
        this.tasks.push(task);
    }

    listTasks(filter = null) {
        if (filter === null) {
            return this.tasks;
        } else {
            return this.tasks.filter(task => task.isDone === filter);
        }
    }

    editTask(taskId, newDescription) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.description = newDescription;
            return true;
        }
        return false;
    }
}

// Example usage:
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Complete homework");
taskManager.addTask("Go for a run");

// List all tasks
console.log("All tasks:");
taskManager.listTasks().forEach(task => console.log(task));

// Edit a task
taskManager.editTask(1, "Complete assignment");
console.log("\nAfter editing:");
taskManager.listTasks().forEach(task => console.log(task));
