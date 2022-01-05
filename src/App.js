// import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import './Components/News'
import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route ,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  // name="Piyush";

  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey='0d0ecd1ad057405d905e1e81dfadcabe';

  const [progress,setProgess]=useState(0)
  

  // const setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  // setProgess(progress)

    return (
      <>
      <Router>
      <div>
      
        {/* Hello my first class based Component {name} */}
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgess}  key ="home" apikey={apiKey} pageSize={9} country="in" category="General"></News>}></Route >
          <Route exact path="/business" element={<News setProgress={setProgess}  key ="business" apikey={apiKey} pageSize={9} country="in" category="Business"></News>}></Route >
          <Route exact path="/entertainment" element={<News setProgress={setProgess} key ="entertainment" apikey={apiKey} pageSize={9} country="in" category="Entertainment"></News>}></Route >
          <Route exact path="/health" element={<News setProgress={setProgess}  key ="health" apikey={apiKey} pageSize={9} country="in" category="Health"></News>}></Route >
          <Route exact path="/science" element={<News setProgress={setProgess} key ="science" apikey={apiKey} pageSize={9} country="in" category="Science"></News>}></Route >
          <Route exact path="/sports" element={<News  setProgress={setProgess}key ="sports" apikey={apiKey} pageSize={9} country="in" category="Sports"></News>}></Route >
          <Route exact path="/technology" element= {<News setProgress={setProgess}  key ="technology" apikey={apiKey} pageSize={9} country="in" category="Technology"></News>}></Route >
          
        </Routes>
      </div>
      </Router>
      </>
    )
  
}

export default App