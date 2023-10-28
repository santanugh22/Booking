import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Hotel } from "./pages/hotel/Hotel";
import './App.css'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/hotel/:id" element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
