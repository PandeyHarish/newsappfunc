import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = process.env.REACT_APP_NEWS_API_KEY; 

export class Newscomponent extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 9,
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `News app - ${this.capitalize(this.props.category)}`;
  }

  capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  fetchMoreData = async () => {
    this.setState({ loading: true });
    try {
      const nextPageUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${apiKey}&category=${this.props.category}&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      const data = await fetch(nextPageUrl);
      if (!data.ok) {
        throw new Error("Failed to fetch additional data");
      }
      const parsedData = await data.json();
      this.setState((prevState) => ({
        articles: prevState.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        page: prevState.page + 1,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching additional data:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          Top {this.capitalize(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.articles === this.state.totalResults ? "  " : <Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? `${element.title.slice(0, 51)}...` : "No Title"}
                      description={element.description || "No Description"}
                      imageUrl={element.urlToImage || ""}
                      newsUrl={element.url || "#"}
                      publishedAt={element.publishedAt || ""}
                      author={element.author || "Unknown Author"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default Newscomponent;
