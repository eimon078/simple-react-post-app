import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

// components 
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';
import ViewPost from './components/ViewPost/ViewPost';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Posts />}/>
          <Route path='/posts' element={<Posts />}/>
          <Route path='/posts/:postId' element={<ViewPost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
