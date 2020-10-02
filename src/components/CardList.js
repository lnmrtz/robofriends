import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            {
                props.robots.map((user, i)=> {
                    return (
                        <Card name={props.robots[i].name} email = {props.robots[i].email} id={props.robots[i].id} key={props.robots[i].id}/>
                            
                        
                    )
                })
            }
        </div>
    )
}
export default CardList;