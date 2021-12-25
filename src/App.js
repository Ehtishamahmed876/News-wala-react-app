
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
const Main = ()=>  {
  // state = {
  //  progress:0
  
  // }
  const [progress, setprogress] = useState(1)
  
  // setprogress = (progress)=>{
  //   this.setState({
  //     progress: progress
  //   })
  // }
  
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
    
      />
        <Switch>
        <Route exact path="/"><News  setprogress = {setprogress}  key="general"pagesize={5} country="in"  category="general"/></Route>
        <Route exact path="/business"><News  setprogress = {setprogress} key="business"pagesize={5} country="in"  category="business"/></Route>
        <Route exact path="/entertainment"><News  setprogress = {setprogress} key="entertainment"pagesize={5} country="in"  category="entertainment"/></Route>
        <Route exact path="/health"><News  setprogress = {setprogress} key="health"pagesize={5} country="in"  category="health"/></Route>
        <Route exact path="/science"><News  setprogress = {setprogress} key="science"pagesize={5} country="in"  category="science"/></Route>
        <Route exact path="/sports"><News  setprogress = {setprogress} key="sports"pagesize={5} country="in"  category="sports"/></Route>
        <Route exact path="/technology"><News  setprogress = {setprogress} key="technology" pagesize={5} country="in"  category="technology"/></Route>
        

        </Switch>
        </Router>
      </div>
    )
  }
export default Main;



