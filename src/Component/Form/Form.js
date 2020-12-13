import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
