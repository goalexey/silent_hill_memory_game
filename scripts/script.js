// CLASSES
class Character{
	constructor(fname, lname, imgLink, bigImgLink){
		this.fname = fname;
		this.lname = lname
		this.imgLink = imgLink;
		this.bigImgLink = bigImgLink
	}
}

// OBJECTS
// humans
let harry = new Character("Harry", "Mason", "images/harry.mason_400.jpg", "");
let cybil = new Character("Cybil", "Mason", "images/cybil_400.jpg", "");
let cheryl = new Character("Cheryl", "Bennett", "images/cheryl_400.jpg", "");
let kaufman = new Character("Michael", "Kaufman", "images/kaufman_400.jpg", "");
let james = new Character("James", "Sunderland", "images/james_sunderland_400.jpg", "");
let maria = new Character("Maria", "", "images/maria_400.jpg", "");
let laura = new Character("Laura", "Mason", "images/laura_400.jpg", "");
let heather = new Character("Heather", "Mason", "images/heather.mason_400.jpg", "");
let douglas = new Character("Douglas", "Cartland", "images/douglas.cartland_400.jpg", "");
let henry = new Character("Henry", "Townshend", "images/henry.townshend_400.jpg", "");
let eileen = new Character("Eileen", "Galvin", "images/eileen.galvin_400.jpg", "");
let vincent = new Character("Vincent", "Smith", "images/vincent_400.jpg", "");
let elle = new Character("Elle", "Holloway", "images/elle.holloway_400.jpg", "");
let jodie = new Character("Jodie", "Mason", "images/jodie.mason_400.jpg", "");
let mira = new Character("Mira", "", "images/mira_400.jpg", "");
let travis = new Character("Travis", "", "images/travis_400.jpg", "");
let angela = new Character("Angela", "Orosco", "images/angela.orosco_400.jpg", "");

// monsters
let pyramid = new Character("Pyramid Head", "", "images/monster_pyramidhead_400.jpg", "");
let monocleman = new Character("Monocleman", "", "images/monocleman_400.png", "images/monocleman.png");
let mumbler = new Character("Mumbler", "", "images/monster_mumbler_400.jpg", "images/monster_mumbler.png");
let nurse = new Character("Nurse", "", "images/monster_nurse_400.jpg", "images/nurse.png");
let bottom = new Character("Bottom", "", "images/bottom_400.png", "images/bottom.png");
let wheelman = new Character("Wheelman", "", "images/wheelman_400.jpg", "images/wheelman.png");
let needler = new Character("Needler", "", "images/needler_400.jpg", "images/needler.png");
let missionary = new Character("Missionary", "", "images/missionary_400.jpg", "");



// VARIABLES
// pages, videos, and images
let instructions = document.querySelector('#instructions');
let lightbox = document.querySelector('#lightbox');
let titlePage = document.querySelector('.title-container');
let gamePage = document.querySelector('.game-page-container');
let pyramidPage = document.querySelector('#pyramid-page-container');
let pyramidvideo = document.querySelector('#pyramid-video');
let missionaryPage = document.querySelector('#missionary-page-container');
let missionaryvideo = document.querySelector('#missionary-video');
let plusEndingPage = document.querySelector('#plus-end-page');
let plusEndVid = document.querySelector('#plus-end-vid');
let boxes = document.querySelectorAll('.box-img');
let barImgs = document.querySelectorAll('.bar-img');
let barImgPlace = 0;
let timergap = 4000;
let timerPage = document.querySelector('#timer-page');
let redsquare = "images/redsquare.png";
let shemblem = "images/shemblem_400.jpg";
let startBtn = document.querySelector('#start');
let monst = document.querySelector('#monster-img');
let monstCont = document.querySelector('#mon-fixed-cont');
let monstPage = document.querySelector('#mon-page-cont');
let gopage = document.querySelector('#game-over-page');
let gomessage = document.querySelector('#go-message');
let winpage = document.querySelector('#win-page');
let wintext = document.querySelector('#win-text');
let m = document.querySelector('#m');
let diffdiv = document.querySelector('#difficulties');
let diffreg = document.querySelector('#reg-dif');
let diffhard = document.querySelector('#hard-dif');
	//audio
