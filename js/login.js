const token = localStorage.getItem('token');
if(token) {
    window.location = '/day9/index.html'
}
document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = {};
  form.forEach((item, key) => {
    data[key] = item;
  });
  if(data['userName'] == 'cuong' && data['password'] == '1234') {
    localStorage.setItem('token' , 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    window.location = '/day9/index.html'
  }else {
    alert("Đăng nhập sai thông tin");
  }
});
