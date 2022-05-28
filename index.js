// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const color = new Map();
color.set("Monica", ["Yellow", "Pink", "White", "Purple"]);
color.set("Wendy", ["Blue", "Black", "Grey"]);

const favoriteRestaurantMonica = new Set();
favoriteRestaurantMonica.add("Bento");
favoriteRestaurantMonica.add("Sushi");
favoriteRestaurantMonica.add("Pancake");
favoriteRestaurantMonica.add("Eggy");
favoriteRestaurantMonica.add("Tempura");

const favoriteRestaurantWendy = new Set();
favoriteRestaurantWendy.add("Tempura");
favoriteRestaurantWendy.add("Bento");
favoriteRestaurantWendy.add("Sushi");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Padang");
favoriteRestaurantWendy.add("Katsu");
favoriteRestaurantWendy.add("Geprek");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Eggy");

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: () => color.get(this.name),
  isHavePet: false,
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: favoriteRestaurantMonica,
};

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: () => color.get(this.name),
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: favoriteRestaurantWendy,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
