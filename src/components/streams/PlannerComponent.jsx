/** @format */

import { useState } from "react";
// TODO: Group By week
const PlannerComponent = () => {
  const [isActive, setIsActive] = useState([]);

  const [isDateSelected, setIsDateSelected] = useState();
  //  const [ selectedWeek, setSelectedWeek] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [daysCollecion, setDaysCollecion] = useState();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const tasksList = [
    "Call",
    "Meeting",
    "Property Visit",
    "Deal Close",
    "Reminder",
    "Task",
    "Message",
    "Email",
    "Deal Close",
  ];
  function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  const arr = [...range(0, daysCollecion)];
  const renderCurrentYear = () => {
    const currentYear = new Date().getFullYear().toString().substr(-2);
    let d = new Date();
    let n = d.getMonth();
    return monthNames
      .filter((el, i) => i <= n)
      .map((el, i) => {
        return (
          <span
            className={isActive.includes(el) ? "active" : ""}
            onClick={() => {
              handlerYear(el, i);
            }}
          >
            {el} {currentYear}
          </span>
        );
      });
  };

  // Month here is 1-indexed (January is 1, February is 2, etc). This is
  // because we're using 0 as the day so that it returns the last day
  // of the last month, so you have to add 1 to the month number
  // so it returns the correct amount of days
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const handlerYear = (el, index) => {
    setSelectedMonth(index + 1);
    const currentYear = new Date().getFullYear();
    const d = daysInMonth(index + 1, currentYear);
    setDaysCollecion(d);
    const selected = monthNames.filter((item) => item === el);
    setIsActive(selected);
  };

  const dateHandler = (number) => {
    const selectedDate = arr.filter((el) => el === number);
    setIsDateSelected(selectedDate);
  };
  const getDayName = (dateStr, locale = "en-US") => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "short" });
  };
  const renderCurrentweek = () => {
    let currentYear = new Date().getFullYear();
    let currentDate = new Date();
    let day = currentDate.getDate();

    return arr.map((el) => {
      return el === 0 || el > day ? (
        ""
      ) : (
        <div className="day">
          <div
            className={`date ${isDateSelected?.includes(el) ? "active" : ""}`}
            onClick={() => {
              dateHandler(el);
            }}
          >
            <p className="dayString">
              {getDayName(`${selectedMonth}/${el}/${currentYear}`)}
            </p>
            <p className="dateString">{el < 10 ? `0${el}` : el}</p>
          </div>
          <div className="task">{renderCurrentWeekSchedule(el, "")}</div>
          <div className="task">{renderCurrentWeekSchedule(el, "meeting")}</div>
          <div className="task">
            {renderCurrentWeekSchedule(el, "Property Visit")}
          </div>
          <div className="task">
            {renderCurrentWeekSchedule(el, "Deal Close")}
          </div>
          <div className="task">
            {renderCurrentWeekSchedule(el, "Reminder")}
          </div>
          <div className="task">{renderCurrentWeekSchedule(el, "Task")}</div>
          <div className="task">{renderCurrentWeekSchedule(el, "Message")}</div>
          <div className="task">{renderCurrentWeekSchedule(el, "Email")}</div>
          <div className="task">
            {renderCurrentWeekSchedule(el, "Deal Close")}
          </div>
        </div>
      );
    });
  };
  const renderHeader = () => {
    return tasksList.map((el, i) => {
      return (
        <div key={i}>
          <span>{el}</span>
        </div>
      );
    });
  };
  const renderCurrentWeekSchedule = (el, text) => {
    return (
      <div className="inner">
        <strong>{el}</strong>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="list-section">
      <div className="header-section">
        <div className="section-year">{renderCurrentYear()}</div>
        <div className="render-tasks">
          <div>
            <span></span>
          </div>
          {renderHeader()}
        </div>
      </div>
      <div className="date-schedule-wrapper">
        <div className="section-week">{renderCurrentweek()}</div>
      </div>
    </div>
  );
};
export default PlannerComponent;
