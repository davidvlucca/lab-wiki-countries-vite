import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:countryId" element={<CountryDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
