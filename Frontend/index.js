let gpa = 0.0;
const GPA = document.getElementById("Total");
const Greet = document.getElementById("greet");
document.getElementById("handleform").addEventListener("submit", (e) => {
  e.preventDefault();
  GPA.innerHTML = "";
  Greet.innerHTML = "";
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  const num3 = document.getElementById("number3").value;
  const num4 = document.getElementById("number4").value;
  const num5 = document.getElementById("number5").value;
  const num6 = document.getElementById("number6").value;

  function calculateGPA(score) {
    switch (true) {
      case score >= 90:
        return 4.0;
      case score >= 85 && score <= 89:
        return 4.0;
      case score >= 80 && score <= 84:
        return 3.8;
      case score >= 75 && score <= 79:
        return 3.4;
      case score >= 71 && score <= 74:
        return 3.0;
      case score >= 68 && score <= 70:
        return 2.8;
      case score >= 64 && score <= 67:
        return 2.4;
      case score >= 61 && score <= 63:
        return 2.0;
      case score >= 57 && score <= 60:
        return 1.8;
      case score >= 53 && score <= 56:
        return 1.4;
      case score >= 50 && score <= 52:
        return 1.0;
      case score < 50:
        return 0.0;
      default:
        return 0.0;
    }
  }
  const gpa1 = calculateGPA(num1);
  const gpa2 = calculateGPA(num2);
  const gpa3 = calculateGPA(num3);
  const gpa4 = calculateGPA(num4);
  const gpa5 = calculateGPA(num5);
  const gpa6 = calculateGPA(num6);

  const averageGPA = ((gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6) / 6).toFixed(3);
  function greet(averageGPA) {
    switch (true) {
      case averageGPA >= 3.5:
        return "Fantastic champ";
      case averageGPA >= 3 && averageGPA <= 3.4:
        return "Keep it up champ";
      case averageGPA > 2.5 && averageGPA <= 3:
        return "Average";
      case averageGPA > 2 && averageGPA <= 2.4:
        return "Below Average";
      default:
        return "your Gpa is very Low";
    }
  }
  console.log(`Average GPA: ${averageGPA}`);
  console.log(`${greet(averageGPA)}`);

  GPA.innerHTML += `your Gpa is ${averageGPA}`;
  Greet.innerHTML += greet(averageGPA);
});
