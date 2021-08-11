import React from 'react'
import CharacterItem from './CharacterItem'

const Character = ({items}) => {
  return (
    <div>
      <section>
        {items.map(item => (
          <CharacterItem key={item.char_id} item={item} />
        ))
        }
      </section>
    </div>
  )
}

export default Character
