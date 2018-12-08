class Details extends React.Component {
  render() {
    return <h1>{this.props.details}</h1>
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
      onClick={() => this.props.clickHandler(this.props.id, this.props.name)}
      style={{color: this.props.active ? "lightgreen" : "white"}}>
      {this.props.name}
      </button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: [0, 0, 0, 0],
      details: "Nobody was chose"
    }
  }

  clickHandler = (id, details) => {
    let arr = [0, 0, 0 ,0];
    arr[id] = 1; 
    this.setState({active: arr, details: details + " was chose"})
  }

  render() {
    return (
      <div>
        <Button clickHandler={this.clickHandler} id={0} name="Bob" active={this.state.active[0]}/>
        <Button clickHandler={this.clickHandler} id={1} name="Joe" active={this.state.active[1]}/>
        <Button clickHandler={this.clickHandler} id={2} name="Kathy" active={this.state.active[2]}/>
        <Button clickHandler={this.clickHandler} id={3} name="Tom" active={this.state.active[3]}/>
        <Details details={this.state.details}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
