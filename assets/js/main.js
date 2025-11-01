/* login js start */

const loginform = document.getElementById("Loginform");

if (loginform) {
    loginform.addEventListener("submit", function (e) {
        e.preventDefault(); 
        window.location.href = "notes.html";
    });
}

/* login js end */



/* notes js start */

const studentName = document.getElementById("StudentName");
const MathGrade = document.getElementById("MathGrade");
const CSGrade = document.getElementById("CSGrade");

const resultBtn = document.getElementById("resultBtn");
const cancelBtn = document.getElementById("CancelBtn");

if (resultBtn) {
    resultBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const cs = parseFloat(CSGrade.value);
        const math = parseFloat(MathGrade.value);
        const FinalGrade = ((cs + math) / 2).toFixed(2);

        sessionStorage.setItem("StudentName", studentName.value);
        sessionStorage.setItem('FinalGrade', FinalGrade);

        window.location.href = "result.html";

    })
}

if (cancelBtn) {
    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login.html";
    })
}

/* notes js end */



/* result js start */


window.addEventListener("load", function () {
    const studentNAME = sessionStorage.getItem("StudentName");
    const FinalGRADE = sessionStorage.getItem("FinalGrade");

    const title = document.getElementById("title");
    const grade = document.getElementById("finalGrade");
    const infoTxt = document.getElementById("informTxt");

    const nameToShow = studentNAME || "AHMEDI MOUNIR";
    const gradeToShow = parseFloat(FinalGRADE) || 8.00;

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

})

/* result js end */
