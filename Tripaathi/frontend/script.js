document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const number = document.getElementById("number").value.trim();

  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, number })
  });

  const result = await response.json();
  document.getElementById("message").textContent = result.message;
  document.getElementById("message").style.color = response.ok ? "green" : "red";
});
