import React, { Component } from 'react';
import { DateRangePicker as DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './styled.css';

class DateRangePickerPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionRange: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
            value: [new Date(), new Date()]
        }
    }

    handleSelect = (ranges) => {
        console.log(ranges);
        this.setState({
            selectionRange: ranges.selection
        })
    }
    handleClose = () => {
        console.log('closed');
    }
    onChange = (range) => {
        console.log(range);
        this.setState({
            value: range
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <DateRange
                    ranges={[this.state.selectionRange]}
                    onChange={this.handleSelect}
                    maxDate={new Date()}
                /> */}
                <div>
                    <DateRangePicker
                        className="test"
                        style={{border: 'none'}}
                        onChange={this.onChange}
                        value={this.state.value}
                        onCalendarClose={this.handleClose}
                        rangeDivider="to"
                        calendarClassName='calender'
                    />
                </div>
            </div>
        );
    }
}

export default DateRangePickerPopUp;