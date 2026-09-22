import { Routes, Route, Navigate } from "react-router";

import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Applications from "./Pages/Applications";
import AddApplication from "./Pages/AddApplication";


function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/applications"
                    element={<Applications />}
                />

                <Route
                    path="/add-application"
                    element={<AddApplication />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </>
    );
}

export default App;