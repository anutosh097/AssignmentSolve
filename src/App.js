
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { Your } from './components/Your';
import { All } from './components/All';
import { Blocked } from './components/Blocked';
import { Error } from "./components/Error";
import styled from "styled-components";

function App() {

  const myID= 31;
  const yourURL = `/your?owner_id=${myID}`

  const Navbar = styled.div`
    display: flex;
    padding: 10px 20px 0px 20px;
    justify-content: start;
    border-bottom: 1px solid #D8D8D8;
  `
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Navbar>
          <NavLink className={({isActive}) => isActive ? "active nav-item" : "nav-item"}  to={yourURL}>Your</NavLink>
          <NavLink className={({isActive}) => isActive ? "active nav-item" : "nav-item"}  to="/all">All</NavLink>
          <NavLink className={({isActive}) => isActive ? "active nav-item" : "nav-item"}   to="/blocked">Blocked</NavLink>
        </Navbar>
        <Routes>
          <Route path="your" element={<Your />} />
          <Route path="all" element={<All />} />
          <Route path="blocked" element={<Blocked />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
