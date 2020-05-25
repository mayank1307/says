import React from 'react';
import Modal from './Modal';
function imagegal(props){
    return(
    <div>
        <img className="px-1 py-1" data-toggle="modal" data-target={"#"+props.target} src={props.loc} alt={props.name}  style={{maxHeight:"200px",width:"100%",objectFit:"cover"}} />
        <Modal loc={props.loc} name={props.name} cat={props.cat} tar={props.target}/>
        </div>
    );
}
export default imagegal;