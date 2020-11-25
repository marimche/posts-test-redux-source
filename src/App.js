import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Созданные посты (синхронно)</h3>
          <Posts />
        </div>
        <div className="col">
          <h3>Загруженные посты (асинхронно)</h3>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
