import React from 'react';
import Modal from './Modal';
function imagegal(props){
    return(
    <div>
        <img className="px-1 py-1" data-toggle="modal" data-target={"#"+props.target} src={props.loc} alt={props.name}  style={{height:"300px",width:"300px",objectFit:"cover"}} />
        <Modal loc={props.loc} name={props.name} cat={props.cat} tar={props.target}/>
        </div>
    );
}
export default imagegal;