import React from 'react';
import Videos from './Videos';
function tab2x(){
    return(
        <div className="row contain">
            <div className="col-10"><Videos  target="vid1" vid="./vid/vid (1).mp4" loc="./img/vid1.gif" name="Victoria" cat="Mood" /></div>
            <div className="col-10 col-md-5"><Videos  target="vid2" vid="./vid/vid (2).mp4" loc="./img/vid2.gif" name="Market" cat="Shooping" /></div>
            <div className="col-10 col-md-5"><Videos  target="vid3" vid="./vid/vid (3).mp4" loc="./img/vid3.gif" name="Waves" cat="Beach" /></div>
        </div>
    );
}
export default tab2x;