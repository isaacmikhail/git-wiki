import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo}) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href='#'>Ver repositório</a><br />
      <a href='#' className='remove'>Remove</a>
      
      <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;
