import React from 'react';
import "./Blog.css"
import blog from "../assets/blog.png"
const Blog = () => {
    return (
        <div>
            <h1 className='blogg'>Our Blog</h1>
            <img src={blog} className='blog-img'></img>
        </div>
    );
}

export default Blog;
