import {useState} from "react";
import Button from "../components/Button";


const TextInput =({toDoId,textVal,textInputChange, editedToDo})=>{
    let selectedVal = textVal;
    let id = toDoId;
    console.log(selectedVal, id);
    const [selectedToDo, editSelectedToDo] = useState("");

    const renderButton = (toDo, id, val) =>{
        if(toDo){
            return <Button buttonAction="Update" className="btn btn-light"  id={id} val={val} onBtnClick={editedToDo} />
        }
        else{
            return <Button buttonAction="Add Task" className="btn btn-light"  id={id} val={val} onBtnClick={editedToDo} />
        }
    }
    
    const onInputChange = (val)=>{
       editSelectedToDo(val);
    }

    return (
        <div key={id} style={{width:"100%"}} className="d-flex justify-content-center">
        <input id={id}
         defaultValue={selectedVal ? selectedVal : "" } 
         style={{width:"30%", margin:'15px'}} 
         className='form-control' type='text'  
         onChange={(e)=>{onInputChange(e.target.value)}} />
        {renderButton(selectedVal, toDoId, selectedToDo)}
        </div>
        )


}

export default TextInput;