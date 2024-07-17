

    function loginUser(login) {
        login.preventDefault()
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const storedEmail = 'user@gmail.com';
        const storedPassword = 'user';

        if (email === storedEmail && password === storedPassword) {
            document.getElementById('message').innerText = 'login sucessful';
            
            window.location.href = 'index.html';        
            
        } else {
            document.getElementById('message').innerText = 'Invalid email or password';
        }
    }
