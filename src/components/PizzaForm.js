import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={(e) => props.changeTopping(e.target.value)} value={
                props.editPizza.topping ? props.editPizza.topping : ''
              }/>
        </div>
        <div className="col">
          <select value={props.editPizza.size ? props.editPizza.size : null} className="form-control" onChange={(e) => props.changeSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={(e) => props.changeVegetarian(e.target.value)} value="Vegetarian" checked={props.editPizza.vegetarian ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={(e) => props.changeVegetarian(e.target.value)} checked={props.editPizza.vegetarian === false ? true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.submitEditedPizza()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
