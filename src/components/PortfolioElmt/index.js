import React from 'react';
import project1 from '../../assets/personal/project1.png';
import project2 from '../../assets/personal/project2.png';
import budgetTracker from '../../assets/personal/budget-tracker.png';
import noteTaker from '../../assets/personal/note-taker.png'; 
import codeQuiz from '../../assets/personal/code-quiz.png'; 
function Element () {

    const elementList = [
        {name: 'Event-Day Planner', link: 'https://ecarlson0123.github.io/event-planner/', repo:'https://github.com/ecarlson0123/event-planner', img: project1},
        {name: 'Watch This!', link: 'https://gentle-headland-06018.herokuapp.com/', repo:'https://github.com/bagl0025/watch-this', img: project2},
        {name: 'Budget Tracker', link: 'https://glacial-lake-04140.herokuapp.com/', repo: 'https://github.com/ecarlson0123/budget-tracker', img: budgetTracker },
        {name: 'Note Taker', link: 'https://shrouded-meadow-15877.herokuapp.com/', repo: 'https://github.com/ecarlson0123/note-taker', img: noteTaker },
        {name: 'Code Quiz', link: 'https://ecarlson0123.github.io/code-quiz/', repo: 'https://github.com/ecarlson0123/code-quiz', img: codeQuiz }
    ]

    
    return (
        <section className='elementContainer'>
            {elementList.map((project) => (
                <div className='projectImage' key={project.name} style={{ backgroundImage:`url(${project.img})`, backgroundSize: 'stretch' }}>
                    <div className='projectInfo'>
                        <a href={project.link} rel="noreferrer" target='_blank'>{project.name}</a>
                        <a href={project.repo} rel="noreferrer" target='_blank'>
                            <img src={require('../../assets/personal/GitHub-Mark-32px.png')} alt=''  />
                        </a>
                        
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Element