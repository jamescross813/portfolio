import React, { Component } from 'react'
import uncontentiousScreenshot from "../images/screenshot1_resize.png"
import geekyNameAppScreenshot from "../images/screenshot2.png"

const ProjectsComponent = ()=>{
    
    const screenshots = [uncontentiousScreenshot, geekyNameAppScreenshot]

    const projectWaffle = ["Made to solve the eternal dilema of what game to play", "Can be used to plan game times with friends"]

    const projectTitle = ["Uncontentious", "GeekyNameApp"]

    let renderProjectInfo = (projectInfo)=>{
        return projectInfo.map((info, index)=>{
                return(
                    <><h2>{info}</h2>
                    <p>{projectWaffle[index]}</p>
                    <img src={screenshots[index]} className={`screenshot ${index}`} alt={`screenshot ${index}`} /></>
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