import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class SeamaWaterTdsChart extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div className = "chart">
                <Line
                    data={this.props.chartData}
                    height={310}
                    width={200}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true,
                                    max:1400
                                }
                            }],
                            xAxes: [{
                                displayFormats: {
                                    day: 'MMM D'
                                }
                            }]

                        },
                        title: {
                            display: true,
                            text: 'Total Disolved Solids Level',
                            position:"bottom"
                        }

                    }}
                />
            </div>
        );
    }
}
export default SeamaWaterTdsChart;
