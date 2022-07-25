import React from 'react';


function Resume () {

    return (
        <div className='resume'>
            <h1>My Resume</h1>
            <div id='resumeContainer'>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
};

export default Resume