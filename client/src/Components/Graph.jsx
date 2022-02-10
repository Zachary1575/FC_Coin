import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

class Graph extends Component {
    state = { 
        graph_width_perc: this.props.graph_width_perc,
        graph_aspect: this.props.graph_aspect,
        g_width: this.props.g_width,
        g_height: this.props.g_height,

     } 

    data = [{name: "Point A", uv: 4000, pv:2400, amt:2400}, {name: "Point B", uv: 3000, pv:1398, amt:2210}, 
    {name: "Point C", uv: 2000, pv:8800, amt:2290}, {name: "Point A", uv: 2780, pv:3980, amt:2100} ]

    render() { 

        const { graph_width_perc, graph_aspect, g_width, g_height } = this.state;

        return (
            <ResponsiveContainer width="70%" aspect={3}>
            <LineChart data={this.data} width={500} height={300} margin={{top:5, right:30, left:20, bottom:5}}>

                    <CartesianGrid strokeDasharray= "3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type= "monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
            </ResponsiveContainer>
        );
    }
}
 
export default Graph;