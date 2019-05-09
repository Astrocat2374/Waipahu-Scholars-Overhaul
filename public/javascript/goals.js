if (user) {
    let userRef = database.collection('users').doc(data.user.uid).collection('goals')
    userRef.get().then(function(doc){
        if (doc.exists) {
            console.log("Document Data: ", doc.data());
        } else {
            console.log('Document Not Found!')
        }
    })
} else {
    console.log('Idiot')
}

const body = document.querySelector('#cardZone')
const goalTemplate = `
    <div class = goalCard>
        <p> ${goalTitle} </p>
        <p> ${goal} <p>
    </div>
`

for (i = 0; i < userRef.length; i++) {
    let goalTitle = userRef.doc(string(i)).goalTitle;
    let goal = userRef.doc(string(i)).goal;
    body.appendChild(goalTemplate)
}