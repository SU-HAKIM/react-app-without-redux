import React, { Component } from 'react';
import Form from './content/Form';
import List from './content/List';
import MyModal from './content/Modal';
import MyContext from './context/Context';


class App extends Component {
  state = {
    value: '',
    todo: [],
    isOpen: false,
    newValue: '',
    selectedItem: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      todo: [
        ...this.state.todo,
        this.state.value
      ]
    })
    e.target.reset()
    this.setState({ value: '' })
  }
  handleOpen = (index) => {

    this.setState({
      isOpen: true,
      selectedItem: index
    })
  }
  handleClose = (e) => {
    this.setState({
      isOpen: false
    })
  }
  newSubmit = (e) => {
    e.preventDefault()
    const newArr = [...this.state.todo]
    newArr[this.state.selectedItem] = this.state.newValue
    this.setState({
      todo: newArr
    })
    this.setState({ isOpen: false })
  }
  handleNewValue = (e) => {
    this.setState({
      newValue: e.target.value
    })
  }
  deleteItem = (gotIndex) => {
    const newArr = [...this.state.todo]
    newArr.splice(gotIndex, 1)
    this.setState({
      todo: newArr
    })
  }
  render() {
    const { value, todo, isOpen } = this.state
    return (
      <div className="app">
        <h1 className="app__title">Simple TODO  App</h1>
        <div className="app__body">
          <MyContext.Provider value={{ handleOpen: this.handleOpen, deleteItem: this.deleteItem }}>
            <Form value={value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <List todo={todo} />
            <MyModal
              isOpen={isOpen}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              handleChange={this.handleNewValue}
              handleSubmit={this.newSubmit}
            />
          </MyContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;