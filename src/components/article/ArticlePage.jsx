import React from "react";
import "./ArticlePage.css";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/BlogProvider";
import Icon from "../svg/Icon";

function ArticlePage() {
  const { handleBackClick, selectedArticle, articles } = useBlog();

  if(!selectedArticle){
    return <p>Loading</p>
  }

  return (
    <div className="article">
      <h1>{selectedArticle.title}</h1>

      <p>{selectedArticle.text}</p>
      {/* go back to posts route  using . */}
      <Link to=".">
        <div className="back-icon ">
          <Icon style={{ color: "black" }} />

          <button className=" btn-back previous" onClick={handleBackClick}>
            Go back to previous
          </button>
        </div>
      </Link>

    </div>
  );
}

export default ArticlePage;
