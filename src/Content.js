import React from 'react'

const Content = ({Items}) => {
  return (
    <div>
      <ol>
        {Items.map(Item =>(
          <li key={Item.id}> {JSON.stringify(Item)} </li>
        ))}
       </ol>
    </div>
  )
}

export default Content