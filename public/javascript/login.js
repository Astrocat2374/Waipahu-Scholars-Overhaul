let submit = document.querySelector('#submit-button')
submit.addEventListener('click', function register(e){
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    auth
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            localStorage.setItem('user', data)
            console.log(data)
        })
})