const database = firebase.database();
let submit = document.querySelector('#submit-button')
submit.addEventListener('click', function register(e){
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
    var userId = firebase.auth().currentUser.uid;
    console.log('userId', userId);
    localStorage.setItem('userid', userId)
    window.location.href = './goals.html';
})