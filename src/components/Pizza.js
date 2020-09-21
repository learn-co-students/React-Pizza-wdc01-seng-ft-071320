import React from "react"

const Pizza = (props) => {
  const {id, topping, size, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true? "true" : "false"}</td>
      <td><button type="button" onClick={() => props.handleEdit(id, topping, size, vegetarian)} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
