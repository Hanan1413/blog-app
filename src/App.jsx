import "./App.css";
import Hero from "./components/Hero/Hero/Hero";
import PostsGrpup from "./pages/posts/PostsGrpup";
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/contact";
import About from "./pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./components/article/ArticlePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsGrpup />}>
          <Route
            path="article"
            // redirect to Article page immediately
            element={<ArticlePage />}
          />
        </Route>
        <Route path="/post/:postId" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </div>

  );
}

export default App;
