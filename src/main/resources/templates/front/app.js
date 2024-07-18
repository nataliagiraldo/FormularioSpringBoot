document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío normal del formulario

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        profession: document.getElementById('profession').value,
    };

    fetch('/user/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultFirstName').textContent = data.firstName || 'No proporcionado';
        document.getElementById('resultLastName').textContent = data.lastName || 'No proporcionado';
        document.getElementById('resultProfession').textContent = data.profession || 'No proporcionado';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos.');
    });
});
