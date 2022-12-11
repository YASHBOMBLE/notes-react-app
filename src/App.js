
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Home/Navbar';
import Home from './views/Home/Home';
import Addnote from './views/Home/Addnote/Addnote';
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<Addnote />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
