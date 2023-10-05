import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';

export function CardsList() {
  const posts = usePostsData();

  return (
    <div>
      {posts.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          textContent={post.title}
          image={post.previewImg}
          authorImg={post.avatar}
          rating={post.rating}
          authorName={post.author}
          date={post.datePostUtc}
        />
      ))}
    </div>
  );
}
