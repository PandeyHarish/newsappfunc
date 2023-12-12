import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = process.env.REACT_APP_NEWS_API_KEY; 

const Newscomponent= (props) => {
  const [articles, setArticles] = useState([]);  
  const [loading, setloading] = useState(true);  
  const [page, setpage] = useState(1);  
  const [totalResults, settotalResults] = useState(0);  
  
    
  

 const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  const  updateNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setloading(false);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setloading(true);
     
    }
  }

  useEffect(() => {
    document.title = `News app - ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  },[]
    );
  

  const fetchMoreData = async () => {
    setloading(true);
    try {
      const nextPageUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}&category=${props.category}&pageSize=${
        props.pageSize
      }&page=${page + 1}`;
      setpage(page+1);
      const data = await fetch(nextPageUrl);
      if (!data.ok) {
        throw new Error("Failed to fetch additional data");
      }
      const parsedData = await data.json();
      setArticles((prevState) => prevState.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
      setpage((prevPage) => prevPage + 1);
      setloading(false);
    } catch (error) {
      console.error("Error fetching additional data:", error);
      setloading(false);
    }
  };



    return (
      <>
        <h2 className="text-center" style={{ margin: "90px 0px 35px 0px" }}>
          Top {capitalize(props.category)} Headlines
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
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



Newscomponent.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};

Newscomponent.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
export default Newscomponent;
