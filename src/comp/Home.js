import React from 'react';
import '../App.css';
import Header from './Header';
import WorkHome from './workhome';
import Hire from './hire';

function Home() {
    return(
        <div>
           <Header/>
           <WorkHome/>
            <Hire/>
        </div>
    );
}
export default Home;
