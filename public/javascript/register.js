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
            database.collection('users').doc(data.user.uid).collection('goals').doc('gpa').set({gpaGoal: gpaGoal}).then(()=> console.log('Client: ', gpaGoal))
            let userRef = database.collection('users').doc(data.user.uid).collection('goals')
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