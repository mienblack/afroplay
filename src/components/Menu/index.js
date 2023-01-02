import { useContext } from "react";
import { ColorModeContext } from "./components/ColorMode";
import styled from "styled-components";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  z-index: 99;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({ searchValue, setSearchValue }) {
  const context = useContext(ColorModeContext)

  return (
    <StyledMenu>
      <a href="/">
        <img className="logo" src={context.mode == "dark"
          ? "/assets/images/logoAndName_dark.png"
          : "/assets/images/logoAndName_light.png"} />
      </a>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}