// ===== Upload Photos link config =====
const UPLOAD_URL = "https://haoyuandu96.github.io/wedding-uploads/"; // <-- set this to your upload page URL
document.addEventListener("DOMContentLoaded", () => {
  const upLink = document.getElementById("upload-link");
  if (upLink && UPLOAD_URL && UPLOAD_URL !== "YOUR_UPLOAD_SITE_URL_HERE") {
    upLink.href = UPLOAD_URL;
  }
});
// =====================================
let guestList = [];

fetch('guestlist.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
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

  const matches = guestList.filter(g => g.name.toLowerCase().includes(input));

  matches.forEach(g => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = g.name;
    item.onclick = () => {
      document.getElementById("nameInput").value = g.name;
      dropdown.innerHTML = "";
      document.getElementById("result").innerHTML =
        `<div class="result-box">
          <strong>${g.name}</strong><br>
          You're seated at<br>
          <strong>Table ${g.table}</strong><br>
          <em>Our happily ever after wouldn’t be the same without you! 🎉</em>
        </div>`;
      document.getElementById("gift-card").style.display = "block";
        document.getElementById("upload-card").style.display = "block";
    };
    dropdown.appendChild(item);
  });
}