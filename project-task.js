/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  let incompleteTasks = todos.filter((task) => task.completed === false);
  console.log(incompleteTasks);


  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  
  
  let taskByPriority = todos.sort((a, b) => a.priority - b.priority);
  console.log(taskByPriority);

  //Totaly lost on how sort paramters work, something bizare is going on with establishing a range with the parameters. I can get it to work but I need to review for understanding what is going on.
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */


let completedTasksArray = todos.map(tasks => ({...tasks, completed: true}));
console.log(completedTasksArray);

//now functions correctly

  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  
let prioritizedIncompletes = todos.filter(task => task.completed === false).sort((a, b) => a.priority - b.priority);
console.log(prioritizedIncompletes);

//method chaining now functions correctly 

  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);


 //Scratchpad follows 

  let stringArray = ["Golbin", "Bokoblin", "Moblin", "Jack Dorsey"];
  let uppercaseArray = stringArray.map(string => string.toUpperCase());
  console.log(uppercaseArray);


function createGreeter(greeting) {
  return function(name) {
    return `${greeting} ${name}!`;
  }
};

const hiGreeter = createGreeter("Hi!");
console.log(hiGreeter('Susan'));
