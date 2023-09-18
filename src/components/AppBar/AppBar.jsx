import {
  NavItem,
  NavLinkStyled,
  NavList,
  NavWrap,
  Logo,
  Header,
} from "./AppBar-styled";

export const AppBar = () => {
  return (
    <>
      <Header>
        <NavWrap>
          <Logo>Car Rental</Logo>
          <NavList>
            <NavItem>
              <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            </NavItem>

            <NavItem>
              <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
            </NavItem>
          </NavList>
        </NavWrap>
      </Header>
    </>
  );
};
