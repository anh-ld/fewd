class ControlledMultiple extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selectName: 'apple'}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    // console.log(event.target);
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    var array = ["apple","banana","carrot","donuts"]
    var options = array.map( (item) =>
      <option value = {item}>{item}</option>
    )
    return (
      <form>
        <input name="inputName" value = {this.state.inputName} onChange = {this.handleChange}/>
        <textarea name="textAreaName" type = "text" value = {this.state.textAreaName} onChange = {this.handleChange}/>

        <select name = "selectName" value={this.state.selectName} onChange={this.handleChange}>
          {options}
        </select>
      </form>
    )
  }
}

ReactDOM.render(
  <ControlledMultiple/>,
  document.getElementById('root')
)
