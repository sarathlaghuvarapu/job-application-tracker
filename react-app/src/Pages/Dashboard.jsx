import StatCard from "../Components/StatCard";


function Dashboard() {

    return (
        <div className="page">

            <h1>Dashboard</h1>

            <p>
                Welcome to your Job Application Tracker.
            </p>


            <div className="stats">

                <StatCard
                    title="Total Applications"
                    value={10}
                />

                <StatCard
                    title="Interviews"
                    value={3}
                />

                <StatCard
                    title="Rejected"
                    value={4}
                />

                <StatCard
                    title="Selected"
                    value={1}
                />

            </div>

        </div>
    );
}

export default Dashboard;