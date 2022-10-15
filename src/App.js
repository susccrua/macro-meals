import Home from './Home'
import Table from './Table'
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path= "/" element={<Home />}>
      </Route>
      <Route path= "/table" element={<Table/>}>
      </Route>
    </Routes>
      

    </BrowserRouter>

  );
}

export default App;
