class Welcome extends React.Component {
  render() {
    return <h1>Hello World! I am {this.props.message}.</h1>
  }
}

ReactDOM.render(
  <Welcome message="Duy Anh"/>,
  document.getElementById("root")
)
