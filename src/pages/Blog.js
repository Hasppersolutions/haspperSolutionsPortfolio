// src/pages/Blog.js

import React from 'react';

const Blog = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Blog</h1>
      <p>Here you will find the latest updates and insights from our team.</p>
      {/* Add your blog posts here */}
      <div style={styles.post}>
        <h2>First Blog Post</h2>
        <p>This is the content of your first blog post. Share your insights, stories, and updates here.</p>
      </div>
      {/* You can add more posts below */}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  post: {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }
};

export default Blog;
