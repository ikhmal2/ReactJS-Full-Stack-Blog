import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path = "/articles" element = {<ArticleListPage />} />
              <Route path = "/articles/:articleId" element = { <ArticlePage /> } />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
