import React from "react";
import "./ArticlesList.css";
import { useEffect } from "react";
import { useBlog } from "../../context/BlogProvider";
import image from '../../assets/image-1.jpg'
import { Link } from "react-router-dom";
import "./SingleArticle.css";
import { useParams } from 'react-router-dom';


function SingleArtcle({ article, id, articleId }) {
  const { articles, handleArticleClick, setCurrentPost } = useBlog();

  // When the user navigates to this article, update the currentPost state
  useEffect(() => {
    setCurrentPost({ postId: articleId });
  }, [articleId, setCurrentPost]);

  return (
    <div>
      <div className="blog-card">
        <div className="blog-card-banner">
          <img
            src={image}
            alt="Building microservices with Dropwizard, MongoDB &amp; Docker"
            width="250"
            className="blog-banner-img"
          />
        </div>
        <div className="blog-content-wrapper">
          <h3 className="h3">{article.title}</h3>
          <p className="blog-text">{article.summery} ...</p>
          <Link to="article">
            <button
              className="blog-btn"
              onClick={() => handleArticleClick(article)}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleArtcle;
