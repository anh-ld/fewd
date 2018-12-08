function Feature(props){
  return <h1>This feature is {props.active ? "active" : "NOT active"}</h1>
}
ReactDOM.render(
  <Feature active={false}/>,
  document.getElementById("root")
)
