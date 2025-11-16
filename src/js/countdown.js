// Countdown to December 14, 2025 at 4:00 PM PST
const eventDate = new Date('2025-12-14T16:00:00-08:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // If countdown is finished
  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<h3>The party has started!</h3>";
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
