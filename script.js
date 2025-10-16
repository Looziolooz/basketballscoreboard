// Game state
const gameState = {
  homeScore: 0,
  guestScore: 0,
  period: 1
};

// DOM elements
const homeScoreElement = document.getElementById('count-home');
const guestScoreElement = document.getElementById('count-guest');
const periodElement = document.getElementById('period-count');
const scoreButtons = document.querySelectorAll('.btn-plus');
const resetButton = document.getElementById('reset-btn');
const prevPeriodButton = document.getElementById('prev-period');
const nextPeriodButton = document.getElementById('next-period');

// Initialize the scoreboard
function initScoreboard() {
  updateDisplay();
  setupEventListeners();
}

// Update the display with current scores and period
function updateDisplay() {
  homeScoreElement.textContent = gameState.homeScore;
  guestScoreElement.textContent = gameState.guestScore;
  periodElement.textContent = gameState.period;
  
  // Highlight the leading team
  highlightLeadingTeam();
}

// Highlight the team that is currently winning
function highlightLeadingTeam() {
  const homeTeam = document.querySelector('.home-team');
  const guestTeam = document.querySelector('.guest-team');
  
  // Remove previous highlights
  homeTeam.classList.remove('leading', 'tie');
  guestTeam.classList.remove('leading', 'tie');
  
  // Add appropriate highlight
  if (gameState.homeScore > gameState.guestScore) {
    homeTeam.classList.add('leading');
  } else if (gameState.guestScore > gameState.homeScore) {
    guestTeam.classList.add('leading');
  } else {
    homeTeam.classList.add('tie');
    guestTeam.classList.add('tie');
  }
}

// Add points to a team
function addPoints(team, points) {
  if (team === 'home') {
    gameState.homeScore += points;
  } else if (team === 'guest') {
    gameState.guestScore += points;
  }
  
  updateDisplay();
  
  // Play a sound effect for scoring
  playScoreSound();
}

// Reset the game
function resetGame() {
  gameState.homeScore = 0;
  gameState.guestScore = 0;
  gameState.period = 1;
  
  updateDisplay();
  
  // Play reset sound
  playResetSound();
}

// Change period
function changePeriod(direction) {
  if (direction === 'next' && gameState.period < 4) {
    gameState.period++;
  } else if (direction === 'prev' && gameState.period > 1) {
    gameState.period--;
  }
  
  updateDisplay();
}

// Play sound when score changes
function playScoreSound() {
  // In a real implementation, you would play an actual sound file
  console.log('Score sound effect');
}

// Play sound when game is reset
function playResetSound() {
  // In a real implementation, you would play an actual sound file
  console.log('Reset sound effect');
}

// Set up event listeners
function setupEventListeners() {
  // Score buttons
  scoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const team = this.getAttribute('data-team');
      const points = parseInt(this.getAttribute('data-points'));
      addPoints(team, points);
    });
  });
  
  // Reset button
  resetButton.addEventListener('click', resetGame);
  
  // Period buttons
  prevPeriodButton.addEventListener('click', () => changePeriod('prev'));
  nextPeriodButton.addEventListener('click', () => changePeriod('next'));
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(event) {
    // Home team shortcuts: 1, 2, 3
    if (event.key === '1') addPoints('home', 1);
    if (event.key === '2') addPoints('home', 2);
    if (event.key === '3') addPoints('home', 3);
    
    // Guest team shortcuts: 7, 8, 9
    if (event.key === '7') addPoints('guest', 1);
    if (event.key === '8') addPoints('guest', 2);
    if (event.key === '9') addPoints('guest', 3);
    
    // Reset shortcut: R
    if (event.key === 'r' || event.key === 'R') resetGame();
  });
}

// Initialize the scoreboard when the page loads
document.addEventListener('DOMContentLoaded', initScoreboard);