import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

//import { Counter } from './features/counter/Counter';
//import './App.css';

import { Navbar } from './app/Navbar'
import { UserPage } from './features/users/UserPage'
import { UsersList } from './features/users/UsersList'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { NotificationsList } from './features/notifications/NotificationsList'

function Home() {
  return (
    <div>
    <h2>Home</h2>
    <AddPostForm />
    </div>
  )
  /*
  return <h2>Home</h2>
    <React.Fragment>
      <AddPostForm />
      <PostsList />
    </React.Fragment>;
    */
}

function NotFound() {
  return <h2>このページは存在しません。</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<NotificationsList />} />
          <Route path="/posts" element={<PostsList />}　/>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />}/>
          <Route path="/users" element={<UsersList/>} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;
