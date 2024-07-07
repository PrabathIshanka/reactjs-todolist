# Todo List App with React and Vite

This project is a simple Todo List application built using React and Vite. It allows users to add, edit, and delete tasks. The state of the tasks is persisted using `localStorage`.

## Features

- **Add Todos**: Users can add new todos by entering text into the input field and clicking the "Add" button.
- **Edit Todos**: Users can edit existing todos by clicking the edit button next to a todo item. The text of the selected todo will appear in the input field for editing.
- **Delete Todos**: Users can delete todos by clicking the delete button next to a todo item.
- **Persist Todos**: The list of todos is saved in the browser's `localStorage` to ensure data persistence across page reloads.

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/PrabathIshanka/todo-list-app.git
    cd todo-list-app
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the development server**:

    ```sh
    npm run dev
    ```

4. **Open your browser**:

    Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

### Adding a Todo

1. Enter the text for the new todo in the input field.
2. Click the "Add" button to add the todo to the list.

### Editing a Todo

1. Click the edit button (pencil icon) next to the todo you want to edit.
2. The text of the selected todo will appear in the input field.
3. Modify the text in the input field.
4. Click the "Add" button to save the changes.

### Deleting a Todo

1. Click the delete button (trash can icon) next to the todo you want to delete.
2. The todo will be removed from the list.

## Components

### App Component

- Manages the state of the todos.
- Handles adding, editing, and deleting todos.
- Persists the state of the todos in `localStorage`.

### TodoInput Component

- Provides an input field and a button to add new todos.
- Updates the input field based on user input.

### TodoList Component

- Renders the list of todos using the TodoCard component.
- Passes necessary props to TodoCard for handling edits and deletions.

### TodoCard Component

- Renders individual todo items.
- Provides buttons for editing and deleting todos.

## Styles

- Basic styling is applied to make the app visually appealing.
- Font Awesome icons are used for edit and delete buttons.


