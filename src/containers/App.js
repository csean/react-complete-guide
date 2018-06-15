import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import People from '../components/People/People';

class App extends Component {
  state = {
    people: [
      { id: 100, name: 'Max', age: 28 },
      { id: 101, name: 'Manu', age: 29 },
      { id: 102, name: 'Stephanie', age: 26 }
    ],
    showPeople: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({people: people});
  };

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  }

  render() {
    let people = null;

    if (this.state.showPeople) {
      people = <People
            people={this.state.people}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    };

    return (
      <div className={classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePersonHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
