import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e) => props.handleFormTopping(e.target.value)} type="text" className="form-control" placeholder="Pizza Topping" value={
              props.formPizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={(e) => props.handleFormSize(e.target.value)} value={props.formPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={(e) => props.handleVegetarian(e.target.value)} className="form-check-input" type="radio" value="Vegetarian" checked={props.formPizza.vegetarian === true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={(e) => props.handleVegetarian(e.target.value)} className="form-check-input" type="radio" value="Not Vegetarian" checked={props.formPizza.vegetarian === false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(props.formPizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
