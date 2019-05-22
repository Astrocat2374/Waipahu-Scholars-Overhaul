var goal;
var goalTitle;
var userRef;
const body = document.querySelector('#cardZone')
const database = firebase.database();
const userId = localStorage.getItem('userid');
console.log('userId', userId);
var data = firebase.database().ref('users/' + userId );
data.on('value', function(snapshot) {
    let goal1 = snapshot.val().question1
    let goal2 = snapshot.val().question2
    let goal3 = snapshot.val().question3
    let goal4 = snapshot.val().question4
    let goal5 = snapshot.val().question5
    let goalTemplate = `
    <div class = goalCard>
        <p>Achieve this GPA this Quarter:</p>
        <p> ${goal1} <p>
    </div>
    <div class = goalCard>
        <p>Get this grade in Math this Quarter:</p>
        <p> ${goal2} <p>
    </div>
    <div class = goalCard>
        <p>Get this grade in Science this Quarter:</p>
        <p> ${goal3} <p>
    </div>
    <div class = goalCard>
        <p>Get this grade in Social Studies this Quarter:</p>
        <p> ${goal4} <p>
    </div>
    <div class = goalCard>
        <p>Get this grade in English this Quarter:</p>
        <p> ${goal5} <p>
    </div>
    `
    body.innerHTML = goalTemplate
});

const logoutButton = document.querySelector('#logout-button')
logoutButton.addEventListener('click'), function logout() {
    auth.signOut()
    location.replace('index.html')
}



