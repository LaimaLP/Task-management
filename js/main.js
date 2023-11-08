import { Todo } from "./Todo.js";

const kanban = new Todo('#kanban', ['Backlog', 'Todo', 'In progress', 'Done']);

kanban.addTask({
    columnIndex: 1,
    title: "Pirmos uzduoties antraste",
    description: "Pirmos uzduoties pilnas aprasas.... labai issamiai",
    createdOn: "2023-11-08 09:03:15",
    deadline: "2023-12-25 00:00:00",
    tags: [{text: 'Design', color: '#333'}],
})

kanban.addTask({
    columnIndex: 0,
    title: "Antros uzduoties antraste",
    description: "Antros uzduoties pilnas aprasas.... labai issamiai",
    createdOn: "2023-11-08 10:03:15",
    deadline: '2023-12-25 00:00:00',
    tags: [
        {text: 'UX', color: '#f00'}, 
        {text: "UI", color: '#090'}
    ],
})

kanban.addTask({
    columnIndex: 0,
    title: "Trecios uzduoties antraste",
    description: "Trecios uzduoties pilnas aprasas.... labai issamiai",
    createdOn: "2023-11-08 10:13:15",
    deadline: '2023-12-20 00:00:00',
    tags: [
        {text: 'Development', color: '#00c'}],
})

console.log(kanban)