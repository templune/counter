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
        if(counter === '20:59:40'){
            this.stopInterval();
        }
      return (
        <>
        <ul className="list-unstlyed list-inline">
          <li className="list-inline-item">
            <div>Siglo</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <div>Año</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <div>Día</div>
            <p className="counter">21:</p>
          </li>
          <li className="list-inline-item">
            <span>Hora</span> <span>Minutos</span> <span>Segundos</span>
            <p className="counter">{counter}</p>
          </li>
        </ul>
              
          <ShowMesagge showMessage={counter === '20:59:40'}></ShowMesagge>
         
         
        </>
      );
    }
  }

export default Clock
  