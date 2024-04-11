import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
   
<BrowserRouter>

<Header />

<Routes>

<Route path='/' element={<Home />} />

<Route path='/cart' element={<Contact/>} />

<Route path='/categories' element={<About/>} />


</Routes>

</BrowserRouter>
  );
}

export default App;
