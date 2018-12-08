class Counter extends React.Component {
  constructor(props) {
    super(props)
    // state must be an object
    // initial state set up
    this.state = {
      foo: "Fuh",
      bar: "Barrrr"
    }
  }

  componentDidMount() {
    setTimeout(() => {this.setState({foo: "New Fuh", bar: "New Barrrr"})}, 3000);
  }

  render() {
    return <div>Foo is {this.state.foo} and Bar is {this.state.bar}.</div>
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById("root")
)
