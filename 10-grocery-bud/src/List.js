import React from 'react'

const List = ({items}) => {
    console.log(items)
  return (
    <div>{items?.map((item) => {
        return(
            <p key={item.id}>{item.title}</p>
        )
    })}</div>
  )
}

export default List