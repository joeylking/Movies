import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";

import Movies from "../../images/udhZ1e01.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={Movies} alt="movies" />
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
