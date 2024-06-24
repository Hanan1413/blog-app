import { createContext, useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase";

const blogContext = createContext();

function BlogProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "artcle");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const[loading, setIsLoading] = useState(true)

  // track of current post
  const [currentPost, setCurrentPost] = useState("");

  // handle Article on click
  const handleArticleClick = (article) => {
    // كانت هنا المشكلة
    setSelectedArticle(article);
  };

  // go back on click to articls group and set it back to null
  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  // fetch information from database

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      // make query to collection
      console.log(data);
      setIsLoading(false);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);

  return (
    <blogContext.Provider
      value={{
        articles,
        handleArticleClick,
        handleBackClick,
        selectedArticle,
        loading,
        currentPost,
        setCurrentPost,
      }}
    >
      {children}
    </blogContext.Provider>
  );
}

// custome hooke

function useBlog() {
  // the context react read data from is blogcontext
  const context = useContext(blogContext);
  if (context === undefined) throw new Error(" used outside the BlogProvider");
  return context;
}

export { BlogProvider, useBlog };

export default BlogProvider;
