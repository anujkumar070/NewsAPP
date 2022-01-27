
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

const App =(props)=> {
 
  const [progress, setProgress] = useState(10);
  const [mode, setMode] = useState('light');
  
  
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const handleClick = ()=>{
    if(mode ==='light')
    {
        setMode('dark');
        document.body.style.background='#545149';
    }
    if(mode ==='dark'){
        setMode('light');
        document.body.style.background='white';
    }
  }
    return (
      <div>
        <BrowserRouter>
              <LoadingBar
              color='#f11946'
              
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <Navbar mode={mode} handleClick={handleClick} />
            <Routes>
                <Route exact path="/"  element={<News setProgress={setProgress}  apiKey={apiKey}   key="general"  pageSize={pageSize} category="General" country="in"  mode={mode}/>}> </Route>
                <Route exact path="/business"  element={<News setProgress={setProgress}  apiKey={apiKey}  key="business"  pageSize={pageSize} category="Business" country="in" mode={mode}/>}> </Route>
                <Route exact path="/general"   element={<News setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={pageSize} category="General" country="in" mode={mode}/>}> </Route>
                <Route exact path="/health"   element={<News setProgress={setProgress}  apiKey={apiKey}  key="health" pageSize={pageSize} category="Health" country="in" mode={mode}/>}> </Route>
                <Route exact path="/sports"    element={<News setProgress={setProgress}  apiKey={apiKey}  key="sports" pageSize={pageSize} category="Sports" country="in" mode={mode}/>}> </Route>
                <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}  key="science" pageSize={pageSize} category="Science" country="in" mode={mode}/>}> </Route>
                <Route exact path="/technology"   element={<News setProgress={setProgress}  apiKey={apiKey}  key="technology" pageSize={pageSize} category="Technology" country="in" mode={mode}/>}> </Route>
                <Route exact path="/entertainment"   element={<News setProgress={setProgress}  apiKey={apiKey}  key="entertainment" pageSize={pageSize} category="Entertainment" country="in" mode={mode}/>}> </Route>
            </Routes>
         </BrowserRouter>

      </div>
    )
  


}
export default App;
