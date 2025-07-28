const nums = [1,2,3,4,5];
const square = nums.map((num)=>{
    return num**2;
})

// console.log(nums);
// console.log(square);

const names = ['alice', 'bob', 'charlie', 'danielle']
const c_names = names.map((name)=>{
    return name[0].toUpperCase() + name.slice(1);
}) 

// console.log(names);
// console.log(c_names);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const html_pokemon = pokemon.map(mon=>`<p>${mon}</p>`)

console.log(html_pokemon)