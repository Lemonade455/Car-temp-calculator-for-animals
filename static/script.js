function calculateTemp() {
  let temperature = document.getElementById('temp').value;
  let timeOption = document.getElementById('time').value;
  let time = timeOption === 'custom' ? document.getElementById('customTime').value : timeOption;
  if (!time || time <= 0) {
    alert("Ange en giltig tid i minuter.");
    return;
  }
  let sunlight = document.getElementById('sun').value;
  let windowsOpen = document.getElementById('windowsOpen').checked;

  fetch('/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ temperature, time, sunlight, windowsOpen })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('result').innerText = `Beräknad temperatur i bilen: ${data.car_temp} °C`;
    })
    .catch(() => {
      document.getElementById('result').innerText = 'Fel vid beräkning, försök igen.';
    });
}

document.getElementById('time').addEventListener('change', (e) => {
  document.getElementById('customTime').style.display = e.target.value === 'custom' ? 'block' : 'none';
});