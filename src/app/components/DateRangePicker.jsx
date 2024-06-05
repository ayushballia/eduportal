import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/16/solid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { registerLocale } from 'react-datepicker';
import { enGB } from 'date-fns/locale';

registerLocale('en-GB', enGB);

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    
      <div className="flex space-x-6 items-center">
        <div className="flex flex-col">
          <label className="mb-1">From</label>
          <div className="relative flex items-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/yy"
              showMonthYearPicker
              className="w-full border border-gray-300 rounded-2xl px-4 py-2"
              placeholderText="MM/YY"
              locale="en-GB"
            />
            <FaCalendarAlt className="absolute right-3 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">To</label>
          <div className="relative flex items-center">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM/yy"
              showMonthYearPicker
              className="w-full border border-gray-300 rounded-2xl px-4 py-2"
              placeholderText="MM/YY"
              locale="en-GB"
            />
            <FaCalendarAlt className="absolute right-3 text-gray-500" />
          </div>
        </div>
      </div>
   
  );
};

export default DateRangePicker;