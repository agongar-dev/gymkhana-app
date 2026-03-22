# Treasure Hunt App

Originally built in 2020 as an interactive treasure hunt game, this project was later revisited and refactored to improve code quality and apply better React practices. It represents my early exploration of component-based architecture, state management, and dynamic rendering.

---

## Demo
(real images has been replaced with a placeholder icon)
https://agongar-dev.github.io/gincana-app/

---

## Features

- Multi-step treasure hunt experience
- Sequential unlocking of hints
- Dynamic rendering based on data
- Password-based final challenge (lock system)
- Routing with React Router
- Interactive UI with feedback popups
- Controlled inputs and improved state handling

---

## Tech Stack

- React 18
- React Router v6
- JavaScript (ES6+)
- HTML5 / CSS3
- Create React App

---

## Application Flow

The application simulates a treasure hunt experience that was thought to play in a combination of a physical gymkhana with virtual hints:

1. User starts from the landing screen
2. Navigates to the overview of hints
3. Hints are unlocked progressively
4. Each hint requires solving a challenge
5. After all hints are solved, a final lock challenge appears
6. User must enter the correct combination to complete the game

---

## Architecture Overview

The application follows a simple component-based architecture:

- Routing handled via `react-router-dom`
- Local state managed using React hooks (`useState`)
- Data-driven UI using structured hint objects
- Conditional rendering based on progression

Key concepts implemented:

- Component composition
- State lifting via props
- Conditional UI rendering
- Controlled inputs (lock/password system)

---

## Project Structure

```bash
public/
├── img/                      # Images and static resources
src/
├── components/
│   ├── CongratsPopup.jsx     # Feedback and final challenge UI
│   ├── Hint.jsx              # Hint item logic and interaction
│   └── LockPassword.jsx      # Password input system (if used)
│
├── routes/
│   ├── Overview.jsx          # Main hints overview screen
│   └── HintStage.jsx         # Individual hint view
│
├── data/
│   └── hints.js              # Hint definitions and data
│
├── css/                      # Styling per feature
│
├── Storage.js                # Local storage abstraction
├── App.jsx                   # Main app + routing
└── index.js
```

## Key Implementation Details

### Routing

Routing is handled using React Router v6:

- / → entry screen
- /overview → main hint list
- /hint-stage → active hint view

### State Management

- State is managed locally using React's `useState` hook
- State lifting used to update parent components
- No global state management

No global state management is used, keeping the architecture simple and focused on a basic experience.

---

### Dynamic Hint System

Hints are defined as structured objects:

- UniqueID
- Image
- Unlock status
- Solved status
- Answer

UI updates dynamically based on the state of the hints.

---

### Final Challenge

The final challenge is a password-based lock system that requires the user to enter the correct combination to complete the game.

The password is stored in a structured object, with each item containing:

- UniqueID
- Color
- Password key

The user inputs the correct combination by entering the corresponding password key for each item in the correct order.

---

## Installation & Setup
```bash
# Clone repository
git clone https://github.com/your-username/gincana-app

# Install dependencies
npm install

# Run development server
npm start

# Run tests (setup included)
npm test

# Build for production
npm run build

```

---

## Limitations

- No global state management (Context / Redux)
- No backend (data stored locally)
- No automated tests implemented
- Business logic still partially coupled with UI
- Not designed for scalability

---

## Future Improvements

- Introduce Context API or state manager
- Add unit and integration tests
- Decouple business logic from components
- Introduce TypeScript
- Add persistence layer (API or localStorage)
- Improve routing (dynamic routes)
- Support internationalization (i18n)

---

## License

[ ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

## Author

Antonio González García
Full-stack developer
Java - Spring Boot - React - Angular

GitHub: https://github.com/agongar-dev
LinkedIn: https://www.linkedin.com/in/antonio-gonzález-garcía/