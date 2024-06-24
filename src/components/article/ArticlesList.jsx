import React, { useEffect, useState } from "react";
import "./ArticlesList.css";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/BlogProvider";
import SingleArticle from "./SingleArticle";

function ArticlesList({ headline}) {
  const { articles, handleArticleClick, setCurrentPost, loading } = useBlog();
 
  if(loading){
    return <p className="loading">Loaidng...</p>
  }

  return (
    <>
      <h1 className="title">{headline}</h1>
      <div className="grid-container">
        {articles?.map((article) => {
          return (
            <div key={article.id}>
              <SingleArticle article={article}  articleId={article.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArticlesList;
