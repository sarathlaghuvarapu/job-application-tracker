import { useState } from "react";


function AddApplication() {

    const [company, setCompany] = useState("");

    const [role, setRole] = useState("");

    const [location, setLocation] = useState("");

    const [status, setStatus] = useState("Applied");


    function handleSubmit(event) {

        event.preventDefault();

        console.log({
            company,
            role,
            location,
            status
        });
    }


    return (
        <div className="page">

            <h1>Add Application</h1>


            <form
                className="application-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="company">
                    Company Name
                </label>

                <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(event) =>
                        setCompany(event.target.value)
                    }
                    placeholder="Enter company name"
                />


                <label htmlFor="role">
                    Job Role
                </label>

                <input
                    id="role"
                    type="text"
                    value={role}
                    onChange={(event) =>
                        setRole(event.target.value)
                    }
                    placeholder="Enter job role"
                />


                <label htmlFor="location">
                    Location
                </label>

                <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(event) =>
                        setLocation(event.target.value)
                    }
                    placeholder="Enter location"
                />


                <label htmlFor="status">
                    Status
                </label>

                <select
                    id="status"
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value)
                    }
                >

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