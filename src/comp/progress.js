import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
function prog(props){
    return(
        <div className="mx-3 row">
                <div className="col-8 col-md-9 my-1"><ProgressBar id="prog" variant={props.var} now={props.data} /></div>
                <h5 id="textsvg" className={"col-4 col-md-3 "+props.textcol} align="left">{props.text}</h5>
        </div>
    );
}
export default prog;