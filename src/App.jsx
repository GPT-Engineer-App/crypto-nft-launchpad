import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MyNFTs from "./pages/MyNFTs.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/mynfts" element={<MyNFTs />} />
      </Routes>
    </Router>
  );
}

export default App;
