/**
 * Todo
 * @typedef {Object} Todo
 * @param {number} id - The id of Todo.(required)
 * @param {string} content - The content of Todo.(required)
 * @param {boolean} completed - The category of Todo.(required)
 * @param {string} category - The category of Todo.(required)
 * @param {Array} tags - The tags of Todo.(optional)
 */

// CREATE
/**
 * Create a Todo.
 * @param {string} content - The content of Todo.(required)
 * @param {string} category - The category of Todo.(required)
 * @param {Array} tags - The tags of Todo.(optional)
 * @returns {number} - The id of new Todo.
 */
const CreateTodo = (content, category, tags) => {};

// READ
/**
 * Read all of Todos.
 * @returns {Array} - Todo list.
 */
const ReadTodos = () => {};

/**
 * Read one Todo with the id.
 * @param {number} id - The id of Todo.(required)
 * @returns {Object} - The Todo with the id.
 */
const ReadTodo = (id) => {};

// UPDATE

/**
 * Update Todo with id. Only when tags is not a empty array([]), change tags.
 * @param {number} id - The id of Todo.(required)
 * @param {string} content - The content of Todo.(required)
 * @param {boolean} completed - The category of Todo.(required)
 * @param {string} category - The category of Todo.(required)
 * @param {Array} tags - The tags of Todo.(optional)
 */
const UpdateTodo = (id, content, completed, category, tags) => {};

// DELETE

/**
 * Delete Todo with id.
 * @param {number} id - The id of Todo.(required)
 */
const DeleteTodo = (id) => {};

/**
 * Delete all Todos.
 */
const DeleteTodos = () => {};

/**
 * Delete a tag of Todo with id.
 * @param {number} id - The id of Todo.(required)
 * @param {string} tag - The tag of Todo(required)
 */
const DeleteTag = (id, tag) => {};

/**
 * Delete all tags of Todo with id.
 * @param {number} id - The id of Todo.(required)
 */
const DeleteTags = (id) => {};
