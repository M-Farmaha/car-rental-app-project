// import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

import { Header, NavItem, NavLinkStyled, NavList, NavWrap, PhonebookTitle, TitleWrap } from "./AppBar-styled";

export const AppBar = () => {
  return (
    <Header>
      <NavWrap>
        <TitleWrap>
          <PhonebookTitle>Car Rental</PhonebookTitle>
        </TitleWrap>
        {/* <ThemeSwitcher /> */}
        <NavList>
          <NavItem>
            <NavLinkStyled to="/catalog" style={{ justifyContent: "right" }}>
              Catalog
            </NavLinkStyled>
          </NavItem>

          <NavItem>
            <NavLinkStyled to="/favorites" style={{ justifyContent: "right" }}>
            Favorites
            </NavLinkStyled>
          </NavItem>

        </NavList>
      </NavWrap>
    </Header>
  );
};
