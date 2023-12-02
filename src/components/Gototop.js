import React, { Component } from "react";
import ArrowUp from "remixicon-react/ArrowUpLineIcon"; // to use remixicon-react we import the icon and for importing we write the icon name in pascal case and add Icon in the end of the name
import "../css/gototop.css";

class GoToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      // Change this value as needed
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { showButton } = this.state;
    return (
      <div className={`go-to-top-container ${showButton ? "show" : ""}`}>
        {showButton && (
          <button className="go-to-top-button" onClick={this.scrollToTop}>
            <ArrowUp />
          </button>
        )}
      </div>
    );
  }
}

export default GoToTopButton;
