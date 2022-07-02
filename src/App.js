import "./App.css";
import Table from "./components/Table/Table";
import PersonDetails from "./components/PersonDetails/PersonDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Table />} />
                    <Route
                        path="/personDetails/:id/"
                        element={<PersonDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
