import React, { useState } from "react";
import styled from "styled-components";
import i18n from "../language/i18n";
import { Colors } from "../helpers/enums/colors";

const { BgGreen, Black } = Colors;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ lang, activeLang }) =>
    lang === activeLang ? BgGreen : "#000"};
  font-weight: ${({ lang, activeLang }) => (lang === activeLang ? "bold" : "")};
  color: #fff;
  cursor: pointer;
  margin: 0px 4px;
`;

function LanguageSelector() {
  const [activeLang, setActiveLang] = useState("es");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLang(language);
  };

  return (
    <div>
      <Button
        lang="en"
        activeLang={activeLang}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        lang="es"
        activeLang={activeLang}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}

export default LanguageSelector;
