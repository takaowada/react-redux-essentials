/**
 * 投稿ページ。
 */
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Link, useParams } from 'react-router-dom';

import { selectPostById } from './postsSlice';

export const SinglePostPage = () => {
  // URLに含まれているpostIDをuseParams Hookを利用して取得
  const { postId } = useParams<{postId: string}>();

  const post = useAppSelector((state) => selectPostById(state, postId ?? ''));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className='post'>
        <h2>{post.title}</h2>
        <p className='post-content'>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className='button'>
          Edit Post
        </Link>
      </article>
    </section>
  );
};
