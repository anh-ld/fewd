class Name extends React.Component {
  render() {
    return (
      <div>
        {this.props.label} <br/>
        <input
        value = {this.props.value}
        onChange={() => this.props.handleChange(event)}
        name={this.props.name}/>
      </div>
    )
  }
}

class Activity extends React.Component {
  render() {
    return (
      <div className="activity">
        Select Activity <br/>
        <select
        value = {this.props.value}
        name={this.props.name}
        onChange={() => this.props.handleChange(event)}>
          <option value="Science Lab">Science Lab</option>
          <option value="Cooking">Cooking</option>
          <option value="Swimming">Swimming</option>
          <option value="Painting">Painting</option>
        </select>
      </div>
    )
  }
}

class Checkbox extends React.Component {
  render() {
    return (
      <div className="checkbox"
      onChange={() => this.props.handleChange(event)}>
        Check all that apply: <br/>
        <input type="checkbox" name={this.props.name} checked={this.props.value.a} value="a"/>a) Dietary Restrictions<br/>
        <input type="checkbox" name={this.props.name} checked={this.props.value.b} value="b"/>b) Physical Disabilities<br/>
        <input type="checkbox" name={this.props.name} checked={this.props.value.c} value="c"/>c) Medical Needs<br/>
      </div>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Remove</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Activity</th>
          <th>Restrictions</th>
        </tr>
        {this.props.data.map((item, index) =>
          <Post key = {index}
            firstName = {item.firstName}
            lastName = {item.lastName}
            activity = {item.activity}
            restrictions = {item.restrictions}
            removeItem = {() => this.props.removeItem(index)}/>
          )}
      </table>
    )
  }
}

class Post extends React.Component {
  render() {
    return (
      <tr>
        <td className="remove" onClick={() => this.props.removeItem()}>x</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.activity}</td>
        <td>{this.props.restrictions}</td>
      </tr>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: [],
                  activity: "Science Lab",
                  checkbox: {a: false, b: false, c: false},
                  firstName: "",
                  lastName: ""}
  }

  handleChange = (event) => {
    if (event.target.name == "checkbox") {
      let checkboxCopy = this.state.checkbox;
      event.target.checked == true ?
      checkboxCopy[event.target.value] = true :
      checkboxCopy[event.target.value] = false;
      this.setState({checkbox: checkboxCopy})
    } else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  addItem = () => {
    let itemsCopy = this.state.items.slice();
    let r = "";
    for (let property in this.state.checkbox) {
      if (this.state.checkbox[property] == true) {
        r += property;
      }
    }
    itemsCopy.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      activity: this.state.activity,
      restrictions: r
    })
    this.setState({items: itemsCopy,
                  activity: "Science Lab",
                  checkbox: {a: false, b: false, c: false},
                  firstName: "",
                  lastName: ""})
  }

  removeItem = (index) => {
    let itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    this.setState({items: itemsCopy,
                  activity: "Science Lab",
                  checkbox: {a: false, b: false, c: false},
                  firstName: "",
                  lastName: ""})
  }
  render() {
    return (
      <div>
        <Name handleChange={this.handleChange} value={this.state.firstName} label="First Name" name="firstName"/>
        <Name handleChange={this.handleChange} value={this.state.lastName} label="Last Name" name="lastName"/>
        <Activity handleChange={this.handleChange} value={this.state.activity} name="activity"/>
        <Checkbox handleChange={this.handleChange} value={this.state.checkbox} name="checkbox"/>
        <button onClick={this.addItem}>Submit</button>
        <Table removeItem={this.removeItem} data={this.state.items}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
