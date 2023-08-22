import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Home from './Components/Home/Home'
import TopicList from './Components/TopicList/TopicList'
import Post from './Components/Post/Post'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<TopicList />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </div>
  );
}
