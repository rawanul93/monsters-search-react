import React from "react";
import "./CardList.style.css";
import { Card } from '../card/cardComponent';

export const CardList = ({monsters}) => {
  return (
    <div className='cardList'>
        {monsters.map(monster => 
            <Card key={monster.id} monster={monster} /> 
        )}
    </div>
  )
}