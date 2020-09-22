import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const baseUrl = 'http://localhost:3000/'
const pizzasUrl = baseUrl + 'pizzas/'

class App extends Component {
    state = {
      pizzas: [],
      editPizza: {}

}

componentDidMount(){
  fetch(pizzasUrl)
  .then(resp => resp.json())
  .then(pizzas => this.setState({
    pizzas
  }))
}

updatePizza = (e) => {
  let name = e.target.name
  let value = e.target.value
  
  if (value === 'false')
    value = false
  if (value === 'true')
    value = true

  this.setState({
    editPizza: {...this.state.editPizza, 
    [name]: value}
  })
  
}


patchPizza = () => {
  let pizza = this.state.editPizza
  
  fetch(pizzasUrl + this.state.editPizza.id, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
        Accept: 'application.json'
    },
    body: JSON.stringify(
      pizza 
    )
  })
  .then(resp => resp.json())
  .then(newPizza => {
    let pizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === newPizza.id)
      return newPizza
      else return pizza 
    })

    this.setState({
       pizzas
    })
  })


}

editBtnPizza = (pizza) => {
  this.setState({
    editPizza: pizza
  })
  console.log(pizza)
}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          updatePizza={this.updatePizza} 
          editPizza={this.state.editPizza} 
          updatePizza={this.updatePizza} 
          patchPizza={this.patchPizza}
          />

        <PizzaList 
          pizzas={this.state.pizzas}
          editBtnPizza={this.editBtnPizza}
        />

      </Fragment>
    );
  }
}

export default App;
