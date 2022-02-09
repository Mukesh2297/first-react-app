import Button from '../components/Button';

const ToDo = ({toDoItem,onToDoAction}) =>{
    return (
        <div className='p-2 d-flex gap-3'>
            <div className='item' style={{wordBreak:"break-all"}}><li>{toDoItem.toDo}</li></div>&nbsp;
            <div className='d-flex'>
            <Button className='btn btn-primary' buttonAction='Edit' onBtnClick={onToDoAction} id={toDoItem.id} />
            &nbsp;
            <Button className='btn btn-danger' buttonAction='Delete' onBtnClick={onToDoAction} id={toDoItem.id} />
            </div>
        </div>
    )
}

export default ToDo;