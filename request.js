const form = document.getElementById('feedbackForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (name === '' || email === ''|| phone === '')
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
                    ${data.email}
                    ${data.phone}

                `;
            })
        }) 
    }    
});