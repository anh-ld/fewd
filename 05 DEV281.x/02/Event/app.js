class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
      //increments the count of the state
      this.setState((prevState,props) => {
        return {count: prevState.count + 1}
      })
  }
  render() {
    //renders a button that displays the state count
    return (
      <div>
        <h1>Click to see the Increment</h1>
        <button onClick = {this.clickHandler}>{this.state.count}</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById("root")
)
