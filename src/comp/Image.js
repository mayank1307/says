import React from 'react';
import Modal from './Modal';
function imagegal(props){
    return(
    <div>
        <img className="py-1" data-toggle="modal" data-target={"#"+props.target} src={props.loc+"-min.jpg"} alt={props.name}  style={{height:"15em",width:"100%",objectFit:"cover"}} />
        <Modal loc={props.loc} name={props.name} cat={props.cat} tar={props.target}/>
        </div>
    );
}
export default imagegal;