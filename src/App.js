import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

let url = 'http://localhost:3000/pizzas/'

class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(pizzasArray => {
      this.setState({
        pizzas: pizzasArray
      })
    })
  }

  editPizza = (clickedPizza) => {
    this.setState({
      editPizza: clickedPizza
    })
  }

  changeTopping = (updatedTopping) => {
    this.setState({
      editPizza: {...this.state.editPizza, topping: updatedTopping}
    })
  }

  changeSize = (updatedSize) => {
    this.setState({
      editPizza: {...this.state.editPizza, size: updatedSize}
    })
  }

  changeVegetarian = (updatedValue) => {
    switch (updatedValue){
      case 'Vegetarian':
        this.setState({
          editPizza: {...this.state.editPizza, vegetarian: true}
        })
      break
      case 'Not Vegetarian':
        this.setState({
          editPizza: {...this.state.editPizza, vegetarian: false}
        })
      break
    }
    
  }

  submitEditedPizza = () => {
    let configObj = {method: 'PATCH', headers: {'Content-Type': 'application/json', Accept: 'application/json'}, 
                    body: JSON.stringify({topping: this.state.editPizza.topping, size: this.state.editPizza.size, vegetarian: this.state.editPizza.vegetarian})}
    fetch(url + this.state.editPizza.id, configObj)
    .then(res => res.json())
    .then(updatedPizza => {
      let updatedPizzasArray = this.state.pizzas.map(pizza => {
        if (pizza.id === updatedPizza.id) 
            {pizza = updatedPizza}
        return pizza
      })
      this.setState({
        pizzas: updatedPizzasArray
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} changeTopping={this.changeTopping} changeSize={this.changeSize} changeVegetarian={this.changeVegetarian} submitEditedPizza={this.submitEditedPizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
