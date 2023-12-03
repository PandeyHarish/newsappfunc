import React, { useState, useEffect } from 'react';
import ArrowUp from "remixicon-react/ArrowUpLineIcon"; // to use remixicon-react we import the icon and for importing we write the icon name in pascal case and add Icon in the end of the name
import "../css/gototop.css";


const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`go-to-top-container ${showButton ? "show" : ""}`}>
      {showButton && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;

