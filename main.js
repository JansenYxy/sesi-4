let username = document.getElementById('username');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let admin = document.getElementById('admin');
let guru = document.getElementById('guru');
let tamukhusus = document.getElementById('tamukhusus');
let dosen = document.getElementById('dosen');
let investor = document.getElementById('investor');
let mahasiswa = document.getElementById('mahasiswa');
let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let formLogin = document.getElementById('formLogin');
let userbiasa = document.getElementById('userbiasa');

reset.style.display = 'none';
admin.style.display = 'none';
guru.style.display = 'none';
tamukhusus.style.display = 'none';
dosen.style.display = 'none';
investor.style.display = 'none';
mahasiswa.style.display = 'none';
userbiasa.style.display = 'none';

function onLogin() {
  localStorage.setItem('username  ', username.value);
  reset.style.display = 'block';

  if (username.value == 'admin' && password.value == 'admin123') {
    localStorage.setItem('role', 'admin');
    admin.style.display = 'block';
    guru.style.display = 'none';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'none';
    mahasiswa.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
    investor.style.display = 'none';
  } else if (username.value == 'guru' && password.value == 'guru123') {
    localStorage.setItem('role', 'guru');
    admin.style.display = 'none';
    guru.style.display = 'block';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'none';
    mahasiswa.style.display = 'none';
    investor.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
  } else if (username.value == 'tamukhusus' && password.value == 'tamukhusus123') {
    localStorage.setItem('role', 'tamuKhusus');
    admin.style.display = 'none';
    guru.style.display = 'none';
    tamukhusus.style.display = 'block';
    dosen.style.display = 'none';
    mahasiswa.style.display = 'none';
    investor.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
  } else if (username.value == 'dosen' && password.value == 'dosen123') {
    localStorage.setItem('role', 'dosen');
    admin.style.display = 'none';
    guru.style.display = 'none';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'block';
    mahasiswa.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
    investor.style.display = 'none';
  } else if ((username.value = 'investor' && password.value == 'investor123')) {
    localStorage.setItem('role', 'investor');
    admin.style.display = 'none';
    guru.style.display = 'none';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'none';
    investor.style.display = 'block';
    mahasiswa.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
  } else if (username.value == 'mahasiswa' && password.value == 'mahasiswa123') {
    localStorage.setItem('role', 'mahasiswa');
    admin.style.display = 'none';
    guru.style.display = 'none';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'none';
    mahasiswa.style.display = 'block';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
    investor.style.display = 'none';
  } else {
    alert('Login Sebagai USER BIASA😒🙏');
    localStorage.setItem('role', 'user biasa');
    userbiasa.style.display = 'none';
    reset.style.display = 'block';
    admin.style.display = 'none';
    guru.style.display = 'none';
    tamukhusus.style.display = 'none';
    dosen.style.display = 'none';
    mahasiswa.style.display = 'none';
    username.style.display = 'none';
    password.style.display = 'none';
    formLogin.style.display = 'none';
    submit.style.display = 'none';
    title1.style.display = 'none';
    title2.style.display = 'none';
    investor.style.display = 'none';
  }
}

// Script Logout Button
function onLogout() {
  localStorage.clear();
  location.reload();
}

if (localStorage.getItem('username')) {
  username.style.display = 'none';
  password.style.display = 'none';
  formLogin.style.display = 'none';
  submit.style.display = 'none';
  title1.style.display = 'none';
  title2.style.display = 'none';
}

// if (localStorage.getItem('username')) {
//   usernameInput.style.display = 'none';
//   passwordInput.style.display = 'none';
//   submit.style.display = 'none';
//   reset.style.display = 'block';

//   if (localStorage.getItem('role') == 'admin') {
//     admin.style.display = 'block';
//     guru.style.display = 'none';
//   } else {
//     guru.style.display = 'block';
//     admin.style.display = 'none';
//   }
// }

if (localStorage.getItem('role') == 'admin') {
  admin.style.display = 'block';
  userbiasa.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'none';
  investor.style.display = 'none';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'none';
} else if (localStorage.getItem('role') == 'guru') {
  admin.style.display = 'none';
  guru.style.display = 'block';
  dosen.style.display = 'none';
  investor.style.display = 'none';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'none';
} else if (localStorage.getItem('role') == 'dosen') {
  admin.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'block';
  investor.style.display = 'none';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'none';
} else if (localStorage.getItem('role') == 'investor') {
  admin.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'none';
  investor.style.display = 'block';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'none';
} else if (localStorage.getItem('role') == 'tamukhusus') {
  admin.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'none';
  investor.style.display = 'none';
  tamukhusus.style.display = 'block';
  mahasiswa.style.display = 'none';
} else if (localStorage.getItem('role') == 'mahasiswa') {
  admin.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'none';
  investor.style.display = 'none';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'block';
} else {
  admin.style.display = 'none';
  guru.style.display = 'none';
  dosen.style.display = 'none';
  investor.style.display = 'none';
  tamukhusus.style.display = 'none';
  mahasiswa.style.display = 'none';
}
