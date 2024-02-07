// const TypeOfSport = prompt('Which sport do you prefer?');

// let champion;
// switch (TypeOfSport) {
//     case "Basketball":
//         champion = "Lebron James";
//         break;
//     case "Football":
//         champion = "Cristiano Ronaldo";
//         break;
//     case "Volleyball":
//         champion = "Antoine Brizard";
//         break;
//     default:
//         champion = "not defined";
// }

// alert(`Your favorite sport is ${TypeOfSport}\n "Cool! Do you want to be a ${champion}?`);

// const TypeOfSport = prompt('Which sport do you prefer?');

// if (TypeOfSport !== null) {
//     let champion;
//     switch (TypeOfSport) {
//         case "Basketball":
//             champion = "Lebron James";
//             break;
//         case "Football":
//             champion = "Cristiano Ronaldo";
//             break;
//         case "Volleyball":
//             champion = "Antoine Brizard";
//             break;
//         default:
//             champion = "not defined";
//     }

//     alert(`Your favorite sport is ${TypeOfSport}\n "Cool! Do you want to be a ${champion}?`);
// } else {
//     alert("Шкода, що ви не вибрали свій улюблений вид спорту.");
// }
const TypeOfSport = prompt('Which sport do you prefer?');

if (TypeOfSport !== null) {
    let champion;
    switch (TypeOfSport) {
        case "Basketball":
            champion = "Lebron James";
            break;
        case "Football":
            champion = "Cristiano Ronaldo";
            break;
        case "Volleyball":
            champion = "Antoine Brizard";
            break;
        default:
            champion = "champion of this sport";
    }

    alert(`Your favorite sport is ${TypeOfSport}\n "Cool! Do you want to be a ${champion}?`);
} else {
    alert("It is a pity that you did not choose your favorite sport.");
}
