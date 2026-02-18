// Save and redirect
function generateAndRedirect() {
    let name = document.getElementById("stuName").value.trim();
    let roll = document.getElementById("stuRoll").value.trim();
    let dept = document.getElementById("stuDept").value.trim();

    if (name && roll && dept) {
        let student = { id: Date.now(), name, roll, dept };
        let students = JSON.parse(localStorage.getItem("allStudents") || "[]");
        students.push(student);
        localStorage.setItem("allStudents", JSON.stringify(students));
        
        // Success alert (Optional)
        alert("Profile Created Successfully!");
        window.location.href = "profile.html";
    } else {
        alert("Fill All The Required Details!");
    }
}

// Display profiles
function displayProfiles() {
    let container = document.getElementById("profileContainer");
    let students = JSON.parse(localStorage.getItem("allStudents") || "[]");

    if (students.length === 0) {
        container.innerHTML = "<h2 style='color:#1a0461;'>No Profiles Found!</h2>";
        return;
    }

    container.innerHTML = students.map((s, index) => `
        <div class="profile-card">
            <div class="avatar">👤</div>
            <h3>${s.name}</h3>
            <p><strong>Roll No:</strong> ${s.roll}</p>
            <p><strong>Dept:</strong> ${s.dept}</p>
            <button class="delete-btn" onclick="deleteProfile(${index})">Delete Profile</button>
        </div>
    `).join('');
}

// Delete profile
function deleteProfile(index) {
    if(confirm("Kandippa delete panna poringala?")) {
        let students = JSON.parse(localStorage.getItem("allStudents") || "[]");
        students.splice(index, 1);
        localStorage.setItem("allStudents", JSON.stringify(students));
        displayProfiles();
    }

}
