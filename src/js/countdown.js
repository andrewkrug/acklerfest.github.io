// Countdown to December 12, 2026 at 4:00 PM PST
const eventDate = new Date('2026-12-12T16:00:00-08:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // If countdown is finished, show the final message and stop.
  // Must happen before the DOM updates below: the countdown element's
  // children are replaced here, so getElementById('days') etc. are null
  // on subsequent ticks and would throw a TypeError every second.
  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<h3>The party has started!</h3>";
    clearInterval(timer);
    return;
  }

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
}

// Update countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
