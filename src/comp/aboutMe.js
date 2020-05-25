import React from 'react';
import Prog from './progress';
import './text.css'
function aboutMe(){
    return(
        <div style={{margin:"0"}}>
            <div className="row">
            <div className="px-2 col-12">
                <Prog var="warning" text="Html" data="91"/>
                <Prog var="info" text="CSS" data="83"/>
                <Prog var="warning" text="React" data="85"/>
                <Prog var="info" text="JavaScript" data="79"/>
                <Prog var="warning" text="MongoDB" data="69"/>
                <Prog var="info" text="Express js" data="73"/>
                <Prog var="warning" text="Node js" data="87"/>
                <Prog var="info" text="BootStrap" data="95"/>
                <Prog var="warning" text="Ligthroom" data="87"/>
                <Prog var="info" text="Figma" data="93"/>
                <Prog var="warning" text="Adobe XD" data="97"/>
            </div>
            </div>
        </div>
    );
}
export default aboutMe;