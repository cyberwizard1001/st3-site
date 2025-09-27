import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #e2e8f0;
  padding: 4rem 0 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
`;

const FooterLogo = styled.div`
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #22c55e;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`;

const FooterDescription = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 2rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  
  &:hover {
    color: #22c55e;
    transform: translateX(4px);
  }
`;

const ExternalLink = styled.a`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  
  &:hover {
    color: #22c55e;
    transform: translateX(4px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.95rem;
  color: #cbd5e1;
  
  svg {
    margin-right: 0.75rem;
    width: 18px;
    height: 18px;
    color: #22c55e;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 50%;
  color: #22c55e;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(34, 197, 94, 0.2);
    border-color: rgba(34, 197, 94, 0.4);
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 2rem 2rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  text-align: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Brand Section */}
        <FooterSection>
          <FooterLogo>ST3</FooterLogo>
          <FooterDescription>
            Transforming lives through personalized education and career development. 
            Join thousands of learners who have unlocked their potential with ST3.
          </FooterDescription>
          
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialLink>
            
            <SocialLink href="#" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </SocialLink>
            
            <SocialLink href="#" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
            
            <SocialLink href="#" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.391 14.425c.687.578 1.297.867 1.969.867.722 0 1.297-.289 1.297-.867 0-.289-.144-.578-.433-.722l-1.969-1.297c-.722-.433-1.153-1.153-1.153-1.969 0-1.297.867-2.164 2.164-2.164.578 0 1.153.144 1.586.433l-1.153 1.442c-.289-.144-.578-.289-.867-.289-.433 0-.722.289-.722.722 0 .144.144.433.289.578l1.969 1.297c.867.578 1.297 1.297 1.297 2.164 0 1.442-1.153 2.309-2.309 2.309z"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        {/* Quick Links */}
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterNav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/courses">Courses</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>
        
        {/* Services */}
        <FooterSection>
          <FooterTitle>Our Services</FooterTitle>
          <FooterNav>
            <FooterLink to="/courses#foundation">Foundation Courses</FooterLink>
            <FooterLink to="/courses#technical">Technical Skills</FooterLink>
            <FooterLink to="/courses#soft-skills">Soft Skills Development</FooterLink>
            <FooterLink to="/courses#corporate">Corporate Training</FooterLink>
          </FooterNav>
        </FooterSection>
        
        {/* Contact Info */}
        <FooterSection>
          <FooterTitle>Get in Touch</FooterTitle>
          
          <ContactInfo>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <ExternalLink href="mailto:info@st3education.com">
              info@st3education.com
            </ExternalLink>
          </ContactInfo>
          
          <ContactInfo>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <ExternalLink href="tel:+1234567890">
              +1 (234) 567-8900
            </ExternalLink>
          </ContactInfo>
          
          <ContactInfo>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>New York, NY</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>© 2024 ST3 - Success Through Training & Transformation. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}