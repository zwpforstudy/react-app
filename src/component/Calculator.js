import React, {Component} from 'react'

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  return <p>{props.celsius >= 100 ? '水会烧开' : '水不会烧开'}</p>
}


function TemperatureInput(props){
    const {placeholder, temperature, onTemperatureChange} = props
    return (
      <input placeholder={placeholder} value={temperature} onChange={(e) => onTemperatureChange(e.target.value)}/>
    )
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'c'
    }
  }

  // handleChange = (scale, e) => {
  //   this.setState({
  //     scale: scale,
  //     temperature: e.target.value
  //   })
  // }

  handleChange(scale, temperature) {
    console.log('bind this before', this)
    this.setState({
      scale: scale,
      temperature
    })
  }

  render() {
    const {temperature, scale} = this.state,
      celsius = scale === 'c' ? temperature : tryConvert(temperature,toCelsius),
      fahrenheit = scale === 'f' ? temperature : tryConvert(temperature,toFahrenheit);

    console.log(this.handleChange)

    return (
      <div>
        <TemperatureInput placeholder="输入水温，摄氏度" temperature={celsius} onTemperatureChange={(temperature) => this.handleChange('c',temperature)}/>
        <TemperatureInput placeholder="输入水温，华氏度" temperature={fahrenheit} onTemperatureChange={(temperature) => this.handleChange('f', temperature)}/>
        {/*<input placeholder="输入水温，摄氏度" value={celsius} onChange={(e) => this.handleChange('c',e)}/>*/}
        {/*<input placeholder="输入水温，华氏度" value={fahrenheit} onChange={(e) => this.handleChange('f',e)}/>*/}
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default Calculator