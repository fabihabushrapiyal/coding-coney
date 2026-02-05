// Buttons Interactions
const bookmarkBtn = document.querySelector('.bookmark-btn');
const followBtn = document.querySelector('.follow-btn');

// Bookmark Button
bookmarkBtn.addEventListener('click', () => {
  // Toggle 'saved' class
  bookmarkBtn.classList.toggle('saved');

  const icon = bookmarkBtn.querySelector('i');

  // Update icon
  if (bookmarkBtn.classList.contains('saved')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
  } else {
    icon.classList.add('fa-regular');
    icon.classList.remove('fa-solid');
  }
});

// Follow Button
followBtn.addEventListener('click', () => {
  // Toggle 'following' class
  followBtn.classList.toggle('following');

  // Update button text
  followBtn.classList.contains('following')
    ? (followBtn.textContent = 'Following')
    : (followBtn.textContent = 'Follow');
});

// Initialize Counters on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');

  // Initialize each counter
  counters.forEach((counter) => {
    let count = 0;
    const target = counter.dataset.target;
    const increment = Math.ceil(target / 115);

    // Initialize the interval
    const interval = setInterval(() => {
      count += increment;

      // Stop the interval
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }

      counter.textContent = count;
    }, 60);
  });
});
