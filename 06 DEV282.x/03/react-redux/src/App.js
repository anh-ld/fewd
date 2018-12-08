import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import ItemList from './components/ItemList';
import addItem from './actions/addItem';
import deleteItem from './actions/deleteItem';

class App extends Component {
  render() {
    let store = createStore(reducer);
    const mapStateToProps = state => {
      return {
        items: state
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        onAdd: (name, price) => {
          dispatch(addItem(name, price));
        },
        onDelete: id => {
          dispatch(deleteItem(id));
        }
      };
    };
    
    //container components
    const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

    return (
      <Provider store={store}>
        <div>
          <h1>Item List</h1>
          <ItemsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
