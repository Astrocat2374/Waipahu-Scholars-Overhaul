let submit = document.querySelector('#submit-button')
submit.addEventListener('click', function register(e){
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let gpaGoal = document.querySelector('#gpa').value
    console.log(email)
    console.log(password)
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            database.collection('users').doc(data.user.uid).set({gpa: gpaGoal}).then(()=> console.log('Client: ', gpaGoal))
            let userRef = database.collection('users').doc(data.user.uid)
            userRef.get().then(function(doc){
                if (doc.exists) {
                    console.log("Document Data: ", doc.data());
                } else {
                    console.log('Unregistered User!!')
                }
            })
        })
        .catch(err => {
            console.log(err.message);
        });
})