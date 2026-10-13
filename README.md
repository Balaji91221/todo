# React Todo List

**Capture a task, revise it, and remove it when you are finished.**

A compact React project for practicing forms, component props, immutable array updates, and local UI state.

[Demo link](https://balaji91221.github.io/todo/)

## Features

- Add a task through a controlled form.
- Edit an existing task in the same form.
- Delete a task from the list.
- Display the current task collection immediately after each change.

## Run locally

Open the source directory with Node.js/npm installed:

```bash
npm install
npm start
```

Visit [localhost:3000](http://localhost:3000). The project also provides `npm run build` for a static bundle.

## Example

Add `Read a chapter`, edit it to `Read chapter 2`, then delete it. This exercises the three state transitions without needing an account or server.

## Component design

```text
App — owns tasks, input, and selected edit ID
 ├── TodoForm — input and submission
 └── TodoList — rendering, edit action, and delete action
```

[`src/App.js`](src/App.js) owns the state and event handlers. [`TodoForm.jsx`](src/components/TodoForm.jsx) and [`TodoList.jsx`](src/components/TodoList.jsx) receive the data and callbacks they need.

## Scope

Tasks are stored in React memory and reset when the page reloads. The current implementation does not persist tasks or implement a completed/uncompleted state. The linked demo is retained from the original project documentation.
