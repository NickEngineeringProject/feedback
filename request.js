const form = document.getElementById('feedbackForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const name = document.querySelector('#name').value.trim();

    if (!phone.length === '' && !email.length === '' && !name.length === '') {

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
                output.textContent = data.name;
                output.textContent = data.phone;
                output.textContent = data.email;
            })
        })
    }
    // const data = new FormData(form);
    // postData(data);
});


// async function postData(data) {
//     const response = await fetch('response.php', {
//         method: 'POST',
//         body: JSON.stringify(formattedFormData)
//     });
//     const data = await response.json();
//     let output = document.getElementById('output');
//     output.textContent = data;
// }
// function postData(data) {
    // fetch('response.php', {
    //     method: 'POST',
    //     body: data
    // })
    // const response = await fetch('response.php', {
    //     method: 'POST',
    //     body: JSON.stringify(formattedFormData)
    // });
    // const data = await response.json();
    // let output = document.getElementById('output');
    // output.textContent = data;
// }