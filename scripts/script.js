// Create content
let instruments = [
  {
    id: "Piano",
    img: "https://www.yamaha.com/us/pianos/images/homepageStill.jpg",
    
    mp3:
      "https://feiwangart.files.wordpress.com/2020/06/short-merry-christmas-3.mp3",
    intro:
      "The piano is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700, in which the strings are struck by wooden hammers that are coated with a softer material. It is played using a keyboard, which is a row of keys that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings.",
        
    play: false
  },
  {
    id: "Violin",
    img:
      "https://cdn.shoplightspeed.com/shops/629006/files/17609348/headline-2.jpg",
    mp3: "https://feiwangart.files.wordpress.com/2020/06/violin.mp3",
    intro:
      "The violin was first known in 16th-century Italy, with some further modifications occurring in the 18th and 19th centuries to give the instrument a more powerful sound and projection. In Europe, it served as the basis for the development of other stringed instruments used in Western classical music, such as the viola.",
    play: false
  },
  {
    id: "Flute",
    img:
      "https://s3-eu-west-1.amazonaws.com/philharmonia-assets/uploads/2020/01/17171844/03_flute_flat-960x600.jpg",
    mp3: "https://feiwangart.files.wordpress.com/2020/06/flute-1.mp3",
    intro:
      "The flute is a family of musical instruments in the woodwind group first invented in France. Unlike woodwind instruments with reeds, a flute is an aerophone or reedless wind instrument that produces its sound from the flow of air across an opening.",
    play: false
  },
  {
    id: "Trumpet",
    img:
      "https://cdn11.bigcommerce.com/s-a47hlxhj54/images/stencil/1280x1280/products/1137/4529/7Y0A2028-web__04410.1536785916.jpg?c=2&imbypass=on",
    mp3: "https://feiwangart.files.wordpress.com/2020/06/trumpet.mp3",
    intro:
      'The trumpet is a brass instrument commonly used in various music styles, for instance in orchestras, concert bands, and jazz ensembles, as well as in popular music. They are played by blowing air through nearly-closed lips , producing a "buzzing" sound that starts a standing wave vibration in the air column inside the instrument.',
    play: false
  },
  {
    id: "Clarinet",
    img: "https://www.thomann.de/pics/bdb/323120/7526520_800.jpg",
    mp3: "https://feiwangart.files.wordpress.com/2020/06/clarinet-sound.wav",
    intro:
      "The clarinet is a family of woodwind instruments. It has a single-reed mouthpiece, a straight, cylindrical tube with an almost cylindrical bore, and a flared bell. Johann Christoph Denner is generally believed to have invented the clarinet in Germany around the year 1700. Over time, additional keywork and airtight pads were added to improve the tone and playability.",
    play: false
  }
];

function makeInstruments() {
  let el = document.querySelector("#instrument-items");

  for (var i = 0; i < instruments.length; i++) {
    el.innerHTML += `<div class="row"><div class="col-4"><img class="img-thumbnail" src=${instruments[i].img} alt=${instruments[i].id} onclick="playMusic(event)"><audio src=${instruments[i].mp3}></audio></div><div class="col-8"><h4>${instruments[i].id}</h4><p>${instruments[i].intro}</p></div></div>`;
  }
}

// Play and Pause Music
function playMusic(event) {
  let imgClicked = event.target;
  let myAudio = imgClicked.nextSibling;

  for (var i = 0; i < instruments.length; i++) {
    if (!instruments[i].play) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
    instruments[i].play = !instruments[i].play;
  }
}

//find the question
let quiz = [
  { id: "Q1", style: "block" },
  { id: "Q2", style: "none" },
  { id: "Q3", style: "none" },
  { id: "Q4", style: "none" },
  { id: "Q5", style: "none" },
  { id: "Q6", style: "none" }
];

let quizEl = [
  document.querySelector("#Q1"),
  document.querySelector("#Q2"),
  document.querySelector("#Q3"),
  document.querySelector("#Q4"),
  document.querySelector("#Q5"),
  document.querySelector("#Q6")
];

function hiddenDiv() {
  for (var i = 0; i < quiz.length; i++) {
    if (quizEl[i].id === quiz[i].id) {
      quizEl[i].style.display = quiz[i].style;
    }
  }
}

// right or wrong
function checkAnswer(event){
  let answerEl = event.currentTarget;
  let name = event.currentTarget.name;
 
  if (answerEl.value === "true") {
    alert("Correct!");
    showDiv(name);
  } else {
    alert("Sorry, please try it again.");
  }
  
  return name;
}

function response() {
  alert("Congratulations on finishing the quiz! Now let's check your result for the extra credit!");
  window.open("https://feiwangart.files.wordpress.com/2020/06/piano.png?w=500", "_blank");  
 window.location.reload(true);
}

function showDiv(name){
  for (var i = 0; i < quiz.length; i++){
    if (name == quiz[i].id){
      quizEl[i+1].style.display = "block";
    }
  }
}


//save progress //
var email;
var password;

function setAccount() {
	email = prompt('What is your email address?');
  password = prompt('Please set a password for your online music learning account!');
  if(email.length > 6 | password.length > 3) {
    alert("Congratulations! Your are an official member of our online music learning community.");
    alert("Your progress has been saved. Please log in next time to continue your study!");
          window.open("https://docs.google.com/forms/d/e/1FAIpQLScKTFoe3duwkZ1t8JUNLB3Z9ETWS8UIpfoQVOTVNdFwUhYIDw/viewform?usp=sf_link", "_blank");  

  } else {
    alert("Information is incomplete. Please try it again.");
  }
}


//Login and exit
function hello(event) {
  email = prompt('Please fill in your email address:');
  password = prompt('Please fill in your password:');
  if(email.length>6 | password.length>3) {
    alert("Congratulations! Enjoy your learning journey.");
     window.location.reload(true);   
  } else {
    alert("Information is incomplete or incorrect. Please try it again.");
  }
}

function goodbye(event) {    window.open("https://docs.google.com/forms/d/e/1FAIpQLScKTFoe3duwkZ1t8JUNLB3Z9ETWS8UIpfoQVOTVNdFwUhYIDw/viewform?usp=sf_link", "_blank");  
}

//Load
makeInstruments();
hiddenDiv();