import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyST3 from "./pages/WhyST3";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

const Nav = styled.nav`
  background: #fff;
  border-bottom: 1.5px solid #e6f1eb;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 2;
  position: sticky;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #179b4a;
  margin-left: 2rem;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #214734;
    text-decoration: none;
    margin: 0 1.25rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.05rem;
    transition: color 0.2s;
    &:hover {
      color: #179b4a;
    }
  }
`;

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav>
        <Logo>ST3</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
      </Nav>
      <Main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Main>
    </Router>
  );
}
