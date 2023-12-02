import React from "react";

const Newsitem = (props) => {
 
    let { title, description, imageUrl, newsUrl, publishedAt, author } = props;
    return (
      <div>
        <div className="my-3 card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
