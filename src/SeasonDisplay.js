import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets go to the bich bich! Ninki Minjaj',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr! It\'s chilly!',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude) => {
    var month = new Date().getMonth();
    return latitude > 0 ? (month >= 3 && month <= 8 ? 'summer' : 'winter') :
        (month >= 3 && month <= 8 ? 'winter' : 'summer');
}

const App = (props) => { // functional components should have as little logic as possible
    const season = getSeason(props.lat);
    const { text, iconName } = seasonConfig[season]; // Destructuring!!!

    // it's a good convention to have the css class name of the root element as same as the App name
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-top-left icon massive ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon-bottom-right icon massive ${iconName}`}></i>
        </div>
    )
}

export default App;