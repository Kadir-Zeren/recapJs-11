const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
};

const brand = car.brand;
console.log(brand);

console.log(car["model"]);

const { brand: name, engine, colors } = car;
console.log(engine, colors, name);

const { model } = car;
console.log(model);

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
  car3: ["anadol", "togg", "devrim"],
  car4: "kagni",
};

let { car1, car2, car4, car3 } = cars;
console.log(car2, car4);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c2Name, c2Model);

const {
  car1: { nameCar1, modelCar1, engineCar1 },
  car2: { nameCar2, modelCar2, engineCar2 },
} = cars;

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((t) => {
  console.log("NAME", t.name);
  console.log("SURNAME", t.surname);
  console.log("JOB", t["job"]);
  console.log("AGE", t["age"]);
  console.log("********");
});

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("NAME", name);
  console.log("SURNAME", surname);
  console.log("JOB", job);
  console.log("AGE", age);
  console.log("********");
});

const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  };
};

let { pName, price, stock } = getProduct();
console.log("PRDUCT NAME:", pName, "PRICE:", price);

stock = stock - 100;
console.log("REMAINING STOCK", stock);

const data = {
  id: "123",
  pName: "NIKE",
  price: 300,
};

// const print = function (data) {
//   const { id, pName, price } = data;
//   console.log(pName, price);
// };

const print = function ({ pName, price }) {
  console.log(pName, price);
};

print(data);

const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

const ismet = names[2];
console.log(ismet);

const [ahmo, , ismo, safo] = names;

console.log(ahmo, ismo, safo);

const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"];

const [araba1, araba2, araba3, ...geriKalanlar] = araclar;
console.log(araba1);
console.log(geriKalanlar);

const kisi = {
  ad: "Canan",
  soyad: "Cano",
  yas: 33,
  meslek: "tester",
};

const { meslek, yas, ...isim } = kisi;

console.log(meslek, yas);
console.log(isim);
console.log(kisi);

const topla = (a, b) => a + b;
console.log("SONUC:", topla(2, 5, 10, 4));

const toplaminiAl = (...sayilar) => {
  console.log(sayilar);
  return sayilar.reduce((t, v) => t + v, 0);
};

console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8));

const ucanAraclar = ["drone", "heli", "ucak"];
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"];

const tasitlar = [ucanAraclar, karaAraclari];
console.log(tasitlar);
console.log(tasitlar[0][1]);

const tasitlar1 = [...ucanAraclar, "Kamyon", ...karaAraclari];
console.log(tasitlar1);

const cumle = "Olmak ya da olmamak";

const karakter = [...cumle];
console.log(karakter);
console.log(cumle);

console.log("MAX:", Math.max(1, 3, 4, -1, 4));
const rakamlar = [23, 45, 66, 77, 12, -1];

console.log("MIN:", Math.min(...rakamlar));

const myNumbers = [4, 5, 6, [11, 22]];
const herNumbers = [1, 2, 3, ...myNumbers];
const hisNumbers = [...herNumbers];

console.log(herNumbers, myNumbers);
console.log(hisNumbers);

hisNumbers.push(7);
myNumbers.push(77);

console.log("MY:", myNumbers);
console.log("HER:", herNumbers);
console.log("HIS:", hisNumbers);

myNumbers[3][1] = 44;

const theirNumbers = hisNumbers;

theirNumbers.push(8);
console.log(theirNumbers, hisNumbers);

const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: 2, d: 3, c: 4 };

const copiedFirstObj = { ...firstObj };
console.log(copiedFirstObj);

copiedFirstObj.a = 44;
console.log(copiedFirstObj, firstObj);

const combinedObjs = { ...firstObj, ...secondObj };
console.log(combinedObjs);

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: 1990,
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log("MAAS:", people.person3.salary);

for (let p in people) {
  // console.log(p);
  // console.log(people[p]);
  console.log(people[p].salary);
}

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let v of Object.values(people)) {
  console.log(v.job);
}
