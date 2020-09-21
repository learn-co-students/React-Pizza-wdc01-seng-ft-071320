import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas: [],
    formPizza: {}
  }

  componentDidMount(){
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }
  
  handleEdit = (id, topping, size, vegetarian) => {
    this.setState({
      formPizza: {
        id, topping, size, vegetarian
      }
    })
  }

  handleFormTopping = (topping) => {
    this.setState({
      formPizza: {
        ...this.state.formPizza,
        topping: topping
      }
    })
  }

  handleFormSize = (size) => {
    this.setState({
      formPizza: {
        ...this.state.formPizza,
        size
      }
    })
  }

  handleVegetarian = (value) => {
    if (value === "Vegetarian"){
      this.setState({
        formPizza: {
          ...this.state.formPizza,
          vegetarian: true
        }
      })
    }
    else if (value === "Not Vegetarian"){
      this.setState({
        formPizza: {
          ...this.state.formPizza,
          vegetarian: false
        }
      })
    }
  }

  handleSubmit = (id) => {

    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.formPizza.topping,
        size: this.state.formPizza.size, 
        vegetarian: this.state.formPizza.vegetarian
      })
    }

    fetch(`http://localhost:3001/pizzas/${id}`, configObj)
    .then(res => res.json())
    .then(pizza => {
      let updatedPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === id){
        pizza.topping = this.state.formPizza.topping
        pizza.size = this.state.formPizza.size 
        pizza.vegetarian = this.state.formPizza.vegetarian 
        }
      return pizza
      })

      this.setState({
        pizzas: updatedPizzas,
        formPizza: {}
      })
    })

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          formPizza={this.state.formPizza} 
          handleFormTopping={this.handleFormTopping}
          handleFormSize={this.handleFormSize}
          handleVegetarian={this.handleVegetarian}
          handleSubmit={this.handleSubmit}
          />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
