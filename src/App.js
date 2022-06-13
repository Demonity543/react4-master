import React from 'react';
import Portret from './assets/ivan-marchuck.jpg';
import Pictury from './assets/picthri.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavMenu />} />
          <Route exact path="/biography" element={<Biography />} />
          <Route path="/famous-work" element={<FamousWork />} />
          <Route path="/cost" element={<Cost />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

function NavMenu() {
  return (
    <div className="navMenu">
      <NavLink to="/biography" className={setActive}>
        Biography
      </NavLink>
      <NavLink to="/famous-work" className={setActive}>
        Famous Work
      </NavLink>
      <NavLink to="/cost" className={setActive}>
        Cost
      </NavLink>
    </div>
  );
}

const setActive = ({ isActive }) => (isActive ? 'active' : '');

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

class Biography extends React.Component {
  render() {
    return (
      <div>
        <h1>Biography</h1>
        <img src={Portret} alt="Ivan Marchuk" />
        <div id="playground-result">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi vel consectetur euismod, nisl nisi consectetur nisl,
          euismod nisl nisi euismod nisl. Donec euismod, nisi vel consectetur
          euismod, nisl nisi consectetur nisl, euismod nisl nisi euismod nisl.
          Donec euismod, nisi vel consectetur euismod, nisl nisi consectetur
          nisl, euismod nisl nisi euismod nisl.
        </div>
      </div>
    );
  }
}

function FamousWork() {
  return (
    <div>
      <h1>Famous Work</h1>
      <img src={Pictury} alt="Ivan Marchuk" />
    </div>
  );
}

function Cost() {
  return (
    <div>
      <h1>Cost</h1>
      <img src={Pictury} alt="Ivan Marchuk" />
      <p>Price:10000$</p>
    </div>
  );
}

export default App;
