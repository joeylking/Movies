import React from "react";
import { Link } from "react-router-dom";

import Movies from "../../images/udhZ1e01.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={Movies} alt="movies" />
      </Link>
      <a target="_blank" href="https://www.themoviedb.org/">
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </a>
    </Content>
  </Wrapper>
);

export default Header;
