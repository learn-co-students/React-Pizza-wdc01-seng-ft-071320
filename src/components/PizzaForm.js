import React from "react"

const PizzaForm = (props) => {
  return(
   
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" onChange = {(e)=> props.updatePizza(e)} value={
                //Pizza Topping Should Go Here
                props.editPizza.topping
              }
            />
        </div>
        <div className="col">
          <select value={props.editPizza.size} name='size' className="form-control" onChange={(e) => props.updatePizza(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian'  value={true} checked={props.editPizza.vegetarian} onChange={(e) => props.updatePizza(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' value={false} checked={!props.editPizza.vegetarian} onChange={(e) => props.updatePizza(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.patchPizza}>Submit</button>
        </div>
      </div>
    
  )
}

export default PizzaForm
