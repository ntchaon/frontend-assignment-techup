// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getData() {
  //   var newUser = [];
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  var newUser = users.map((el) => el.name);
  console.log(newUser);
  var longName = newUser.filter((el) => el.length >= 17);
  console.log(longName);
}
getData();
