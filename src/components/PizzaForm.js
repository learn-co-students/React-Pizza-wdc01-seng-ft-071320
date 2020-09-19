import React from "react"

const PizzaForm = (props) => {
  let pizza = props.editPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                pizza ? pizza.topping : null
              } onChange={(e)=> props.toppingChange(e.target.value)}/>
        </div>
        <div className="col">
          <select value={pizza ? pizza.size: null} onChange={(e) => props.sizeChange(e.target.value)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizza ? pizza.vegetarian : null} onChange={(e) => props.vegChange(e.target.value)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={pizza ? !pizza.vegetarian : null} onChange={(e) => props.vegChange(e.target.value)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
