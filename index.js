let myArray = ["cokelat",42.5, 22, true, "programming"];
console.log(myArray);

console.log(myArray[1]);


const names = ["andi", "budi", "charlie"]
names.push("dhani")
names.push("echa", "gia",)
names.pop()
names.shift();
names.unshift("apple")
console.table(names)
names.splice(2, 1);  // menghapus dari index 2 sebanyak 1 elemen
console.log(names)
//console.info(names.length)



const favorites = ["seafood", "salad", "nugget","soup"];
const others = ["cake", "pie", "donut"];
const allFavorites = [favorites, others];
console.log(allFavorites);


const user = {
    firstName: "nurazizah",
    lastName : "zahra cantik",
    age: 19,
    isJedi: true,

};

console.log(`halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`umur saya ${user.age} tahun`);


const profile = {
    firstName: "nurazizah",
    lastName: "zahra",
    age:19,
    
}
/*let firstName = "yayang";
let age = 28;
// menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile);
console.log(firstName);
console.log(age);*/




