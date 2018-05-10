import React from 'react';

class Picker extends React.Component {
  handleChangeSelect = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value, onChange, options } = this.props;
    return (
      <span>
        <h1>{value}</h1>
        <select onChange={this.handleChangeSelect} value={value}>
          {
            options.map(option => (
              <option value={option} key={option}>{option}</option>
            ))
          }
        </select>
      </span>
    );
  }
}

export default Picker;
