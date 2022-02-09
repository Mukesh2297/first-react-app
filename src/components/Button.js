const Button = ({className, buttonAction, onBtnClick, id, val})=> {
    return (
        <button className={className} onClick={()=>{onBtnClick(id,buttonAction, val)}}>{buttonAction}</button>
    )
}

export default Button;