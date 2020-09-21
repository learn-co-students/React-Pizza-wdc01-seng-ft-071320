import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  handleEdit = (pizza) => {
    this.setState({editPizza: pizza})
  }
  
  onChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        [name]: value
      }
    })
  }
  onToppingChange = (value) => {
    this.setState({ editPizza: {...this.state.editPizza, topping: value}})
  }
  
  onSizeChange = (value) => {
    this.setState({ editPizza: {...this.state.editPizza, size: value}})
  }
  
  onVegetarianChange = (value) => {
    let status = value === "Vegetarian" ? true : false
    this.setState({ editPizza: {...this.state.editPizza, vegetarian: status}})
  }
  
  handleSubmit = () => {
    let editPizza = this.state.editPizza
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editPizza)
    }
    fetch(`http://localhost:3000/pizzas/${editPizza.id}`,config)
    .then(res => res.json())
    .then(updatedPizza => {
      let pizzas = this.state.pizzas.map(pizza => {
        if(pizza.id === updatedPizza.id){
          return updatedPizza
        } else {
          return pizza
        }
      })
      this.setState({pizzas})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
            editPizza={this.state.editPizza} 
            submit={this.handleSubmit} 
            // toppingChange={this.onToppingChange} 
            // sizeChange={this.onSizeChange} 
            onChange={ this.onChange }
            vegChange={this.onVegetarianChange}
        />
        <PizzaList 
            pizzas={this.state.pizzas} 
            edit={this.handleEdit}
        />
      </Fragment>
    );
  }
}

export default App;
