import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home Page/Home";
import Upload from "./components/Secmaster_Upload/Upload";
import ViewEquity from "./components/Secmaster_ViewEquity/ViewEquity";
import ViewBond from "./components/Secmaster_ViewBond/ViewBond";
import Nav from "./components/Navbar/Nav";
import UploadBond from "./components/Secmaster_Upload/UploadBond";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sec-view-equity" element={<ViewEquity />} />
        <Route path="/sec-upload" element={<Upload />} />
        <Route path="/sec-upload-bond" element={<UploadBond/>}/>
        <Route path="/sec-view-bond" element={<ViewBond />} />
      </Routes>
    </div>
  );
}

export default App;
