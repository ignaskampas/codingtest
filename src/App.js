import "./App.css";
import Home from "./components/Home/Home";
import PersonDetails from "./components/PersonDetails/PersonDetails";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/personDetails/:id/"
                        element={<PersonDetails />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
