// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Form
const form = document.getElementById("registerForm");

// Modal
const modal = document.getElementById("successModal");
const details = document.getElementById("registrationDetails");
const closeBtn = document.getElementById("modalClose");
const anotherBtn = document.getElementById("viewAnotherBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get Selected Skills
    const skills = [...document.querySelectorAll(".skillCheck:checked")]
        .map(skill => skill.value)
        .join(", ");

    // Collect Data
    const data = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,

        college: document.getElementById("college").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        studentId: document.getElementById("studentId").value,

        skills: skills,

        experienceLevel: document.getElementById("experienceLevel").value,
        programmingLanguages: document.getElementById("programmingLanguages").value,

        about: document.getElementById("about").value,

        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        portfolio: document.getElementById("portfolio").value
    };

    try {

        // Send Email
        await emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            data
        );

        // Show Details in Modal
        details.innerHTML = `
            <div class="detail-row">
                <div class="label">Full Name</div>
                <div class="value">${data.fullName}</div>
            </div>

            <div class="detail-row">
                <div class="label">Email</div>
                <div class="value">${data.email}</div>
            </div>

            <div class="detail-row">
                <div class="label">Phone</div>
                <div class="value">${data.phone}</div>
            </div>

            <div class="detail-row">
                <div class="label">Date of Birth</div>
                <div class="value">${data.dob}</div>
            </div>

            <div class="detail-row">
                <div class="label">Gender</div>
                <div class="value">${data.gender}</div>
            </div>

            <div class="detail-row">
                <div class="label">College</div>
                <div class="value">${data.college}</div>
            </div>

            <div class="detail-row">
                <div class="label">Department</div>
                <div class="value">${data.department}</div>
            </div>

            <div class="detail-row">
                <div class="label">Year</div>
                <div class="value">${data.year}</div>
            </div>

            <div class="detail-row">
                <div class="label">Student ID</div>
                <div class="value">${data.studentId}</div>
            </div>

            <div class="detail-row">
                <div class="label">Skills</div>
                <div class="value">${data.skills}</div>
            </div>

            <div class="detail-row">
                <div class="label">Experience</div>
                <div class="value">${data.experienceLevel}</div>
            </div>

            <div class="detail-row">
                <div class="label">Programming Languages</div>
                <div class="value">${data.programmingLanguages}</div>
            </div>

            <div class="detail-row full">
                <div class="label">Why Join HYNA</div>
                <div class="value">${data.about}</div>
            </div>

            <div class="detail-row">
                <div class="label">LinkedIn</div>
                <div class="value">${data.linkedin}</div>
            </div>

            <div class="detail-row">
                <div class="label">GitHub</div>
                <div class="value">${data.github}</div>
            </div>

            <div class="detail-row">
                <div class="label">Portfolio</div>
                <div class="value">${data.portfolio}</div>
            </div>
        `;

        modal.classList.add("active");

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Unable to send registration.");
    }
});

// Close Modal
closeBtn.onclick = () => {
    modal.classList.remove("active");
};

anotherBtn.onclick = () => {
    modal.classList.remove("active");
};

window.onclick = function(e){
    if(e.target === modal){
        modal.classList.remove("active");
    }
}