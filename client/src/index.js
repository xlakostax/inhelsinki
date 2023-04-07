import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import './index.css';
import EventsList from './EventsList';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const history = useNavigate();
  return (
    <>
      <Header />
      {/* <Navigation
        //onChange={handleChange}
        // onClick={handleSubmit}
      /> */}
      <Routes history={history}>
        <Route path="/" element={<EventsList/>} exact />
      </Routes>
      <Footer />
    </>
    
  )
}
root.render(
  <Router>
    <App />
  </Router>
)