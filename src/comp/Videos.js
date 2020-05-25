import React from 'react';
import Modal from './Modal2';
function imagegal(props){
    return(
    <div>
        <div><img className="px-1 py-1" data-toggle="modal" data-target={"#"+props.target} src={props.loc} alt={props.name}  style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
        <Modal loc={props.loc} name={props.name} cat={props.cat} tar={props.target} link={props.vid}/>
        </div>
    );
}
export default imagegal;