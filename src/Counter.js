import React from 'react';
import {ShowMesagge} from './ShowMessage'
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    stopInterval = () => {
        clearInterval(this.timerID);
    }
  
    render() {
        const counter = this.state.date.toLocaleTimeString();
        if(counter === '20:49:50'){
            this.stopInterval();
        }
      return (
        <>
          <ShowMesagge showMessage={counter === '20:49:50'}></ShowMesagge>
          {counter}
         
        </>
      );
    }
  }

export default Clock
  