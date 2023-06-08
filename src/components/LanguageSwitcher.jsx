import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import englishFlag from "../assets/all-images/EN.png";
import frenchFlag from "../assets/all-images/FR.png";

import "../styles/language-switcher.css"

const LanguageSwitcher = () => {
  const navigate = useNavigate();

  const changeLanguageHandler = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.startsWith("/fr")
      ? currentPath.replace("/fr", "/en")
      : currentPath.replace("/en", "/fr");
    navigate(newPath);
  };

  const languageFlag =
    window.location.pathname.startsWith("/fr") ? englishFlag : frenchFlag;
  const languageText =
    window.location.pathname.startsWith("/fr") ? "EN" : "FR";

  return (
    <div className="languageSwitcher" onClick={changeLanguageHandler}>
      <img src={languageFlag} alt={languageText} />
      <span>{languageText}</span>
    </div>
  );
};

export default LanguageSwitcher;