import * as React from "react";
import { Page, TextField, Spinner } from '@shopify/polaris';
import htmlPlaceholder from '../utils/htmlPlaceholder';
import PopUp from './PopUp';
import axios from 'axios';

interface State {
  title: string,
  value: string,
  showPopUp: boolean,
  savingData: boolean
}

interface Props {
  history: any,
  handleChangePages: (pages: {id: number, title: string, updated_at: string }[]) => void
}

class NewPage extends React.Component<Props, State> {
  state: State = {
    title: 'New Page',
    value: '',
    showPopUp: false,
    savingData: false
  };

  private handleChange = (value: string, id: string): void => {
    if (id === "title") {
      this.setState({title: value});
    } else if (id === "value") {
      this.setState({value});
    }
  };

  private togglePopUp = (): void => {
    this.setState((prevState: State) => ({
      showPopUp: !prevState.showPopUp
    }))
  }

  private backToPages = (): void => {
    const { history }: any = this.props;
    history.push('/');
  }

  private save = (): void => {
    if(this.state.title) {
      this.setState({savingData: true})
      this.postDataToServer();
    }
  }

  private postDataToServer = async (): Promise<void> => {
    const data: object = {
      page: {
        title: this.state.title,
        body_html: this.state.value
      }
    }
    await axios.post('http://localhost:3000/api/pages', data);
    const pagesForNow = await axios.get('http://localhost:3000/api/pages');
    this.props.handleChangePages(pagesForNow.data.pages);
    this.props.history.push('/');
  }

  render() {
    const {showPopUp} = this.state;
    const spinnerStyle: object = {
      textAlign: 'center',
      display: this.state.savingData ? 'block' : 'none'
    }
    return (
      <Page
        fullWidth
        breadcrumbs={[{content: 'Pages', onAction: this.togglePopUp}]}
        title="New Page"
        primaryAction={{content: 'Save', onAction: this.save}}
      >
        <div style={spinnerStyle}>
          <Spinner size="large" color="teal" />
        </div>
        <TextField
          id="title"
          label="Page Title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Page title is required"
          error={!this.state.title}
        />
        <TextField
          id="value"
          label="HTML Code"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={htmlPlaceholder}
          helpText="Paste your HTML code to the textfield above."
          multiline={15}
        />
        <PopUp
          backToPages={this.backToPages}
          save={this.save}
          showPopUp={showPopUp}
          togglePopUp={this.togglePopUp}
        />
      </Page>
    );
  }
}

export default NewPage;
