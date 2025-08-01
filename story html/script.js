// Optional: Simple admin-only check (NOT secure, just for fun)
const adminMode = false; // set to true if you're editing

if (adminMode) {
  const addBtn = document.createElement('button');
  addBtn.textContent = "➕ Add New Story";
  addBtn.style = "position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background: #00c6ff; color: white; border: none; border-radius: 8px; cursor: pointer;";
  document.body.appendChild(addBtn);

  addBtn.addEventListener('click', () => {
    alert("This would open the editor (in real version).");
    // You can add logic to open a form or redirect to /admin
  });
}
