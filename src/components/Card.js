import React from 'react';
const Card = (props) => {
    return (
        <div className=" dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}`} alt="robofriend" />
            <div>
    <h3>{props.name}</h3>
    <p>{props.email}</p>
    
            </div>
        </div>
    );

}
export default Card;