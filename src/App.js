import { Header } from "./components/Header";
import { useState } from "react";
import ToDoList from "./components/TodoList";
import TextInput from "./components/TextInput"

function App() {
  const list = [{toDo:'To learn react', id:1, isEdit: false},
  {toDo:'To learn Svelte', id:2, isEdit: false}, 
  {toDo:'To understand typescript better', id:3, isEdit: false}]
  const [toDoList, setToDoList] = useState(list);
  const [textVal, setTextVal] = useState("");
  const [toDoId, setToDoId] = useState();


  const modifyTodo = (id, btnAction)=>{
    let newToDo;
    if(btnAction === 'Delete'){
      newToDo = toDoList.filter((arrItem, ind)=>{
        return arrItem.id !== id;
      })
      setToDoList([...newToDo]);
    }
    else{
      newToDo = toDoList.filter(arrItem=> arrItem.id === id)[0];
      console.log(newToDo);
      setTextVal(newToDo.toDo);
      setToDoId(newToDo.id);
    }

  }

  const onInputChange = (inputVal)=>{
    console.log(inputVal)

  }

  const updatedToDo = (id,buttonAction, val)=>{
    console.log(id,buttonAction, val);
    if(id && buttonAction === 'Update'){
      let updatedToDos = [...toDoList];
      let ind = [...updatedToDos].findIndex(arrItem => arrItem.id === id);
      console.log(ind);
      updatedToDos[ind].toDo = val;
      setToDoList([...updatedToDos]);
      setTextVal(null);
      setToDoId(null);
    }
    else{
      let existingToDo = [...toDoList];
      let newToDo = {toDo: val, id: existingToDo.length + 1 , isEdit: false};
      setToDoList([...existingToDo, newToDo]);
      setTextVal(null);
      setToDoId(null);
    }

  }

  return (
    <div className="App">
      <Header />
      <TextInput toDoId={toDoId} textVal={textVal} textInputChange={onInputChange} editedToDo={updatedToDo} />
      <ToDoList  todoLists={toDoList} onToDoAction={modifyTodo} />
    </div>
  );
}

export default App;
