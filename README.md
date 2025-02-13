# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect without specifying dependencies.

## Bug Description
The `useEffect` hook with an empty dependency array runs after every render.  If the effect attempts to update state, it triggers a re-render, leading to a continuous loop that freezes the browser.  This is because the empty dependency array makes useEffect behave like `componentDidMount` which causes the state to be updated infinitely.

## Solution
The solution involves correctly specifying dependencies for the effect.  By including `count` in the dependency array, the effect runs only when `count` changes (naturally, in response to user interaction). This prevents the infinite loop.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the infinite render loop in the console and the browser freezing up.

## How to fix
1. Clone this repository.
2. Run `npm install`.
3. View the solution in `bugSolution.js`.
4. Run `npm start`. Observe the correct functionality with no performance issues.