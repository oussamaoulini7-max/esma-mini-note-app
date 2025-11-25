// login page (starts)

const loginform = document.getElementById("Loginform");

if (loginform) {

    loginform.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

       
        fetch("./api/login.php", {
            method: "POST",
            body: formData
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === "ok") {
                window.location.href = "notes.html";
            } else {
                alert("Email ou mot de passe incorrect");
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            alert("Erreur serveur. Réessayez plus tard.");
        });
    });
}

// login page (ends)


// notes page (starts)

const studentName = document.getElementById("StudentName");
const MathGrade = document.getElementById("MathGrade");
const CSGrade = document.getElementById("CSGrade");

const resultBtn = document.getElementById("resultBtn");
const cancelBtn = document.getElementById("CancelBtn");

if (resultBtn) {
    resultBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("student", studentName.value);
        formData.append("math", MathGrade.value);
        formData.append("cs", CSGrade.value);

       
        fetch("./api/notes.php", {
            method: "POST",
            body: formData
        })
        .then(r => r.json())
        .then(data => {
            
            sessionStorage.setItem("StudentName", data.student);
            sessionStorage.setItem("FinalGrade", data.final_grade);

            window.location.href = "result.html";
        })
        .catch(err => {
            console.error("Note error:", err);
            alert("Erreur serveur. Réessayez plus tard.");
        });
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login.html";
    });
}

// notes page (ends)



// result page (starts)

window.addEventListener("load", function () {

    const title = document.getElementById("title");
    const grade = document.getElementById("finalGrade");
    const infoTxt = document.getElementById("informTxt");

    if (!title || !grade || !infoTxt) return; // Not on result page

    const studentNAME = sessionStorage.getItem("StudentName");
    const FinalGRADE = sessionStorage.getItem("FinalGrade");

    const nameToShow = studentNAME || "Étudiant";
    const gradeToShow = parseFloat(FinalGRADE) || 0;

    title.textContent = "Bienvenue " + nameToShow;
    grade.textContent = gradeToShow.toFixed(2);

    if (gradeToShow >= 10) {
        grade.style.color = "green";
        infoTxt.textContent = "Félicitations ! Vous êtes admis.";
        infoTxt.style.color = "green";
    } else {
        grade.style.color = "red";
        infoTxt.textContent = "Malheureusement, votre admission n'a pas été retenue.";
        infoTxt.style.color = "red";
    }
});

// result page (ends)