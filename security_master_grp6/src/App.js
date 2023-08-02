import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home Page/Home';
import MainView from './components/Secmaster_View/MainView';
import Upload from './components/Secmaster_Upload/Upload';


function App() {
  return (

    <div className="App">
      <h1>Welcome to Security Master</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sec-view' element={<MainView/>}/>
        <Route path='/sec-upload' element={<Upload/>}/>
      </Routes>
    </div>
  );
}

export default App;
