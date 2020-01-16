const form = document.getElementById('feedbackForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const name = document.querySelector('#name').value.trim();

    if (name === '' || phone === '' || email === '')
        output.textContent = 'Заполните пустные поля';
    else {
        fetch('response.php', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone
            })
        })

            .then((res) => {
            return res.json().then((data) => {
                output.textContent = `
                    ${data.name}
                    ${data.phone}
                    ${data.email}

                `;
            })
        }) 
    }    
});