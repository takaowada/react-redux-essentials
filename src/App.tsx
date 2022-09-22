import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { UserPage } from './features/users/UserPage'
import { UsersList } from './features/users/UsersList'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { NotificationsList } from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
          <Route path="/notifications" element={<NotificationsList/>} />
          <Route path="/posts/*" element={<SinglePostPage postId={`{$postId}`}/>} />
          <Route path="/editPost/*" element={<EditPostForm postId={`{$postId}`}/>} />
          <Route path="/users" element={<UsersList/>} />
          <Route path="/users/*" element={<UserPage userId={`{$userId}`}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
