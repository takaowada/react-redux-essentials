/**
 * ユーザーページ。
 */
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Link, useParams } from 'react-router-dom';

import { selectUserById } from './usersSlice';
import { selectPostsByUser } from '../posts/postsSlice';

export const UserPage = () => {
  // URLに含まれているuserIdをuseParams Hookを利用して取得
  const { userId } = useParams<{userId: string}>();

  const user = useAppSelector((state) => selectUserById(state, userId ?? ''));

  const postsForUser = useAppSelector((state) =>
    selectPostsByUser(state, userId ?? '')
  );

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
};
