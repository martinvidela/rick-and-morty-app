import React from 'react'
import {useSelector } from 'react-redux'
import Card from '../Card/Card'

export const Favorites = () => {
    const favorites = useSelector(state=>state.myFavorites)
    
  return (
    <div className='cards-container'>
        {
          favorites.map((character)=>{
            return(
              <Card
              character={character} id={character.id} 
              />
            )
          })
        }

    </div>
  )
}
