import React from 'react';

const moonIcon = props => {
    let moonURL = encodeURI("https://www.wunderground.com/graphics/moonpictsnew/moon" + props.day + ".gif")

    return (
        <img className="img-responsive" src={moonURL} alt="Moon" />
    )
}
export default moonIcon;
