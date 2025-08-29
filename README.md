Here’s a **clean, polished rewrite** of your README with proper formatting, one-line dependency installation, and corrected sections:

```markdown
# JWT Decoder

**Live Demo:** [https://spontaneous-alfajores-c3584c.netlify.app/](https://spontaneous-alfajores-c3584c.netlify.app/)

A simple React application to **decode JSON Web Tokens (JWT)** and display their payload in a readable format.  
Additionally, the app **detects and displays the user’s location** including IP, city, state/province, country, and country flag.  
This tool is useful for developers who want to inspect JWTs and understand user location for debugging or testing purposes.

---

## Features
- Decode JWT tokens instantly  
- View **Header**, **Payload**, and **Signature** separately  
- Fetch and display user **location details** (IP, city, state, country, flag)  
- Clean UI built with React and React Icons  
- Fully client-side; no backend required  


---

## Tech Stack
- **React** – Frontend framework  
- **JWT-Decode** – Library for decoding JWT  
- **React Icons** – For UI icons  
- **Sass** – Styling  
- **React Scripts** – Build and start scripts  

---

## Project Structure
```

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/jwt-decoder.git
cd jwt-decoder
````

### 2. Install dependencies

```bash
npm install react@^19.1.1 react-dom@^19.1.1 react-scripts@5.0.1 jwt-decode@^4.0.0 react-icons@^5.5.0 web-vitals@^2.1.4 @testing-library/dom@^10.4.1 @testing-library/jest-dom@^6.8.0 @testing-library/react@^16.3.0 @testing-library/user-event@^13.5.0 sass@^1.91.0
```

### 3. Start the development server

```bash
npm start
```

The app will run on **[http://localhost:3000](http://localhost:3000)** by default.

---

## Usage

1. Enter a valid JWT in the input field.
2. Click **Decode**.
3. View the decoded **Header**, **Payload**, and **Signature**.

---

## License
Any one is free is to use as they wish.
