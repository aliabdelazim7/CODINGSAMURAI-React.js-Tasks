# Counter App

A simple and elegant counter application built with React.js using functional components and hooks.

## Features

- ✅ Functional components only
- ✅ useState hook for state management
- ✅ Three buttons: Increment (+1), Decrement (-1), and Reset (0)
- ✅ Dynamic count display
- ✅ Prevents negative values (counter cannot go below 0)
- ✅ Clean, modern UI with gradient backgrounds
- ✅ Fully responsive design
- ✅ Centered layout
- ✅ Smooth animations and hover effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

## Usage

- Click the **+1** button to increment the counter
- Click the **-1** button to decrement the counter (disabled when count is 0)
- Click the **Reset** button to reset the counter to 0
- The counter cannot go below 0 (negative values are prevented)

## Technologies Used

- React.js 18.2.0
- CSS3 with modern features (gradients, animations, flexbox)
- Create React App

## Project Structure

```
src/
├── App.js          # Main counter component
├── App.css         # Styling for the counter app
├── index.js        # React app entry point
└── index.css       # Global styles
public/
└── index.html      # HTML template
```

## Features in Detail

### State Management

- Uses React's `useState` hook to manage the counter state
- State is updated through setter functions

### Validation

- Prevents counter from going below 0
- Decrement button is disabled when count is 0

### Responsive Design

- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly button sizes on mobile devices

### Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- High contrast colors for better visibility

## Customization

You can easily customize the app by modifying:

- Colors in `App.css`
- Button styles and animations
- Layout and spacing
- Font sizes and typography
