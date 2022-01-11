import React from 'react'
// import { Link } from "react-router-dom"

const BlogsComponent = () => {
    
    const waffle = [
        {1: "First Blog"},
        {2: "CLI Project"},
        {3: "Sinatra Project"},
        {4: "Rails Project"},
        {5: "JS Project"},
        {6: "React Project"},
        {7: "Next steps blog"}
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
        let i = 1
        blogInfo.map((info)=>{
            console.log(info[i])
        i+=1})
        }
    
    
        return(
            <div>
                <h1>Bloggy Blogs</h1>
                
                <p>{renderBlog(waffle)}</p>
                {renderBlog(blogLinks)}
            </div>
        )
    
} 

export default BlogsComponent