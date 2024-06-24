import React from "react";
import Hero from "../../components/Hero/Hero/Hero";
import ArticlesList from "../../components/article/ArticlesList";
import SingleArticle from "../../components/article/SingleArticle";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/BlogProvider";
import Nav from "../../components/NavBar/Nav";
import { useNavigate } from 'react-router-dom';
import ArticlePage from "../../components/article/ArticlePage";


function HomePage() {

  return (
    <div>
      <Nav />
      <div className="hero container">
        <Hero />
      </div>
 

      
    </div>
  );
}

export default HomePage;
