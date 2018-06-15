import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  let assignedClasses = [];

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React app</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
