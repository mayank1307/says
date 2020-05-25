
import React from "react";
import Home from './Home';
import Contact from './contacts';
import About from './About';
import Work from './Work';
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane
} from "reactstrap";
// core components

function Example(){
  const [iconTabs, setIconTabs] = React.useState("1");
  return (
      <Card className="bg-light">
        <CardHeader className="bg-light">
          <Nav className="justify-content-center nav-pills row">
            <div className="col-4 col-md-2 px-2 d-block"><NavItem className="" >
              <NavLink className={iconTabs === "1" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("1");}}>
              <div className="row justify-content-center">
              Home</div>
              </NavLink>
            </NavItem></div>
            <div className="col-4 col-md-2 px-2 d-block"><NavItem className="">
                            <NavLink className={iconTabs === "2" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("2");}}>
              <div className="row justify-content-center">
              Works</div>
              </NavLink>
            </NavItem></div>
            <div className="d-none d-md-block col-4 col-md-2 px-2"><NavItem className="">
                            <NavLink className={iconTabs === "3" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("3");}}>
              <div className="row justify-content-center">
              About</div>
              </NavLink>
            </NavItem></div>
            <div className="col-4 col-md-2 px-2 d-block"><NavItem className="">
                            <NavLink className={iconTabs === "4" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("4");}}>
              <div className="row justify-content-center">
              Contact</div>
              </NavLink>
            </NavItem></div>
          </Nav>
        </CardHeader>
        <CardBody  style={{padding:"0",margin:"0"}}>
          <TabContent
            className="text-center"
            activeTab={"iconTabs" + iconTabs}
          >
            <TabPane tabId="iconTabs1">
              <Home/>
            </TabPane>
            <TabPane tabId="iconTabs2">
              <Work/>
            </TabPane>
            <TabPane tabId="iconTabs3">
              <About/>
            </TabPane>
            <TabPane tabId="iconTabs4">
              <Contact/>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
  );
}

export default Example;