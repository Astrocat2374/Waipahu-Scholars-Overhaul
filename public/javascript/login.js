let submit = document.querySelector('#submit-button')
submit.addEventListener('click', function register(e){
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    console.log(email)
    console.log(password)
    auth
        .signInWithEmailAndPassword(email, password)
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            let userRef = database.collection('users').doc(user.uid)
            userRef.get().then(function(doc){
                if (doc.exists) {
                    console.log("Document Data: ", doc.data());
                } else {
                    console.log('Unregistered User!!')
                }
            })
            } else {
                console.log('Idiot')
            }
        })
})