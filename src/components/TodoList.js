import ToDo from '../components/Todo';

const ToDoLists = ({todoLists, onToDoAction})=>{
    console.log(todoLists);

    return (
        <ul>
        {todoLists.map(toDoItem=> <ToDo key={toDoItem.id} toDoItem={toDoItem} onToDoAction={onToDoAction} />)}
        </ul>
    )
}

export default ToDoLists;