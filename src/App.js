import './App.css';
import {ScreenFour,ScreenOne,ScreenThree,ScreenTwo,Header} from './components'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
         <Header/>
        <Routes>
          <Route path='/' element={<ScreenOne/>}/>
          <Route path='/:category' element={<ScreenTwo/>}/>
          <Route path='/:category/:id' element={<ScreenThree/>}/>
          <Route path='/:category/:id/:_id' element={<ScreenFour/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