let mmonster01 = document.querySelector('#mmonster01');
let mmonster02 = document.querySelector('#mmonster02');
let mmonster03 = document.querySelector('#mmonster03');
let mbacktitle01 = document.querySelector('#mbacktitle01');
let mbacktitle02 = document.querySelector('#mbacktitle02');
let mbg01 = document.querySelector('#mbg01');
let mbg02 = document.querySelector('#mbg02');
let mbg03 = document.querySelector('#mbg03');
let mintro01 = document.querySelector('#mintro01');
let mintro02 = document.querySelector('#mintro02');
let mintro03 = document.querySelector('#mintro03');
let mwin = document.querySelector('#mwin');
let charselect = document.querySelector('#charselect');
let diffselect = document.querySelector('#diffselect');
let charreveal = document.querySelector('#charreveal');
let beat = document.querySelector('#beat');
	// for a function
let stop = false;


// ARRAYS
let background = ['images/shbackground02.jpg','images/shbackground03.jpg','images/shbackground04.jpg'];
let monstBackground = ['images/sh_hallway01.jpg', 'images/sh_hallway02.jpg', 'images/sh_hallway03.jpg', 'images/sh_hallway04.jpg'];
let characters = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen, 
pyramid, monocleman, mumbler, nurse, bottom];
let humans = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen];
let savedCharacters = [];
let monsterM = [mmonster01, mmonster02, mmonster03];
let backtitleM = [mbacktitle01, mbacktitle02];
let bgM = [mbg01, mbg02, mbg03];
let introM = [mintro01, mintro02, mintro03];

// VARIABLES depended on Arrays
let rdmMonsterM;
let rdmBgM;
let rdmIntroM;
let rdmBacktitleM;


// FUNCTIONS

// selects rules for regular difficulty
function regDifficulty(){
	diffreg.style['background-color'] = 'rgba(0,0,0,.7)';
	diffhard.style['background-color'] = '';
	humans = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen];
	characters = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen, 
	pyramid, monocleman, mumbler, nurse, bottom];
	gamePage = document.querySelector('.game-page-container');
	boxes = document.querySelectorAll('.box-img');
	barImgs = document.querySelectorAll('.bar-img');
	diffselect.play();
	diffselect.currentTime = 0;
	
}

// selects rules for hard difficulty
function hardDifficulty(){
	diffhard.style['background-color'] = 'rgba(0,0,0,.7)';
	diffreg.style['background-color'] = '';
	humans = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen, vincent, 
	elle, jodie, mira, travis, angela];
	characters = [harry, cybil, cheryl, kaufman, james, maria, laura, heather, douglas, henry, eileen, 
	vincent, elle, jodie, mira, travis, angela, pyramid, monocleman, mumbler, nurse, bottom, wheelman, needler, missionary];
	gamePage = document.querySelector('.game-page-h-container');
	boxes = document.querySelectorAll('.box-img-h');
	barImgs = document.querySelectorAll('.bar-img-h');
	diffselect.play();
	diffselect.currentTime = 0;
}

function timerExec(){
	beat.play();
	beat.currentTime = 0;
	timerPage.style.opacity = '1';
	setTimeout(function(){
		timerPage.style.opacity = '0';
	}, 200);
}

function timer(){
	setTimeout(function(){
		timerExec();
		console.log(timergap);
		timergap -= 250;
		if (stop === true){
			return;
		}
		else if(timergap > 0 ){
			timer();
		}
		else {
			pyramidEnding();
			endMessage(pyramid);
		}
	}, timergap)
}

function timerStop(){
	stop = true;
	timerPage.style.display = 'none';
}


// automatically play title page music on page load
function playIntro(){
	rdmIntroM = rdmArrEl(introM);
	rdmIntroM.play();
	rdmIntroM.loop = true;
}
playIntro();

// randomly picks an index of an array
function rdmArrEl(array){
	let index = Math.round(Math.random() * (array.length - 1));
	return array[index];
}

// shows a page with parameter of a particular page
function showPage(p){
	p.style.opacity = '1';
	p.style['pointer-events'] = 'auto';
}

// hides a page with parameter of a particular page
function hidePage(p){
	p.style.opacity = '0';
	p.style['pointer-events'] = 'none';
}

function lightboxShow(){
	lightbox.style.opacity = '1';
	titlePage.style['pointer-events'] = 'none';
	lightbox.style['pointer-events'] = 'auto';
	charreveal.play();
	charreveal.currentTime = 0;
}

function lightboxHide(){
	lightbox.style['pointer-events'] = 'none';
	lightbox.style.opacity = '0';
	titlePage.style['pointer-events'] = 'auto';
}

