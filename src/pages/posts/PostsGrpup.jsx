import React, { useState } from "react";
import ArticlesList from "../../components/article/ArticlesList";
import "./PostsGrpup.css";
import ArticlePage from "../../components/article/ArticlePage"
// ../../components/blog-posts/full-article/FullArticle";
import { useBlog } from "../../context/BlogProvider";
import Nav from "../../components/NavBar/Nav";


// https://chat.openai.com/c/93022c21-fdc8-4d94-99a5-5178272f4759

function PostsGrpup() {
  const { selectedArticle } = useBlog();


  return (
    <section >
      <div>
      <Nav />

        
      <div className="post-container">
      {selectedArticle ? (
          // open article on a link route
          <ArticlePage /> 

        ) : (
          <div>
          <ArticlesList   headline="read with hanger, write with joy and live with passion" />
           </div>
        )}
      </div>
      </div>


    </section>
  );
}

export default PostsGrpup;
