import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendarStyles.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calendar">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    );
}
export default MyCalendar;
