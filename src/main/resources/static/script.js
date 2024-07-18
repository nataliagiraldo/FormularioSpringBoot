document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let user = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      profession: document.getElementById('profession').value
    };
  
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('userFirstName').textContent = data.firstName;
      document.getElementById('userLastName').textContent = data.lastName;
      document.getElementById('userProfession').textContent = data.profession;
      document.getElementById('userData').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
  });
  