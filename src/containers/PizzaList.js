import React from 'react';
import Pizza from '../components/Pizza'


const PizzaList = (props) => {

 let pizzas =  props.pizzas.map(pizza => <Pizza pizza={pizza} editBtnPizza={props.editBtnPizza}/>)

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
           pizzas 
          }
        </tbody>
      </table>
    );
  

}

export default PizzaList;
