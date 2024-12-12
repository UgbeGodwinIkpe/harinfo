import React from 'react';
import styles from '../styles.module.css';

function BlogPosts() {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      image: '(link unavailable)',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      link: '#',
    },
    {
      title: 'Blog Post 2',
      image: '(link unavailable)',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      link: '#',
    },
    {
      title: 'Blog Post 3',
      image: '(link unavailable)',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      link: '#',
    },
  ];

  return (
    <div className={styles['blog-posts-section']}>
      <h2>Latest Blog Posts</h2>
      <div className={styles['blog-posts-grid']}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles['blog-post']}>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={post.link}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;