function HelloWorld(props) {
  return <h1>Hello World. I&#39;m {props.name}. {props.age}.</h1>
}
ReactDOM.render(
  <HelloWorld name="Duy Anh" age="22"/>,
  document.getElementById("root")
)
