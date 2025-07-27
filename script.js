let guestList = {};

fetch('guestlist.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    rows.forEach(row => {
      const [name, table] = row.split(',');
      if (name && table) {
        guestList[name.trim()] = table.trim();
      }
    });
  });

function findTable() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  const found = Object.keys(guestList).find(
    key => key.toLowerCase() === name
  );

  if (found) {
    result.textContent = `${found}, your table number is ${guestList[found]}.`;
  } else {
    result.textContent = "Name not found. Please check spelling.";
  }
}