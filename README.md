# Basketball Scoreboard - README

## 🏀 About the Project

A modern, responsive basketball scoreboard web application that allows users to track scores for two teams during a basketball game. Features a clean interface with real-time score updates and period tracking.

### 🌐 Live Demo
**[View Live Application](https://basketball-scoreboard-looz.netlify.app/)**

### 📁 Repository
**[GitHub Repository](https://github.com/Looziolooz/basketballscoreboard)**

## ✨ Features

- **Real-time Score Tracking**: Track scores for HOME and GUEST teams
- **Multiple Point Increments**: Add +1, +2, or +3 points with single clicks
- **Period Management**: Track game periods with navigation controls
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Visual Feedback**: Leading team highlighting and smooth animations
- **Keyboard Shortcuts**: Quick score updates using keyboard keys
- **Game Reset**: One-click reset to start a new game
- **Modern UI**: Clean, basketball-themed interface with professional styling

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **JavaScript (ES6)**: Dynamic functionality and event handling
- **Google Fonts**: Cursed Timer ULiL for authentic score display
- **Netlify**: Deployment and hosting platform

## 🚀 How to Use

### Basic Scoring
1. Click the **+1**, **+2**, or **+3** buttons under each team to add points
2. The score will update instantly with visual feedback

### Period Control
- Use the **◀** and **▶** buttons to navigate between periods (1-4)
- Current period is displayed in the center

### Keyboard Shortcuts
- **1, 2, 3**: Add points to HOME team
- **7, 8, 9**: Add points to GUEST team  
- **R**: Reset the entire game

### Reset Game
- Click the **RESET GAME** button to clear all scores and reset to period 1

## 📁 Project Structure

```
basketballscoreboard/
│
├── index.html          # Main HTML file
├── index.css           # Styles and responsive design
├── index.js            # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Basketball Theme**: Dark blue gradient background resembling a basketball court
- **Authentic Score Display**: Cursed Timer ULiL font for authentic scoreboard numbers
- **Visual Hierarchy**: Clear team separation with centered period display
- **Hover Effects**: Interactive buttons with smooth transitions
- **Leading Team Highlight**: Visual indication of which team is currently winning
- **Mobile Responsive**: Adapts to different screen sizes seamlessly

## 🔧 Installation & Local Development

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Looziolooz/basketballscoreboard.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd basketballscoreboard
   ```

3. **Open the application**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Access the application**
   - Visit `http://localhost:8000` in your browser

## 🌟 Key JavaScript Features

- **Event Delegation**: Efficient button handling using data attributes
- **Game State Management**: Centralized object to track scores and period
- **Dynamic Updates**: Real-time DOM manipulation
- **Keyboard Events**: Shortcut support for quick scoring
- **Visual Feedback**: Team highlighting based on current score

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)  
- **Mobile** (320px - 767px)

## 🎯 Future Enhancements

Potential features for future versions:
- [ ] Sound effects for scoring and reset
- [ ] Game timer functionality
- [ ] Team name customization
- [ ] Score history and undo feature
- [ ] Multiple game sessions
- [ ] Export game statistics

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Looziolooz**
- GitHub: [@Looziolooz](https://github.com/Looziolooz)
- Project: [Basketball Scoreboard](https://github.com/Looziolooz/basketballscoreboard)

