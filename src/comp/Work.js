import React from 'react';
import './text.css';
import Tab1 from './tab1';
import TabWp from './TabWp';
import Tabw4 from './TabVw4';
import Hire from './hire';

function Work(){
    return(   
        <div style={{margin:"0"}}>
            <div style={{padding:"5%"}}>
            <div className="nav-tabs-navigation nav-pills">
                <ul className="nav row" data-tabs="tabs">
                <li className="nav-item col-6 col-md-3"><a style={{width:"125px"}} className="nav-link active" href="#photo1" data-toggle="tab">Photography</a></li>
                <li className="nav-item col-6 col-md-3"><a style={{width:"125px"}} className="nav-link" href="#web1" data-toggle="tab">Web-Devs</a></li>
                <li className="nav-item col-6 col-md-3"><a style={{width:"125px"}} className="nav-link" href="#video1" data-toggle="tab">Videography</a></li>
                <li className="nav-item col-6 col-md-3"><a style={{width:"125px"}} className="nav-link" href="#design1" data-toggle="tab">Illustrations</a></li>
            </ul>
            </div>
            </div>
            <div className="card-body">
                <div className="tab-content text-center">
                <div className="tab-pane" id="web1">
                    <Tab1/>
                </div>
                <div className="tab-pane active" id="photo1">
                    <TabWp/>
                </div>
                <div className="tab-pane" id="design1">
                    
                </div>
                <div className="tab-pane" id="video1">
                    <Tabw4/>
                </div>
                </div>
            </div>
            <Hire/>
    </div>
    );
}
export default Work;