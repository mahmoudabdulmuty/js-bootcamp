const gradeCalc = (studentScore, total) => {
  const resultPercent = (studentScore / total) * 100;
  let grade = '';

  resultPercent >= 90
    ? (grade += 'A')
    : resultPercent >= 80
    ? (grade += 'B')
    : resultPercent >= 70
    ? (grade += 'C')
    : resultPercent >= 60
    ? (grade += 'D')
    : (grade += 'F');

  return `you've got a ${grade} (${resultPercent}%)!`;
};
const result = gradeCalc(2, 10);
console.log(result);
