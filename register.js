/*-----------supabase-----------*/
const form = document.getElementById("registerForm");
const submitButton = form.querySelector("button");
const supabase = window.hynaSupabase;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!supabase) {
    alert("Supabase connection not found. Please check supabase.js.");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Registering...";

  try {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    const college = document.getElementById("college").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = document.getElementById("year").value;
    const studentId = document.getElementById("studentId").value.trim();

    const experienceLevel = document.getElementById("experienceLevel").value;
    const programmingLanguages = document.getElementById("programmingLanguages").value.trim();
    const about = document.getElementById("about").value.trim();

    const linkedin = document.getElementById("linkedin").value.trim();
    const github = document.getElementById("github").value.trim();
    const portfolio = document.getElementById("portfolio").value.trim();

    const agreed = document.getElementById("agree").checked;
    const skills = Array.from(document.querySelectorAll(".skillCheck:checked")).map(
      (skill) => skill.value
    );

    let profilePhotoURL = "";
    let resumeURL = "";

    const profilePhoto = document.getElementById("photo").files[0];
    if (profilePhoto) {
      const photoName = `${Date.now()}_${profilePhoto.name}`;
      const { error: photoError } = await supabase.storage
        .from("profile-photo")
        .upload(photoName, profilePhoto);

      if (photoError) throw photoError;

      profilePhotoURL = supabase.storage
        .from("profile-photo")
        .getPublicUrl(photoName).data.publicUrl;
    }

    const resume = document.getElementById("resume").files[0];
    if (resume) {
      const resumeName = `${Date.now()}_${resume.name}`;
      const { error: resumeError } = await supabase.storage
        .from("student-resume")
        .upload(resumeName, resume);

      if (resumeError) throw resumeError;

      resumeURL = supabase.storage
        .from("student-resume")
        .getPublicUrl(resumeName).data.publicUrl;
    }

    const { data, error } = await supabase
  .from("student_registrations")
  .insert([
    {
      full_name: fullName,
      email: email,
      phone: phone,
      dob: dob || null,
      gender: gender,
      college_name: college,
      department: department,
      year_of_study: year,
      student_id: studentId,
      skills: skills,
      experience_level: experienceLevel,
      programming_languages: programmingLanguages,
      about: about,
      linkedin: linkedin,
      github: github,
      portfolio: portfolio,
      profile_photo: profilePhotoURL,
      resume: resumeURL,
      agreed: agreed,
    },
  ])
  .select();

console.log("DATA:", data);
console.log("ERROR:", error);

if (error) {
  console.error(error);
  alert(error.message);
}

    if (error) throw error;

    const modalOverlay = document.getElementById("successModal");
    const detailsContainer = document.getElementById("registrationDetails");

    const detailItems = [
      { label: "Full Name", value: fullName },
      { label: "Email", value: email },
      { label: "Phone Number", value: phone },
      { label: "Date of Birth", value: dob || "Not provided" },
      { label: "Gender", value: gender },
      { label: "College Name", value: college },
      { label: "Department", value: department || "Not provided" },
      { label: "Year of Study", value: year },
      { label: "Student ID", value: studentId || "Not provided" },
      { label: "Technical Skills", value: skills.length ? skills.join(", ") : "None selected" },
      { label: "Experience Level", value: experienceLevel },
      { label: "Programming Languages", value: programmingLanguages || "Not provided" },
      { label: "Why join HYNA?", value: about || "Not provided", full: true },
      { label: "LinkedIn", value: linkedin || "Not provided" },
      { label: "GitHub", value: github || "Not provided" },
      { label: "Portfolio", value: portfolio || "Not provided" },
    ];

    detailsContainer.innerHTML = detailItems
      .map(
        (item) => `
      <div class="detail-row ${item.full ? "full" : ""}">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
      </div>`
      )
      .join("");

    modalOverlay.classList.add("active");

    form.reset();
  } catch (error) {
    alert(error.message || "Registration failed. Please try again.");
   } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Become a HYNA Learner →";
  }
});

document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("successModal").classList.remove("active");
});

document.getElementById("viewAnotherBtn").addEventListener("click", () => {
  document.getElementById("successModal").classList.remove("active");
});

document.getElementById("successModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove("active");
  }
});
