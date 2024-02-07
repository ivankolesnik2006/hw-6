const birthYearInput = prompt("Enter your birth year:");
const residenceCityInput = prompt("Enter the city where you live:");
const preferredSportInput = prompt("Enter your favorite sport:");

if (birthYearInput !== null && residenceCityInput !== null && preferredSportInput !== null) {
    const birthYear = parseInt(birthYearInput);
    const residenceCity = residenceCityInput;
    const preferredSport = preferredSportInput;

    const currentYear = 2024;
    const age = currentYear - birthYear;

    let cityMessage;
    switch (residenceCity) {
        case "Kiyv":
        case "Washington":
        case "London":
            let country;
            switch (residenceCity) {
                case "Kiyv":
                    country = "Ukraine";
                    break;
                case "Washington":
                    country = "USA";
                    break;
                case "London":
                    country = "Great Britain";
                    break;
            }
            cityMessage = `You live in the capital of ${country}.`;
            break;
        default:
            cityMessage = `You live in the city of ${residenceCity}.`;
    }

    alert(`Your age: ${age}\n${cityMessage}\nYour favorite sport is ${preferredSport}.`);
} else {
    let missingInfoMessage = "Sorry, you did not provide the following information:";
    if (birthYearInput === null) missingInfoMessage += "\n- Birth year";
    if (residenceCityInput === null) missingInfoMessage += "\n- City of residence";
    if (preferredSportInput === null) missingInfoMessage += "\n- Favorite sport";
    alert(missingInfoMessage);
}
