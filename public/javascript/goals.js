var goal;
var goalTitle;
var userRef;
const body = document.querySelector('#cardZone')
const database = firebase.database();
const userId = localStorage.getItem('userid');
console.log('userId', userId);
var data = firebase.database().ref('users/' + userId );
data.on('value', function(snapshot) {
    let goalTitle = snapshot.val().question1
    let goal = snapshot.val().question1
    console.log('goalTitle', goalTitle);
    console.log('goal', goal);
    console.log('snapshot', snapshot.val());
    let goalTemplate = `
    <div class = goalCard>
        <p> ${goalTitle} </p>
        <p> ${goal} <p>
    </div>
    `
    body.innerHTML = goalTemplate
});

const logoutButton = document.querySelector('#logout-button')
logoutButton.addEventListener('click'), function logout() {
    auth.signOut()
    location.replace('index.html')
}



