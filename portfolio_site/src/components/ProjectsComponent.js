import React, { Component } from 'react'
import uncontentiousScreenshot from "../images/screenshot1_resize.png"
import geekyNameAppScreenshot from "../images/screenshot2.png"

const ProjectsComponent = ()=>{
    
    const screenshots = [uncontentiousScreenshot, geekyNameAppScreenshot]

    const projectWaffle = ["Made to solve the eternal dilema of what game to play", "Can be used to plan game times with friends"]

    const projectTitle = ["Uncontentious", "GeekyNameApp"]

    const projectVidLink = ["https://www.youtube.com/watch?v=FMnG0BQQPfE&list=PLnLIWZ5hYpcGwxJ6kRFzrMmPrc9YrMfi7&index=3", "https://www.youtube.com/watch?v=vCBWIW6i9uU&list=PLnLIWZ5hYpcGwxJ6kRFzrMmPrc9YrMfi7&index=5"]

    let renderProjectInfo = (projectInfo)=>{
        return projectInfo.map((info, index)=>{
                return(
                    <><h2>{info}</h2>
                    <p className = {`info${index}`}>{projectWaffle[index]}</p>
                    <a href ={projectVidLink[index]} target = "_blank"><img src={screenshots[index]} className={`screenshot ${index}`} alt={`screenshot ${index}`} /></a></>
                )
            })
        }
    
    return(
        <div>
            {renderProjectInfo(projectTitle)}
        </div>
    )
    
} 

export default ProjectsComponent