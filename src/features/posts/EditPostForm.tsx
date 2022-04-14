import React, { ChangeEventHandler, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';

import { postUpdated, selectPostById } from './postsSlice';

export const EditPostForm = () => {
  // URLに含まれているpostIDをuseParams Hookを利用して取得
  const { postId } = useParams<{postId: string}>();

  const post = useAppSelector((state) => selectPostById(state, postId ?? ''));

  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.content ?? '');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const history = useHistory();

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId ?? '', title, content }));
      navigate(`/posts/${postId}`, { replace: true });
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type='button' onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
