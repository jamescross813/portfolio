import React, { Component } from 'react'

const ProjectsComponent = ()=>{
    
    const screenshots = []

    const projectWaffle = ["Made to solve the eternal dilema of what game to play", "Can be used to plan game times with friends"]

    const projectTitle = ["Uncontentious", "GeekyNameApp"]

    let renderProjectInfo = (projectInfo)=>{
        return projectInfo.map((info, index)=>{
                console.log(info)
            })
        }
    
    return(
        <div>
            {renderProjectInfo(projectTitle)}
            {/* include screen shots and descriptions */}
        </div>
    )
    
} 

export default ProjectsComponent