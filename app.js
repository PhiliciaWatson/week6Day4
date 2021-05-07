// 1. Create a Stateful Component
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
    this.state = {
      name :'Philicia'
    }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

// 2. Render State in the User Interface
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
    <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// 3. Render State in the User Interface Another Way
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
    const name = this.state.name;
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
    <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// 4. Set State with this.setState
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
  this.setState({
    name:'React Rocks!'
  })
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

// 5. Bind 'this' to a Class Method
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Change code below this line
        this.handleClick = this.handleClick.bind(this);
      // Change code above this line
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <button onClick = {this.handleClick}>Click Me</button>
          { /* Change code above this line */ }
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };

  // 6. Use State to Toggle an Element
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line
    toggleVisibility() {
      this.setState(state => {
        if (state.visibility === true) {
           return { visibility: false };
         } else {
           return { visibility: true };
        }
      });
    }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

// 7. Write a Simple Counter
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
    reset() {
      this.setState({
        count: 0
      });
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

// 8. Create a Controlled Input

// Couldn't figure out (skipped)

// 9. Create a Controlled Form
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };

// 10. Pass State as Props to Child Components
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "CamperBot"
      };
    }
    render() {
      return (
        <div>
          // Here we will call this.state.name in order to pass the value of
          CamperBot // to the NavBar component
          <Navbar name={this.state.name} />
        </div>
      );
    }
  }
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          // Since we passed in the CamperBot state value into the the NavBar
          component above // the h1 element below will render the value passed
          from state
          <h1>Hello, my name is: {this.props.name}</h1>
        </div>
      );
    }
  }

// 11. Pass a Callback as Props
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
           <GetInput
             input={this.state.inputValue}
             handleChange={this.handleChange}/>
           <RenderInput
             input={this.state.inputValue}/>
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };

// 12. Use the Lifecycle Method componentWillMount
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
    console.log('Component being mounted');
  }
    render() {
      return <div />
    }
  };

// 13. Use the Lifecycle Method componentDidMount
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: { this.state.activeUsers }</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
// 14. Add Event Listeners

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ""
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + "You pressed the enter key! "
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  }

// 15. Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
       // change code below this line
        if (nextProps.value % 2 == 0) {
          return true;
        }
        return false;
       // change code above this line
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };