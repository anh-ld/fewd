class Question extends React.Component {
  render() {
    return (
      <h1>Question {this.props.id}: {this.props.question}</h1>
    )
  }
}

class Choice extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.clickHandler(this.props.choice[0], this.props.answer)}>{this.props.choice[0]}</button>
        <button onClick={() => this.props.clickHandler(this.props.choice[1], this.props.answer)}>{this.props.choice[1]}</button>
        <button onClick={() => this.props.clickHandler(this.props.choice[2], this.props.answer)}>{this.props.choice[2]}</button>
        <button onClick={() => this.props.clickHandler(this.props.choice[3], this.props.answer)}>{this.props.choice[3]}</button>
      </div>
    )
  }
}

class Result extends React.Component {
  render() {
    return (
      <div>
        <span>Correct: {this.props.correct}</span><br/>
        <span>Incorrect: {this.props.incorrect}</span>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      correct: 0,
      incorrect: 0,
      question: ["What's 8x2?",
                "What is the capital city of Vietnam?",
                "Which club is the best football club?",
                "Where is the Big Ben Tower?",
                "What is the most populated country?"],
      choice: [[15, 18, 17, 16],
              ["Vientiane", "Phnompenh", "Bangkok", "Hanoi"],
              ["ManUnited", "Chelsea", "Real Madrid", "Barcelona"],
              ["London", "Paris", "Lisbon", "Berlin"],
              ["Egypt", "America", "China", "Indonesia"]],
      answer: [16, "Hanoi", "ManUnited", "London", "China"]
    }
  }

  clickHandler = (choice, answer) => {
    this.setState((prevState, props) => {
      return {count: prevState.count < 4 ? prevState.count + 1 : prevState.count,
            correct: choice == answer ? prevState.correct + 1 : prevState.correct,
            incorrect: choice == answer ? prevState.incorrect : prevState.incorrect + 1}
    })
  }

  render() {
    return (
      <div>
        <Question
          id={this.state.count + 1}
          question={this.state.question[this.state.count]}/>
        <Choice
          clickHandler={this.clickHandler}
          choice={this.state.choice[this.state.count]}
          answer={this.state.answer[this.state.count]}/>
        <Result
          correct={this.state.correct}
          incorrect={this.state.incorrect}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
