import React from 'react'
import Chart from 'react-google-charts'
import {connect}  from 'react-redux'
 
function PieChart(props){
    const high = props.ticket.filter(tick=>!tick.isResolved && tick.priority == "high").length
    const medium = props.ticket.filter(tick=>!tick.isResolved && tick.priority == "medium").length
    const low = props.ticket.filter(tick=>!tick.isResolved && tick.priority == "low").length
    return(
        <div className="container">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Priority', 'Has per customer'],
                    ['high', high],
                    ['medium', medium],
                    ['low', low]
                   
                ]}
                options={{
                    title: 'Ticket Priority',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket : state.tickets
    }
}

export default connect(mapStateToProps)(PieChart)

