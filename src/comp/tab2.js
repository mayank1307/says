import React from 'react';
import Image from './Image';
function tab2(){
    return(
        <div className="row">
            <div className="col-12 col-md-4 d-md-block"><Image  target="photos2" loc="./img/port (2)" name="Leaves" cat="Nature" /></div>
            <div className="col-12 col-md-4 d-md-block"><Image  target="photos3" loc="./img/port (6)"  name="Waves" cat="Beach" /></div>
            <div className="col-12 col-md-4 d-md-block d-none"><Image  target="photos4" loc="./img/port (18)" name="City" cat="Night" /></div>
            <div className="col-12 col-md-4 d-md-block d-none"><Image  target="photos1" loc="./img/port (15)" name="Dogs" cat="Love" /></div>
            <div className="col-12 col-md-4 d-md-block d-none"><Image  target="photos5" loc="./img/port (22)" name="Stick" cat="Village" /></div>
            <div className="col-12 col-md-4 d-md-block"><Image  target="photos6" loc="./img/port (20)" name="Tree" cat="Nature" /></div>
        </div>
    );
}
export default tab2;