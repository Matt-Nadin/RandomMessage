const messages = ['squeaky Bum Time','business end of the season','relegation looming','off the woodwork'];
const team = ['Watford','Leicester','Newcastle United','Nottingham Forest','Blyth Spartans'];
const person = ['their fans','the manager','the owner','the entire club'];

const messageGenerator = () => {
    let random1 = Math.floor(Math.random() * messages.length);
    let random2 = Math.floor(Math.random() * team.length);
    let random3 = Math.floor(Math.random() * person.length);
    console.log("It's " + messages[random1] + " for " + team[random2] + " and " + person[random3]);
    
}


messageGenerator();