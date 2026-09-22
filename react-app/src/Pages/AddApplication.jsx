function AddApplication() {
    return (
        <div className="page">

            <h1>Add Application</h1>

            <form className="application-form">

                <label htmlFor="company">
                    Company Name
                </label>

                <input
                    id="company"
                    type="text"
                    placeholder="Enter company name"
                />


                <label htmlFor="role">
                    Job Role
                </label>

                <input
                    id="role"
                    type="text"
                    placeholder="Enter job role"
                />


                <label htmlFor="location">
                    Location
                </label>

                <input
                    id="location"
                    type="text"
                    placeholder="Enter location"
                />


                <label htmlFor="date">
                    Applied Date
                </label>

                <input
                    id="date"
                    type="date"
                />


                <label htmlFor="status">
                    Status
                </label>

                <select id="status">

                    <option value="Applied">
                        Applied
                    </option>

                    <option value="Interview">
                        Interview
                    </option>

                    <option value="Rejected">
                        Rejected
                    </option>

                    <option value="Selected">
                        Selected
                    </option>

                </select>


                <button type="submit">
                    Save Application
                </button>

            </form>

        </div>
    );
}

export default AddApplication;