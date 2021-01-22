import React from 'react'
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
        if(counter === '20:23:00'){
            this.stopInterval();
        }
      return (
        <>
          {counter}
          {counter === '20:23:00' && 'Diego me la mama'}
        </>
      );
    }
  }

export default Clock
  