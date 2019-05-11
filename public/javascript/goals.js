var goal;
var goalTitle;
var userRef;
const body = document.querySelector('#cardZone')
const goalTemplate = `
    <div class = goalCard>
        <p> ${goalTitle} </p>
        <p> ${goal} <p>
    </div>
`



function login() {
    let userid = localStorage.getItem('userid')
    console.log(userid)
    if (userid) {
        for (i = 1; i < 10; i++) {
            console.log(i)
            let goalTitle = database.collection('users').doc(userid).collection('goals').doc(String(i)).goalTitle;
            let goal = database.collection('users').doc(userid).collection('goals').doc(String(i)).goal;
            body.innerHTML = goalTemplate
        }
    } else {
        console.log('No user data')
    }
}

login()



