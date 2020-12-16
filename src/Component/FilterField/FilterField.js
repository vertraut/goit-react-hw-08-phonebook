import React, { Component } from 'react';

export default class FilterField extends Component {
  handleFilter = e => {
    this.props.updateState(e.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleFilter} />
      </div>
    );
  }
}
