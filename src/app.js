//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
    return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
    var manager = createManager(
        managerName,
        managerAge,
        currentTeam,
        trophiesWon
    );
} catch (e) {
    // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
    // let x = [5, 2, 3]
    // x.length = 0

    return formation.length == 0 ? null : { defender: formation[0], midfield: formation[1], forward: formation[2] }
}
// Dont edit the following code

try {
    var formationObject = createFormation(formation);
} catch (e) {
    //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
    return players.filter((player) => player.debut == year)
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
    return players.filter((player) => player.position == position)
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
    // return players.filter((player) => player.awards.map((award) => award.name == awardName))

    // console.log(players.filter((player) => player.awards.map((award) => award.name) == awardName));
    // return players.filter((player) => player.awards.map((award) => award.name) == awardName)
    let obj = players.filter((player) => player.awards.map((award) => award.name).includes(awardName));
    if (awardName == null) return []
    if (obj.length == 0) return []
    return obj;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
    if (awardName == null || noOfTimes == null) return []
    let obj = players.filter((player) => player.awards.map((award) => award.name).includes(awardName));
    if (obj.length == 0) return []
    return obj;

}
//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order