const button = document.querySelector('#submit-button')
let email;
let password;
let question1;
let question2;

// This give you access to firebase database
const database = firebase.database();

button.addEventListener('click', function register(e) {
  e.preventDefault();
  email = document.querySelector('#email').value
  password = document.querySelector('#password').value
  question1 = document.querySelector('#gpa').value + 1;
  question2 = document.querySelector('#math').value + 1;
  question3 = document.querySelector('#science').value + 1;
  question4 = document.querySelector('#ss').value + 1;
  question5 = document.querySelector('#english').value + 1;

  // Allows you to create email & Password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      console.log(err.message);
    });

  // Allows you to access current user information
  var userId = firebase.auth().currentUser.uid;
  console.log('userId', userId);

  // Stores user information plus quiz information in database
  firebase.database().ref(`users/${userId}`).set({
    userId: userId,
    email: email,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    question5: question5
    //some more user data
  });

  localStorage.setItem('userid', userId)
  window.location.href = './goals.html';
})
