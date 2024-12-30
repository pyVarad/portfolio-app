import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, date, categories } = post;
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
        <div className="title">{title}</div>
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories.map((category) => (
              <Link className="category" key={category} to={`/posts/${category}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
