import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const DatePacker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ border: "solid 1px pink" }}
      />
    );
    return (
        <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeInput
      customTimeInput={<ExampleCustomTimeInput />}
    />
    );
};

export default DatePacker;