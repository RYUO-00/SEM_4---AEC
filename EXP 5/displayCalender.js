function displayCalendar() {
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    var calendar = "<table border='1'><tr>";
    calendar += "<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    for (var i = 0; i < firstDay; i++) {
        calendar += "<td></td>";
    }

    for (var day = 1; day <= daysInMonth; day++) {
        calendar += "<td>" + day + "</td>";

        if ((firstDay + day) % 7 === 0 && day !== daysInMonth) {
            calendar += "</tr><tr>";
        }
    }

    calendar += "</tr></table>";

    document.getElementById("calendar").innerHTML = calendar;
}