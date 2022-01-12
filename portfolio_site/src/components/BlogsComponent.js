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
        {1: "https://crossjames813.wixsite.com/my-site/post/day-one-why-and-other-questions"},
        {2: "https://crossjames813.wixsite.com/my-site/post/cheapgeek-cli-app-from-idea-to-reality"},
        {3: "https://crossjames813.wixsite.com/my-site/post/sinatra-project-a-day-in-the-life-of-a-fool"},
        {4: "https://crossjames813.wixsite.com/my-site/post/riding-the-rails"},
        {5: "https://crossjames813.wixsite.com/my-site/post/javascript-dom-manipulation-and-other-adventures"},
        {6: "https://crossjames813.wixsite.com/my-site/post/react-redux-a-tale-of-two-frameworks"},
        {7: "https://crossjames813.wixsite.com/my-site/post/journey-s-end-marathon-s-beginning"}
    ]
    
    let renderBlog = (blogInfo)=>{
        return blogInfo.map((info)=>{
            return <p>{info}</p>
        })
        }
    
    
        return(
            <div>
                <h1>Bloggy Blogs</h1>
                
                {renderBlog(waffle)}
                {/* {renderBlog(blogLinks)} */}
            </div>
        )
    
} 

export default BlogsComponent