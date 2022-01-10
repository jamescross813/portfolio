import React from 'react'

const BlogsComponent = () => {
    
    const waffle = [
        {starting: "First Blog"},
        {firstProject: "CLI Project"},
        {secondProject: "Sinatra Project"},
        {thirdProject: "Rails Project"},
        {fourthProject: "JS Project"},
        {fifthProject: "React Project"},
        {ending: "Next steps blog"}
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
    
    let renderBlog = ()=>{
        blogLinks.map((link)=>console.log(link))
    }
        return(
            <div>
                <h1>Bloggy Blogs</h1>
                {renderBlog()}
            </div>
        )
    
} 

export default BlogsComponent