import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Second from "./component/Second";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route extact path="/" element={<Home />}></Route>
            <Route path="/Second" element={<Second/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
