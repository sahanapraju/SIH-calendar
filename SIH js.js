const calendarContainer = document.getElementById("calendar-container");
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

for (let month = 0; month < 12; month++) {
  const monthName = new Date(currentYear, month).toLocaleString('default', { month: 'long' });
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";
  monthDiv.innerHTML = `<h2>${monthName}</h2>`;

  for (const [name, details] of Object.entries(festivals)) {
    const festivalDate = new Date(`${details.date}, ${currentYear}`);
    if (festivalDate.getMonth() === month) {
      const festDiv = document.createElement("div");
      festDiv.className = "festival";
      festDiv.innerHTML = `<strong>${name}</strong> (${details.date}): ${details.description}`;
      monthDiv.appendChild(festDiv);
    }
  }

  calendarContainer.appendChild(monthDiv);
}