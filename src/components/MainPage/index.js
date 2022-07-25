import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';



function MainPage(props) {
    const {currentCategory} = props;
    const {...category}=currentCategory;
    
    function handleCategory(name) {
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
        };
/*         else if (name === 'resume') {
            return(
                <Resume></Resume>
            );
        }; */
    }

    return (
        <section>
            {handleCategory(category)}
        </section>
    );
}

export default MainPage