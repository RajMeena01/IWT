document.getElementById('loginButton').addEventListener('click', function(){
    var password=document.getElementById('password').value;
    var username=document.getElementById('username').value;
    if(username==='' || password===''){
        alert('Please enter Password and Username');
    }
    else{
        alert('Login....');
    }
});


























































// document.getElementById('loginButton').addEventListener('click', function() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     if (username === '' || password === '') {
//       alert('Please fill in both the Name and Password fields.');
//     } else {
//       alert('Logging in...');
//     }
//   });