// resets to title page, sets new music, and clears all variables
function reset(){
	let i, j;
	//sets first bar imgs target to 0 index
	barImgPlace = 0;
	//sets bar imgs opacity to 0
	for(i = 0; i < barImgs.length; i++){
		barImgs[i].style.opacity = 0;	
	}
	//sets boxes imgs source to redsquares
	for(j = 0; j < boxes.length; j++){
		boxes[j].src = redsquare;
	}
	//clears the array of saved characters
	savedCharacters = [];
	gamePage.style.display = 'block';
	// set gamepage background music to beginning
	rdmBgM.currentTime = 0;
	// reset timergap to 4 seconds for timer function
	timerPage.style.display = 'block';
}

//randomizes new music for the title page
function playNewIntro(){
	rdmBacktitleM = rdmArrEl(backtitleM);
	rdmBacktitleM.play();
	rdmBacktitleM.loop = true;
}

//shows particular monster and performs functions for its page if it's chosen
function monsterShow(monstType){
	//randomizes monster page background
	let rdmHallwayBgm = rdmArrEl(monstBackground);
	//randomizes monster page music 
	rdmMonsterM = rdmArrEl(monsterM);
	rdmMonsterM.play();
	//fades in image of the monster
	monstCont.style['animation-name'] = 'fadeIn';
	//sets chosen monster's image
	monst.src = monstType.bigImgLink;
	//gives monst img twitch effect
	monst.style['animation-name'] = 'twitch';
	//sets monster page background
	monstPage.style.background = `url(${rdmHallwayBgm}) no-repeat center center fixed`;
}

// starts the game and brings you to the game screen
function gameStart(){
	//randomizes background music
	rdmBgM = rdmArrEl(bgM);
	//randomizes background image
	let backImg = rdmArrEl(background);
	//hides title page
	hidePage(titlePage);
	//shows game page
	showPage(gamePage);
	gamePage.style['transition-delay'] = '2s';
	//sets background image
	gamePage.style.background = `url(${backImg}) no-repeat center center fixed`;
	//performs function for placing, showing, and hiding characters with 5sec delay
	setTimeout(placeCharacters, 5000);
	//pauses title page music
	rdmIntroM.pause();
	//checks if title page music is new music after reset. If so, it pauses it.
	if(rdmBacktitleM){
		rdmBacktitleM.pause();
		rdmBacktitleM.currentTime = 0;
	}
	else if(mwin){
		mwin.pause();
		mwin.currentTime = 0;
	}
	rdmIntroM.currentTime = 0;
	rdmBgM.play();
	rdmBgM.loop = true;
	if(humans.length === 17){
		setTimeout(timer, 10000);
	}
	timergap = 4000;
	stop = false;
}

// randomizes an array
function randomizeArr(array){
  let i = 0, j = 0, temp = null;

  	for (i = array.length - 1; i > 0; i -= 1) {
    	j = Math.floor(Math.random() * (i + 1))
    	temp = array[i]
    	array[i] = array[j]
    	array[j] = temp
	}
}


// shows characters by setting src of image to each character object's img link
function showCharacters(){
	for(let i = 0; i < characters.length; i++){
		boxes[i].src = characters[i].imgLink;
		boxes[i].style['animation-name'] = 'showflip';
	}
	charreveal.play();
}

// hides characters
function hideCharacters(){
	for(let i = 0; i < boxes.length; i++){
		boxes[i].src = redsquare;
		boxes[i].style['animation-name'] = 'hideflip';
	}
}

// gives id attribute with name of each character to each img tag
function idBoxes(){
	for(let i = 0; i < boxes.length; i++){
		boxes[i].setAttribute('id', characters[i].fname);
	}
}

// adds event listener for chooseCharacter function
function addEvent(){
	for(let i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', chooseCharacter); 
	}
}

// randomly places character images inside each of the box img tags
function placeCharacters(){
	randomizeArr(characters);
	showCharacters();
	idBoxes();
	setTimeout(hideCharacters, 4500);
	setTimeout(addEvent, 5000);	
}

// series of functions and actions in result of clicking on a monster character
function badEnding(){
	rdmBgM.pause();
	gamePage.style.display = 'none';
	hidePage(gamePage);
	showPage(monstPage);
	setTimeout(showPage, 5000, gopage);
	setTimeout(hidePage, 9000, monstPage);
	setTimeout(hidePage, 10000, gopage);
	setTimeout(showPage, 10000, titlePage);
	setTimeout(playNewIntro, 10000);
	setTimeout(reset, 10000);
}

function endMessage(m){
	gomessage.innerHTML = `You were slain by ${m.fname}`;
}

