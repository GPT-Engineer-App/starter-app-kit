import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component
import Sidebar from "./components/Sidebar.jsx"; // Import the Sidebar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Flex>
        <Sidebar /> {/* Add the Sidebar component */}
        <Box flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
