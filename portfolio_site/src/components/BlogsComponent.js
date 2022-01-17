import React from 'react'
// import { Link } from "react-router-dom"

const BlogsComponent = () => {
    
    const waffle = [
        "First Blog",
        "CLI Project",
        "Sinatra Project",
        "Rails Project",
        "JS Project",
        "React Project",
        "Next steps blog"
    ]

    let blogLinks = [
        "https://crossjames813.wixsite.com/my-site/post/day-one-why-and-other-questions",
        "https://crossjames813.wixsite.com/my-site/post/cheapgeek-cli-app-from-idea-to-reality",
        "https://crossjames813.wixsite.com/my-site/post/sinatra-project-a-day-in-the-life-of-a-fool",
        "https://crossjames813.wixsite.com/my-site/post/riding-the-rails",
        "https://crossjames813.wixsite.com/my-site/post/javascript-dom-manipulation-and-other-adventures",
        "https://crossjames813.wixsite.com/my-site/post/react-redux-a-tale-of-two-frameworks",
        "https://crossjames813.wixsite.com/my-site/post/journey-s-end-marathon-s-beginning"
    ]
    
    let renderBlog = (blogInfo)=>{
        return blogInfo.map((info, index)=>{
                return <a href={blogLinks[index]} className = {`blogLink${index}`}><p className = {`blogInfo${index}`}>{info}</p></a>
            })
        }
    
    
    return(
        <div>
            <h1>Bloggy Blogs</h1>
            {renderBlog(waffle)}
        </div>
    )
    
} 

export default BlogsComponent