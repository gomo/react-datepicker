import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default React.createClass({
  displayName: 'customDates',

  getInitialState () {
    return {
      startDate: moment('2017-12-01')
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {'<DatePicker'}<br />
              {'selected={this.state.startDate}'}<br />
              {'onChange={this.handleChange}'}<br />
              <strong>{'customDates={['}</strong><br />
                  <strong>{"{day: moment('2017-12-25'), className:'example-custom-dates-holiday', props: {title: 'Christmas Day'}}"}</strong><br />
              <strong>{']}'}</strong>{' />'}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            customDates={[
              {day: moment('2017-12-25'), className: 'example-custom-dates-holiday', props: {title: 'Christmas Day'}}
            ]} />
      </div>
    </div>
  }
})
