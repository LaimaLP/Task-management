import { Todo } from "./Todo.js";
const addTaskBtnDOM = document.getElementById("add_task"); 

const asideDOM = document.getElementById("aside")
const asideBackgroundDOM = asideDOM.querySelector(".aside-bg");
const asideCloceBtnDOM = asideDOM.querySelector('.aside-header button');

if(addTaskBtnDOM && asideDOM){
    addTaskBtnDOM.addEventListener("click", ()=>{
        asideDOM.classList.add("show");
    })

    asideBackgroundDOM.addEventListener("click", ()=>{
        asideDOM.classList.remove("show");
    })

    asideCloceBtnDOM.addEventListener("click", ()=>{
        asideDOM.classList.remove("show");
    })

    window.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
            asideDOM.classList.remove('show');
        }
        if (event.key === '+') {
            asideDOM.classList.add('show');
        }

    })
}


const formDOM = document.getElementById("task_form")
const formTitleDOM = document.getElementById('title');
const formDescDOM = document.getElementById('desc');
const formDeadlineDOM = document.getElementById('deadline');
const formTagsDOM = document.getElementById('tags');

if(formDOM){
    formDOM.addEventListener('submit', (event)=>{
        event.preventDefault();
        console.log("dscsd")
    })
}
console.log(formTitleDOM.value)
console.log(formDescDOM.value)
console.log(formDeadlineDOM.value)
console.log(formTagsDOM.value)

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