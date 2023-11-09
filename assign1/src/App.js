import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/index.js"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
