function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("message");

  // Simulated database record
  const dbUser = "admin";
  const dbPass = "1234";

  // ❌ VULNERABLE LOGIC (simulating SQL behavior)
  if (
    user == dbUser && pass == dbPass ||
    user.includes("'") || pass.includes("'")
  ) {
    msg.style.color = "lime";
    msg.innerText = "Login successful!";
  } else {
    msg.style.color = "red";
    msg.innerText = "Wrong username or password";
  }
}
