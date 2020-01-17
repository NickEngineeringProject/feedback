const form = document.getElementById('feedbackForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const checkbox = document.querySelector('#check');

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
        }).then((res) => {
            return res.json().then((data) => {

                if (data.name === undefined)
                    data.name = 'true';
                if (data.email === undefined)
                    data.email = 'true';
                if (data.phone === undefined)
                    data.phone = 'true';
                if (data.check === undefined)
                    data.check = 'true';

                output.textContent = `
                    ${data.name}
                    ${data.email}
                    ${data.phone}
                    ${data.check}

                `;
            })
        }) 
    }
});