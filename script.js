document.getElementById('marksForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const english = parseFloat(document.getElementById('english').value);
  const math = parseFloat(document.getElementById('math').value);
  const physics = parseFloat(document.getElementById('physics').value);
  const chemistry = parseFloat(document.getElementById('chemistry').value);
  const cs = parseFloat(document.getElementById('cs').value);

  const marks = [math, physics, chemistry, cs];

  const resultEl = document.getElementById('result');

  if ([english, ...marks].some(m => isNaN(m) || m < 0 || m > 100)) {
    resultEl.innerText = 'Please enter valid marks (0–100) for all subjects.';
    resultEl.style.color = 'red';
    return;
  }

  // Get best 3 of 4
  marks.sort((a, b) => b - a);
  const bestThreeSum = marks[0] + marks[1] + marks[2];
  const total = english + bestThreeSum;
  const percentage = (total / 400) * 100;

  resultEl.innerText = `Percentage: ${percentage.toFixed(2)}%`;
  resultEl.style.color = '#222';
});