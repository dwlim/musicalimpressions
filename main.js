var singers = [
		"Michael McDonald",
		"Stevie Nickie",
		"Eddie Vedder",
		"Iggy Azalea",
		"Neil Young",
		"Michael Jackson",
		"Taylor Swift",
		"Frank Sinatra",
		"Paul McCartney",
		"David Bowie",
		"Ella Fitzgerald",
		"Bette Midler",
		"Bob Dylan",
		"Whitney Houston",
		"Mariah Carey",
		"Tina Turner",
		"Aaron Neville",
		"Christina Aguilera",
		"Louis Armstrong",
		"Sting",
		"Britney Spears",
		"Barbary Streisand",
		"Janis Jeplin",
		"Adele",
		"Cher",
		"Shakira",
		"Alanis Morissette",
		"Stevie Wonder",
		"Mick Jagger",
		"Barry Gibb",
		"John Legend",
		"Bruce Springsteen",
		"Jennifer Hudson",
		"Celine Dion",
		"Ariana Grande",
		"Adam Levine"
	];
var songs = [
		"Itsy Bitsy Spider",
		"Golden Girls Theme",
		"Friends Theme",
		"Don't Stop Believing",
		"The Muffin Man",
		"Livin A Prayer",
		"Folgers Coffee Jingle",
		"My Way",
		"Old McDonald Had a Farm",
		"The Wheels on the Bus",
		"Sesame Street Theme",
		"Happy Birthday",
		"Stay With Me",
		"Uptown Funk",
		"Take Me to Church",
		"Rude",
		"Turn Down for What",
		"All I Do is Win",
		"Head Shoulders Knees and Toes",
		"Cheerleader",
		"Can't Feel My Face",
		"Hakuna Matata",
		"I Love You, You Love Me",
		"Toys R Us Jingle",
		"America's Funniest Home Videos Theme",
		"On Top of Spaghetti",
		"Mary Had a Little Lamb"
	];
function roll(){
	var randomNumber1 = Math.floor(Math.random() * singers.length);
	var randomNumber2 = Math.floor(Math.random() * songs.length);
	var chosenSinger = singers[randomNumber1];
	var chosenSong = songs[randomNumber2];
	document.getElementById("singer").innerHTML = chosenSinger.bold();
	document.getElementById("song").innerHTML = chosenSong.bold();
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function displayFile(){
	//usage:
	readTextFile("data.json", function(text){
	    var data = JSON.parse(text);
	    console.log(data);
	});
}