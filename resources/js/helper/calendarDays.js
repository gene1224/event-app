const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default (event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    const d = new Date();
    const currentMonth = d.getMonth();
    const currentYear = d.getFullYear();
    let date = new Date(currentYear, currentMonth, 1);
    let days = [];
    while (date.getMonth() === currentMonth) {
        if (
            date.getDate() >= from.getDate() &&
            date.getDate() <= to.getDate() &&
            event.days.includes(date.getUTCDay().toString())
        ) {
            days.push({
                date: `${date.getDate()} ${daysOfTheWeek[date.getUTCDay()]}`,
                event: event.name,
            });
        } else {
            days.push({
                date: `${date.getDate()} ${daysOfTheWeek[date.getUTCDay()]}`,
            });
        }
        date.setDate(date.getDate() + 1);
    }
    return days;
};
