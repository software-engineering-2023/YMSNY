  import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #002651;
  color: #fff;
  padding: 0 2rem;
  width:100%;
  
`;


const Logo = styled.img`
  height: 3rem;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <div style={{paddingBottom : "4rem"}}>
    <NavbarContainer>
      <Logo src="/Images/Logo.png" alt="Bank Logo" />
      <LinksContainer>
        <Link href="/">Home</Link>
        <Link href="/accounts">Accounts</Link>
        <Link href="/transactions">Transactions</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/logout">Logout</Link>
      </LinksContainer>
    </NavbarContainer>
    
    </div>
  );
};

export default Navbar;