class PostButton extends React.Component {
  render() {
    return (
      <button onClick = { () => this.props.handleClick()}>{this.props.label}</button>
    )
  }
}

class PostText extends React.Component {
  render() {
    return (
        <div className="postText">{this.props.text}</div>
    )
  }
}

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <PostButton label = "x" handleClick = {this.props.removeItem}/>
        <PostText text = {this.props.title}/>
        <PostButton label = "+" handleClick = {this.props.incrementScore}/>
        <PostText text = {this.props.score}/>
        <PostButton label = "-" handleClick = {this.props.decrementScore}/>
      </div>
    )
  }
}

class PostList extends React.Component {
  render() {
    return (
      <ol className="postList">
      {
        this.props.postList.map((item,index) =>
        <Post key = {index}
          title = {item.title}
          score = {item.score}
          incrementScore = {() => this.props.updateScore(index,1)}
          decrementScore = {() => this.props.updateScore(index,-1)}
          removeItem = {() => this.props.removeItem(index)}/>
         )
       }
      </ol>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:"", items : []}
  }
  handleChange(event){
    this.setState({value:event.target.value})
  }
  addItem(){
    var itemsCopy = this.state.items.slice()
    var truncatedString = this.state.value.substring(0,20);
    itemsCopy.push({"title":truncatedString,"score":0})
    itemsCopy.sort((a,b)=>{
      return b.score - a.score;
    })
    this.setState({items:itemsCopy,value:""})
  }
  removeItem(index){
    var itemsCopy = this.state.items.slice()
    itemsCopy.splice(index,1);
    itemsCopy.sort((a,b) => {
        return b.score - a.score
    })
    this.setState({items:itemsCopy})
  }
  updateScore(index,val){
    var itemsCopy = this.state.items.slice()
    itemsCopy[index].score += val
    itemsCopy.sort((a,b) => {
        return b.score - a.score
    })
    this.setState({items:itemsCopy})
  }
  render(){
    return (
      <div>
        <input value = {this.state.value} onChange = {this.handleChange.bind(this)}/>
        <button onClick = { () => this.addItem()}>Submit</button>
        <PostList postList = {this.state.items}
        updateScore = {this.updateScore.bind(this)}
        removeItem = {this.removeItem.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
