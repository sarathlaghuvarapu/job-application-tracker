function Dashboard() {
    return (
        <div className="page">

            <h1>Dashboard</h1>

            <p>
                Welcome to your Job Application Tracker.
            </p>

            <div className="stats">

                <div className="card">
                    <h3>Total Applications</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Interviews</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Rejected</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Selected</h3>
                    <p>0</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;