function pyramidEnding(){
	rdmBgM.pause();
	gamePage.style.display = 'none';
	hidePage(gamePage);
	pyramidvideo.play();
	showPage(pyramidPage);
	setTimeout(showPage, 5000, gopage);
	setTimeout(hidePage, 9000, pyramidPage);
	setTimeout(hidePage, 10000, gopage);
	setTimeout(showPage, 10000, titlePage);
	setTimeout(playNewIntro, 10000);
	setTimeout(reset, 10000);
}

function missionaryEnding(){
	rdmBgM.pause();
	gamePage.style.display = 'none';
	hidePage(gamePage);
	missionaryvideo.play();
	showPage(missionaryPage);
	setTimeout(showPage, 5000, gopage);
	setTimeout(hidePage, 9000, missionaryPage);
	setTimeout(hidePage, 10000, gopage);
	setTimeout(showPage, 10000, titlePage);
	setTimeout(playNewIntro, 10000);
	setTimeout(reset, 10000);
}

function goodEnding(){
	// pauses background music of game page
	rdmBgM.pause();
	// plays music for win page
	mwin.play();
	// hides game page
	hidePage(gamePage);
	// shows winpage after 2 seconds
	setTimeout(showPage, 2000, winpage);
	// stylezes letter "M" in "Memories" on title page for secret features
	m.style['text-shadow'] = '0, 10px, 20px white';
	m.style.cursor = 'pointer';
	// adds click event to "M" on title page
	m.addEventListener('click', function(){
		showPage(diffdiv);
	});
}

function goodPlusEnding(){
	// pauses background music of game page
	timerStop();
	rdmBgM.pause();
	gamePage.style.display = 'none';
	hidePage(gamePage);
	showPage(plusEndingPage);
	plusEndVid.play();
	setTimeout(reset, 8000);
	setTimeout(showPage, 67000, titlePage);
	setTimeout(hidePage, 67000, plusEndingPage);
}

// lets you pick each box, reveal the character and proceed with the actions
function chooseCharacter(e){
	if(e.target.id === pyramid.fname){
		timerStop();
		pyramidEnding();
		endMessage(pyramid);
	}
	else if(e.target.id === missionary.fname){
		timerStop();
		missionaryEnding();
		endMessage(missionary);
	}

	else if(e.target.id === monocleman.fname){
		timerStop();
		badEnding();
		monsterShow(monocleman);
		endMessage(monocleman);
	}
	else if(e.target.id === mumbler.fname){
		timerStop();
		badEnding();
		monsterShow(mumbler);
		endMessage(mumbler);
	}
	else if(e.target.id === nurse.fname){
		timerStop();
		badEnding();
		monsterShow(nurse);
		endMessage(nurse);
	}
	else if(e.target.id === bottom.fname){
		timerStop();
		badEnding();
		monsterShow(bottom);
		endMessage(bottom);
	}
	else if(e.target.id === wheelman.fname){
		timerStop();
		badEnding();
		monsterShow(wheelman);
		endMessage(wheelman);
	}
	else if(e.target.id === needler.fname){
		timerStop();
		badEnding();
		monsterShow(needler);
		endMessage(needler);
	}
	else {
		for(let i = 0; i < characters.length; i++){
			if(characters[i].fname === e.target.id){
				charselect.play();
				charselect.currentTime = 0;
				savedCharacters.push(characters[i]);
				console.log(savedCharacters.length + " amount of saved characters");
				console.log(humans.length + " total number of humans");
				barImgs[barImgPlace].style.opacity = "1";
				barImgs[barImgPlace].src = characters[i].imgLink;
				barImgPlace += 1;
				e.target.src = characters[i].imgLink;
				e.target.style['animation-name'] = 'showflip';
				setTimeout(function(){
					e.target.src = shemblem;
					e.target.style['animation-name'] = 'hideflip';	
				}, 1500);
				e.target.removeEventListener('click', chooseCharacter);
				if(humans.length < 12 && savedCharacters.length === humans.length){
					goodEnding();
				}
				else if(humans.length > 12 && savedCharacters.length === humans.length){
				goodPlusEnding();
				console.log('met the plus ending condition');
				}
			}	
		}
	}	
}

// EVENT LISTENERS
startBtn.addEventListener('click', gameStart);
lightbox.addEventListener('click', lightboxHide);
instructions.addEventListener('click', lightboxShow);
winpage.addEventListener('click', function(){
	hidePage(winpage);
	reset();
	showPage(titlePage);
});
diffreg.addEventListener('click', regDifficulty);
diffhard.addEventListener('click', hardDifficulty);
	
