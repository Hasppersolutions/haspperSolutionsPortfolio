import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookMeeting.css'; // Import the CSS for this component

function BookMeeting() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');

  // Predefined 30-minute time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time.');
      return;
    }
    
    // Generate a mock meeting link
    const link = `https://meetings.com/schedule?date=${selectedDate.toLocaleDateString()}&time=${selectedTime}`;
    setMeetingLink(link);
  };

  return (
    <div className="book-meeting-container">
      <h2>Book an Online Meeting (30 minutes)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()} // Restrict to future dates
            placeholderText="Select a date"
          />
        </div>
        <div>
          <label>Select a Time Slot:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button type="submit">Book Meeting</button>
      </form>
      {meetingLink && (
        <div className="meeting-link-container">
          <h3>Your Meeting Link:</h3>
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            {meetingLink}
          </a>
        </div>
      )}
    </div>
  );
}

export default BookMeeting;
