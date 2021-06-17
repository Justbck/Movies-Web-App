import React from 'react';

function Rating({ value, text, color }) {
    return (
        <div className = "rating">
            <span>
                <i style = {{ color }} className = {
                    value >= 1 
                    ? 'fas fa-heart'
                    : value >= 0.5
                        ? 'far fa-heart'
                        : 'fas fa-heart'
                }>  
                </i>
            </span>

            <span>
                <i style = {{ color }} className = {
                    value >= 2 
                    ? 'fas fa-heart'
                    : value >= 0.5
                        ? 'far fa-heart'
                        : 'fas fa-heart'
                }>  
                </i>
            </span>

            <span>
                <i style = {{ color }} className = {
                    value >= 3 
                    ? 'fas fa-heart'
                    : value >= 0.5
                        ? 'far fa-heart'
                        : 'fas fa-heart'
                }>  
                </i>
            </span>

            <span>
                <i style = {{ color }} className = {
                    value >= 4 
                    ? 'fas fa-heart'
                    : value >= 0.5
                        ? 'far fa-heart'
                        : 'fas fa-heart'
                }>  
                </i>
            </span>

            <span>
                <i style = {{ color }} className = {
                    value >= 5 
                    ? 'fas fa-heart'
                    : value >= 0.5
                        ? 'far fa-heart'
                        : 'fas fa-heart'
                        
                }>  
                </i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating;