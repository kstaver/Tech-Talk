async function signupFormHandlers(event){
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySecletor('#github-signup').value.trim();

    if (username && email && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                twitter,
                github,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok){
            console.log('success');
            document.location.replace('dashboard');
        }else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandlers);