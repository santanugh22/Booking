import styled from "styled-components";



const Navbar=styled.div`
height: 70px;
background-color:#003580 ;
display: flex;
justify-content: center;
align-items: center;
`
const NavContainer=styled.div`
display: flex;
height: 100%;
width: 100%;
max-width: 1024px;
align-items: center;
color: white;
justify-content: space-between;

`
const LogoText=styled.h2`
font-size: 50;



font-weight: 500;
`
const ItemsContainer=styled.div`

`

const NavButtons=styled.button`
width: 80px;
height: 40px;
margin-left: 12px;
padding: 5px 10px;
cursor: pointer;
border: none;


`




export {Navbar,NavContainer,ItemsContainer,LogoText,NavButtons}