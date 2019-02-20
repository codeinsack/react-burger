import React, { Component } from 'react';

import Wrapper from './AppStyled';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App] getDerivedStateFromProps', props);
    return state;
  }

  state = {
    persons: [
      { id: 'asdfasf', name: 'Max', age: 28 },
      { id: 'bdfbdff', name: 'Manu', age: 29 },
      { id: 'wegweds', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  componentDidMount() {
    console.log('[App] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const { persons, changeCounter } = this.state;
    const personIndex = persons.findIndex(person => person.id === id);
    const newPersons = [...persons];
    newPersons[personIndex].name = event.target.value;
    this.setState({
      persons: newPersons,
      changeCounter: changeCounter + 1,
    });
  };

  deletePersonHandler = (id) => {
    const { persons } = this.state;
    const newPersons = persons.filter(person => person.id !== id);
    this.setState({ persons: newPersons });
  };

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons,
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true,
    });
  };

  render() {
    console.log('[App] render');
    const {
      persons, showPersons, showCockpit, authenticated,
    } = this.state;
    const { appTitle } = this.props;
    let people = null;

    if (showPersons) {
      people = (
        <Persons
          persons={persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={authenticated}
        />
      );
    } else {
      people = null;
    }

    return (
      <Wrapper>
        <button
          type="button"
          onClick={() => { this.setState({ showCockpit: false }); }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated,
          login: this.loginHandler,
        }}
        >
          {showCockpit
            ? (
              <Cockpit
                title={appTitle}
                clicked={this.togglePersonsHandler}
                show={showPersons}
                persons={persons}
              />
            ) : null}
          {people}
        </AuthContext.Provider>
      </Wrapper>
    );
  }
}

export default App;
