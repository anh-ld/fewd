function Header() {
  return (
    <div>
      <h1>Welcome to React Transportation</h1>
      <p>The best place to buy vehicles online</p>
    </div>
  )
}

function ChooseOption() {
  return (
    <div>
      <h2>Choose Options</h2>
      <div>
        <p>
          New Only&nbsp;
          <input type="checkbox" id="coding" name="interest" value="coding" checked/>
        </p>
      </div>
      <div>
        <p>
          Select Type&nbsp;
          <select>
            <option value ="All">All</option>
            <option value ="Cars">Cars</option>
            <option value ="Trucks">Trucks</option>
            <option value ="Convertibles">Convertibles</option>
          </select>
        </p>
      </div>
    </div>
  )
}

function Table(props) {
  var table = [];
  for (let i = 0; i < props.data.length; i++) {
    table.push(
      <div>
        <table>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <td>{props.data[i][0]}</td>
            <td>{props.data[i][1]}</td>
            <td>{props.data[i][2]}</td>
            <td><button>Buy Now</button></td>
          </tr>
        </table>
      </div>
    )
  }
  return table;
}

function Option(props) {
  return (
    <div>
      <h2>{props.carType}</h2>
      <Table data={props.data}/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <ChooseOption/>
      <Option carType="Cars" data={[[2013, "A", "$32000"], [2011, "B", "$4400"], [2016, "B", "$15500"]]}/>
      <Option carType="Trucks" data={[[2014, "D", "$18000"], [2013, "E", "$5200"]]}/>
      <Option carType="Convertibles" data={[[2009, "F", "$2000"], [2010, "G", "$6000"], [2012, "H", "$12500"], [2017, "G", "$50000"]]}/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
