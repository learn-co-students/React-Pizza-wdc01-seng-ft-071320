import React from "react"

const PizzaForm = (props) => {
  let pizza = props.editPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                pizza ? pizza.topping : null
              } onChange={ props.onChange }/>
        </div>
        <div className="col">
          <select value={pizza ? pizza.size: null} name = "size" onChange={ props.onChange } className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={pizza ? pizza.vegetarian : null} onChange={(e) => props.vegChange(e.target.value)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegtarian" value="Not Vegetarian" checked={pizza ? !pizza.vegetarian : null} onChange={(e) => props.vegChange(e.target.value)}/>
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
