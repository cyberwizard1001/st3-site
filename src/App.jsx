import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import WhyST3 from "./pages/WhyST3"; // Why ST³
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(23, 155, 74, 0.1);
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 100;
  position: sticky;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.75rem;
  color: #1a7b3a;
  margin-left: 3rem;
  letter-spacing: 1px;
  font-family: 'Orbitron', 'Courier New', monospace;
  position: relative;
  display: flex;
  align-items: baseline;
  
  .superscript {
    font-size: 1.2rem;
    vertical-align: super;
    line-height: 0;
    margin-left: -2px;
    font-weight: 700;
    transform: translateY(-4px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #1a7b3a, #22c55e);
    border-radius: 1px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  
  a {
    color: #374151;
    text-decoration: none;
    margin: 0 2rem;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.5rem 0;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #1a7b3a, #22c55e);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: #1a7b3a;
      transform: translateY(-1px);
      
      &::before {
        width: 100%;
      }
    }
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <Router basename="/st3-site">
      <GlobalStyle />
      <AppContainer>
        <Nav>
        <Logo>
          ST<span className="superscript">³</span>
        </Logo>
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
        <Footer />
      </AppContainer>
    </Router>
  );
}
