import { HeaderStyled, HeaderStyledContainer, HeaderStyledListItem, HeaderStyledListItemText, HeaderStyledListItems,HeaderBigBannerTextStyled } from "../../components/HeaderComp"
import { ItemsContainer, LogoText, NavButtons, NavContainer, Navbar } from "../../components/NavBarComp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed ,faPlane,faCab,faCar,faBeer} from "@fortawesome/free-solid-svg-icons"

export const Home = () => {
  return (
    <>
        <Navbar>
        <NavContainer>
            <LogoText>Booking.com</LogoText>
            <ItemsContainer>
                 <NavButtons>Login</NavButtons>
                 <NavButtons>Register</NavButtons>
            </ItemsContainer>
           
        </NavContainer>
    </Navbar>

    <HeaderStyled>
        <HeaderStyledContainer>
            <HeaderStyledListItems>
                <HeaderStyledListItem>
                    <FontAwesomeIcon icon={faBed} />
                    <HeaderStyledListItemText>Stays</HeaderStyledListItemText>

                </HeaderStyledListItem>
                   <HeaderStyledListItem>
                    <FontAwesomeIcon icon={faPlane} />
                    <HeaderStyledListItemText>Flights</HeaderStyledListItemText>

                </HeaderStyledListItem>
                   <HeaderStyledListItem>
                    <FontAwesomeIcon icon={faCab} />
                    <HeaderStyledListItemText>Cars</HeaderStyledListItemText>

                </HeaderStyledListItem>
                   <HeaderStyledListItem>
                    <FontAwesomeIcon icon={faCar} />
                    <HeaderStyledListItemText>Airport Taxi</HeaderStyledListItemText>

                </HeaderStyledListItem>
                   <HeaderStyledListItem>
                    <FontAwesomeIcon icon={faBeer} />
                    <HeaderStyledListItemText>Attractions</HeaderStyledListItemText>

                </HeaderStyledListItem>
            </HeaderStyledListItems>
            <HeaderBigBannerTextStyled size='Big'>
                A lifetime of discounts? It's genius.
            </HeaderBigBannerTextStyled>
            <HeaderBigBannerTextStyled>
                Get rewarded for your travels unlock instant savings of 10% or more
            </HeaderBigBannerTextStyled>


            



        </HeaderStyledContainer>


    </HeaderStyled>
    </>

  )
}