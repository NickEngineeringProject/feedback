const form = document.getElementById('feedbackForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const check = document.querySelector('#checker');

    if (name === '' || email === ''|| phone === '')
        output.textContent = 'Заполните пустные поля';
    else if (!check.checked)
        output.textContent = 'Подтвердите согласие на обработку персональных данных';
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
                    data.name = '';
                if (data.email === undefined)
                    data.email = '';
                if (data.phone === undefined)
                    data.phone = '';


                output.textContent = `
                    ${data.name}
                    ${data.email}
                    ${data.phone}

                `;
            })
        }) 
    }
});