import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoLayout from "./components/layouts/FoLayouts";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FoLayout>
              <Home />
            </FoLayout>
          }
        />
        <Route path="/authentication" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
