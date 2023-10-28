import styled from "styled-components";

const HeaderStyled=styled.div`
background-color: #003580;
color: white;
justify-content: center;
align-items: center;
font-size: large;




`


const HeaderStyledContainer=styled.div`
background-color: #003580;

width: 100%;
max-width: 1024px;
padding: 20px 120px 30px 200px ;



`

const HeaderStyledListItems=styled.div`
display: flex;
gap:40px;


`


const HeaderStyledListItem=styled.div`
display: flex;

padding: 10px;
border: 1px solid white;
border-radius: 20px;
gap: 5px;
cursor: pointer;
justify-content: center;
align-items: center;

`

const HeaderStyledListItemText=styled.p`



`

const HeaderBigBannerTextStyled=styled.h1`
font-size: ${(props)=>props.size==='Big'?2:1}rem;

font-weight: 500;
font-family:'Aerial';
padding-top: 20px;

`



export {HeaderStyled,HeaderStyledContainer,HeaderStyledListItems,HeaderStyledListItem,HeaderStyledListItemText,HeaderBigBannerTextStyled}