import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import Header from './components/Header';
import PostItem from './components/PostItem/PostItem';
import AddFormPost from './components/AddFormPost/AddFormPost'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container pt-3">
      <Header 
        title="Блог"
        description="для тестирования redux"
        imageUrl="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      />
      <div className="container">

        <div className="content">
          {/* <button type='button' className='btn btn-primary'>Создать пост</button> */}
          <div className="content">
            {/* <div className="post-items">
              <PostItem title="Заголовок статьи" createAt={' 02.11.2020'} _id="1"/>
            </div> */}

            <AddFormPost />


          </div>



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
              <FetchedPosts />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
