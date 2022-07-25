import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';



function MainPage(props) {
    const {currentCategory} = props;
    const {...category}=currentCategory;
    
    function handleCategory(name) {
        console.log(category.name);
        if (category.name === 'contact') { 
            return(
                <Contact></Contact>
            );
        } else if (category.name === 'about') {
            return(
                <About></About>
            );
        } else if (category.name === 'portfolio') {
            return(
                <Portfolio></Portfolio>
            );
        } else if (name === 'resume') {
            return(
                <Resume/>
            );
        };
    }

    return (
        <section>
            {handleCategory(category)}
        </section>
    );
}

export default MainPage