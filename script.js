document.getElementById('bmi-form').addEventListener('submit', function(e) {
  e.preventDefault(); // don’t reload the page

  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  // Convert height to meters
  const heightM = heightCm / 100;

  // BMI formula
  const bmi = weight / (heightM * heightM);

  // Determine category
  let category;
  if (bmi < 18.5)         category = 'Underweight';
  else if (bmi < 25)      category = 'Normal weight';
  else if (bmi < 30)      category = 'Overweight';
  else                     category = 'Obesity';

  // Display result
  document.getElementById('result').textContent =
    `Your BMI is ${bmi.toFixed(1)} (${category})`;
});
