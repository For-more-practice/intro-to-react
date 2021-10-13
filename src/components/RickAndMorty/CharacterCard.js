import React from 'react'

const CharacterCard = (props) => {
    const { name, image } = props.character
    return (
        <div className='character-card'>
            <h2>{name}</h2>
            <div className='img-container'>
                <img src={image} />
            </div>
        </div>
    )
}
export default CharacterCard;