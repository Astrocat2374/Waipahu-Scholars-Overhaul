let submit = document.querySelector('#submit-button')
submit.addEventListener('click', function register(e){
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let gpaGoal = parseInt(document.querySelector('#gpa').value) + 1
    console.log(email)
    console.log(password)
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            database.collection('users').doc(data.user.uid).collection('goals').doc('1').set({goalTitle: 'GPA', goal: gpaGoal}).then(()=> console.log('Client: ', gpaGoal))
        })
        .catch(err => {
            console.log(err.message);
        });
})