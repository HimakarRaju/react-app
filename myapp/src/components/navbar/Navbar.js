import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../assets/Logo.png";

const NavContainer = styled.div`
  ${tw`
    justify-around
    items-center
    flex
        w-1/2
        h-24
    `};
`;

const Logo = styled.img`
  ${tw`
justify-around
items-center
flex
w-1/4
h-24`};
`;

const NavLinkComponent = styled.h3`
  ${tw`
text-white
text-3xl
`};
`;

export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Logo src={LogoImage} />
        <NavLinkComponent>Blogs</NavLinkComponent>
        <NavLinkComponent>About</NavLinkComponent>
        <NavLinkComponent>Contact</NavLinkComponent>
      </NavContainer>
    </>
  );
};
