import React from 'react';
function Modal2(props){
    return(
        <div className="modal fade" style={{background:"rgba(0, 0, 0, 0.8)"}} id={props.tar} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.name}   #{props.cat}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                <video width="320" height="240" controls>
                    <source src={props.link} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <a href={props.link} download><button type="button" className="btn btn-dark">Download</button></a>
                </div>
            </div>
            </div>
        </div>
        );
}
export default Modal2;