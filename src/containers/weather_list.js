import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Press</th>
                        <th>Humid</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
