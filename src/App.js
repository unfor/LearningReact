import React, { useRef, Suspense, lazy } from 'react';
import './App.css';
// const FancyButton = lazy(() => import('./components/fancyButton/fancyButton.react'));
import FancyButton from "./components/fancyButton/fancyButton.react";

class App extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.buttons = [];
    this.state = {
      name: "假的"
    };
  }
  componentDidMount() {
    for (let i = 0; i < 7; i++) {
      this.buttons.push(<FancyButton key={i} ref={this.myRef} />);
    }
  }

  passmeFunc(fn){
    console.log(arguments);
    arguments[0]();
  }

  click = () => {
    this.setState({
      name: "真的来了"
    })
    this.passmeFunc(()=>{
      console.log("我是传进来的")
    })
  }

  asyncssClick = (event) => {
    console.log("a", event);
    setTimeout(()=>{
      console.log("e", event);
    },1000);
  }

  render() {
    this.passmeFunc(()=>{
      console.log('我不知道这个会不会成功')
    })
    console.log(this.state.name);
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ "width": "100px", "height": "100px" }} onClick={() => this.click()}><Head name={this.state.name}></Head></div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {this.buttons}
          <div onClick={(event) => this.asyncssClick(event)} >
            <FancyButton ref={this.myRef}></FancyButton>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

class Head extends React.Component {
  constructor(p) {
    super(p);
    // console.log(p.name);
    // this.state = {
    //   name: p.name
    // }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { name } = nextProps;
  //   // type可能由props驱动，也可能由state驱动，这样判断会导致state驱动的type被回滚
  //   if (name !== prevState.name) {
  //     return {
  //       name,
  //     };
  //   }
  //   // 否则，对于state不进行任何操作
  //   return null;
  // }
  render() {
    return (
      <div className={"head"}>{this.props.name}</div>
    );
  }
}
