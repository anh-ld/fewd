import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Pages from './components/Pages';
import NewPage from './components/NewPage';
import EditPage from './components/EditPage';

interface State {
  pages?: {id: number, title: string, updated_at: string }[]
}

class App extends React.Component<{}, State> {
  state: State = {
    pages: undefined
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/pages')
      .then(res => {
        this.setState({pages: res.data.pages});
      });
  }

  private handleChangePages = (pages: {id: number, title: string, updated_at: string }[]): void => {
    this.setState({pages});
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <Pages {...props} pages={this.state.pages} handleChangePages={this.handleChangePages} />} />
          <Route path='/new' render={(props) => <NewPage {...props} handleChangePages={this.handleChangePages} />} />
          <Route path='/edit/:id' render={(props) => <EditPage {...props} handleChangePages={this.handleChangePages}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
