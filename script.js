
let guestList = [];

fetch('guestlist.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1); // skip header
    rows.forEach(row => {
      const [table, name] = row.split(',');
      if (table && name) {
        guestList.push({ name: name.trim(), table: table.trim() });
      }
    });
  });

function updateDropdown() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = "";

  if (input.length === 0) return;

  const matches = guestList.filter(g => g.name.toLowerCase().startsWith(input));

  matches.forEach(g => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = g.name;
    item.onclick = () => {
      document.getElementById("nameInput").value = g.name;
      dropdown.innerHTML = "";
    };
    dropdown.appendChild(item);
  });
}

function findTable() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  const found = guestList.find(g => g.name.toLowerCase() === name);

  if (found) {
    result.textContent = `${found.name}, your table number is ${found.table}.`;
  } else {
    result.textContent = "Name not found. Please check spelling.";
  }
}
