import React from 'react';
import { connect } from 'react-redux';

const ListItem = ({content, isSelected , onClick }) => {
  console.log(content);
  return (
    <li
      style={{ color: isSelected ? 'red' : 'black' }}
      onClick={onClick}
    >
      {content}
    </li>
  );
};

const ConListItem = connect(({ optimizateReduxDemo: { selectedItem } }, props) => ({
  isSelected: selectedItem === props.itemId,
}))(ListItem);

const List = ({ children }) => <ul>{children}</ul>;

class OptimizateReduxDemo2 extends React.Component {
  handleClickItem = itemId => () => {
    console.log('click', this);
    this.props.dispatch({
      type: 'CHANGE_SELECTED',
      payload: {
        selectedItem: itemId
      }
    });
  };
  render() {
    return (
      <div>
        <List>
          {this.props.items.map(({ itemId, content }) => (
            <ConListItem
              key={itemId}
              itemId={itemId}
              content={content}
              onClick={this.handleClickItem(itemId)}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default connect()(OptimizateReduxDemo2);
