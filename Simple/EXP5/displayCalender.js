function displayCalendar()
{
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let firstDay = new Date(year, month, 1).getDay();
    let totalDays = new Date(year, parseInt(month)+1, 0).getDate();

    let cal = "<table border='1'>";
    cal += "<tr>";
    cal += "<th>Sun</th><th>Mon</th><th>Tue</th>";
    cal += "<th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>";
    cal += "</tr><tr>";

    // empty spaces
    for(let i = 0; i < firstDay; i++)
        cal += "<td></td>";

    // dates
    for(let day = 1; day <= totalDays; day++)
    {
        cal += "<td>" + day + "</td>";

        if((firstDay + day) % 7 == 0)
            cal += "</tr><tr>";
    }

    cal += "</tr></table>";

    document.getElementById("calendar").innerHTML = cal;
}