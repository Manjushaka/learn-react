// english post link:
// http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/

class FeactDOMComponent {
  constructor(element) {
    this._currentElement = element;
  }
  mountComponent(container) {
    const domElement = document.createElement(this._currentElement.type);
    const textNode = document.createTextNode(this._currentElement.props.children);
    domElement.appendChild(textNode);
    container.appendChild(domElement);
    this._hostNode = domElement;

    return domElement;
  }
}

const Feact = {
  createElement(type, props, children) {
    const element = {
      type,
      props: props || {},
    };
    if (children) {
      element.props.children = children;
    }

    return element;
  },
  render(element, container) {
    const componentInstance = new FeactDOMComponent(element);

    return componentInstance.mountComponent(container);
  },
  createClass(spec) {
    function Constructor(props) {
      this.props = props;
      Constructor.prototype.render = spec.render;

      return Constructor;
    }
  }
}

Feact.render(
  Feact.createElement('h1', null, 'hello Feact!'),
  document.getElementById('root')
)
