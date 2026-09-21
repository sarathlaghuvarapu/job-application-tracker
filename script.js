// --------------------------------------
// Initial Data
// --------------------------------------

let applications = JSON.parse(
    localStorage.getItem("applications")
) || [
    {
        id: 1,
        company: "ABC Technologies",
        role: "Frontend Developer",
        location: "Hyderabad",
        appliedDate: "2026-09-21",
        status: "Applied",
        salary: 800000,
        jobUrl: "https://example.com",
        notes: "Applied through company website"
    }
];


// --------------------------------------
// DOM Elements
// --------------------------------------

const applicationForm = document.getElementById("applicationForm");

const applicationId = document.getElementById("applicationId");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const locationInput = document.getElementById("location");
const appliedDateInput = document.getElementById("appliedDate");
const statusInput = document.getElementById("status");
const salaryInput = document.getElementById("salary");
const jobUrlInput = document.getElementById("jobUrl");
const notesInput = document.getElementById("notes");

const tableBody = document.getElementById("applicationTableBody");
const emptyMessage = document.getElementById("emptyMessage");

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");

const formTitle = document.getElementById("formTitle");
const cancelButton = document.getElementById("cancelButton");

const totalApplications = document.getElementById("totalApplications");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const selectedCount = document.getElementById("selectedCount");


// --------------------------------------
// Save Data
// --------------------------------------

function saveToLocalStorage() {

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );
}


// --------------------------------------
// Render Applications
// --------------------------------------

function renderApplications() {

    const searchText = searchInput.value.toLowerCase();

    const selectedStatus = statusFilter.value;


    const filteredApplications = applications.filter(function (application) {

        const matchesSearch =
            application.company
                .toLowerCase()
                .includes(searchText);


        const matchesStatus =
            selectedStatus === "all" ||
            application.status === selectedStatus;


        return matchesSearch && matchesStatus;
    });


    tableBody.innerHTML = "";


    if (filteredApplications.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }


    filteredApplications.forEach(function (application) {

        const row = document.createElement("tr");


        row.innerHTML = `
            <td>${application.company}</td>

            <td>${application.role}</td>

            <td>${application.location || "-"}</td>

            <td>${application.appliedDate}</td>

            <td>
                <span class="status">
                    ${application.status}
                </span>
            </td>

            <td>

                <button
                    class="action-button"
                    onclick="editApplication(${application.id})"
                >
                    Edit
                </button>

                <button
                    class="action-button"
                    onclick="deleteApplication(${application.id})"
                >
                    Delete
                </button>

            </td>
        `;


        tableBody.appendChild(row);
    }


    updateDashboard();
}


// --------------------------------------
// Dashboard
// --------------------------------------

function updateDashboard() {

    totalApplications.textContent = applications.length;


    interviewCount.textContent =
        applications.filter(function (application) {

            return application.status === "Interview";

        }).length;


    rejectedCount.textContent =
        applications.filter(function (application) {

            return application.status === "Rejected";

        }).length;


    selectedCount.textContent =
        applications.filter(function (application) {

            return application.status === "Selected";

        }).length;
}


// --------------------------------------
// Add / Update Application
// --------------------------------------

applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const id = applicationId.value;


    const applicationData = {

        company: companyInput.value.trim(),

        role: roleInput.value.trim(),

        location: locationInput.value.trim(),

        appliedDate: appliedDateInput.value,

        status: statusInput.value,

        salary: Number(salaryInput.value),

        jobUrl: jobUrlInput.value.trim(),

        notes: notesInput.value.trim()
    };


    if (id) {

        const applicationIndex =
            applications.findIndex(function (application) {

                return application.id === Number(id);

            });


        if (applicationIndex !== -1) {

            applications[applicationIndex] = {

                id: Number(id),

                ...applicationData
            };
        }


        formTitle.textContent = "Add Application";

        cancelButton.classList.add("hidden");

    } else {

        const newApplication = {

            id: Date.now(),

            ...applicationData
        };


        applications.push(newApplication);
    }


    saveToLocalStorage();

    renderApplications();

    applicationForm.reset();

    applicationId.value = "";
});


// --------------------------------------
// Edit Application
// --------------------------------------

function editApplication(id) {

    const application = applications.find(function (application) {

        return application.id === id;

    });


    if (!application) {
        return;
    }


    applicationId.value = application.id;

    companyInput.value = application.company;

    roleInput.value = application.role;

    locationInput.value = application.location;

    appliedDateInput.value = application.appliedDate;

    statusInput.value = application.status;

    salaryInput.value = application.salary;

    jobUrlInput.value = application.jobUrl;

    notesInput.value = application.notes;


    formTitle.textContent = "Edit Application";

    cancelButton.classList.remove("hidden");


    document
        .getElementById("add-application")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// --------------------------------------
// Delete Application
// --------------------------------------

function deleteApplication(id) {

    const confirmed = confirm(
        "Are you sure you want to delete this application?"
    );


    if (!confirmed) {
        return;
    }


    applications = applications.filter(function (application) {

        return application.id !== id;

    });


    saveToLocalStorage();

    renderApplications();
}


// --------------------------------------
// Cancel Edit
// --------------------------------------

cancelButton.addEventListener("click", function () {

    applicationForm.reset();

    applicationId.value = "";

    formTitle.textContent = "Add Application";

    cancelButton.classList.add("hidden");
});


// --------------------------------------
// Search
// --------------------------------------

searchInput.addEventListener("input", function () {

    renderApplications();
});


// --------------------------------------
// Filter
// --------------------------------------

statusFilter.addEventListener("change", function () {

    renderApplications();
});


// --------------------------------------
// Initial Render
// --------------------------------------

renderApplications();