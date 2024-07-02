document.addEventListener("DOMContentLoaded", (event) => {
  function updateDateTime() {
    const now = new Date();

    // MK current time in UTC
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    const currentTimeUTC = `${hours}h${minutes}m${seconds}s`;

    // MK current day of the week
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];

    // HTML elements
    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent =
      currentDay;
  }

  // Update date and time initially
  updateDateTime();

  // Update date and time every second
  setInterval(updateDateTime, 1000);
});
