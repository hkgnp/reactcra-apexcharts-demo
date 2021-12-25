import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          data: [],
        },
      ],
    };
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  changeData = () => {
    let y = [];
    for (let i = 0; i < 20; i++) {
      // let n = this.getRandomNumber(60, 100);
      y.push(45 + parseInt(Math.random() * 35));
      // y.push(n);
    }
    this.setState({ series: [{ data: y }] });
  };

  render() {
    {
      setInterval(this.changeData, 1000);
    }
    return (
      <div className="line">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="1500"
        />
      </div>
    );
  }
}

export default Line;
