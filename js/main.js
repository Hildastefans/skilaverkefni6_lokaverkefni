var question_container = document.querySelector(".question_container")
var nextQuestion = document.querySelector("#addCardButton")
var tryAgainButton = document.querySelector("#tryAgain")


var quiz = [
    {
      options: [
        {
          option: 'Number 999',
          answered: false
        },
        {
          option: 'Number 742',
          answered: true
        },
        {
          option: 'Number 675',
          answered: false
        },
      ],
      spurning: 'What is the house number of the Simpsons?',
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/742_Evergreen_Terrace.png/300px-742_Evergreen_Terrace.png"
  },
  {
    options: [
      {
        option: 'Arnold Schwarzenegger',
        answered: false,
        
      },
      {
        option: 'Rob Bowman',
        answered: false
      },
      {
        option: 'Quentin Tarantino',
        answered: true
      },
    ],
    spurning: 'Who is the director of Reservoir Dogs?',
    img: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4p/t6/p04pt626.jpg",
  },
  {
    options: [
      {
        option: 'Whoopi Goldberg',
        answered: true,
        
      },
      {
        option: 'Sarah Bernhardt',
        answered: false
      },
      {
        option: 'Julia Roberts',
        answered: false
      },
    ],
    spurning: 'Who was the leading actress in Sister act I en II ?',
    img: "https://i.ytimg.com/vi/ctjG4MjJwEA/maxresdefault.jpg",
  },
  {
    options: [
      {
        option: 'Austria',
        answered: false
      },
      {
        option: 'Switzerland',
        answered: false
      },
      {
        option: 'Belgium',
        answered: true
      },
    ],
    spurning: 'Which country is the origin of the Stella beer?',
    img: "https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/20808/peroni.png?w=660",
  },
  {
    options: [
      {
        option: 'Aaron',
        answered: true,
        
      },
      {
        option: 'Ben',
        answered: false
      },
      {
        option: 'Sam',
        answered: false
      },
    ],
    spurning: 'What is Elvis Presley s middle name?',
    img: "https://images.spot.im/v1/production/bkq5xa9a430ksbsgr3cj",
  },
  {
    options: [
      {
        option: 'Mariah Carey',
        answered: false,
        
      },
      {
        option: 'Whitney Houston',
        answered: false
      },
      {
        option: 'Aretha Franklin',
        answered: true
      },
    ],
    spurning: 'Who was the Queen of Soul?',
    img: "https://i.ytimg.com/vi/uvSNwjpFW8w/maxresdefault.jpg",
  },
  {
    options: [
      {
        option: 'Madonna Del Ciccone',
        answered: false
      },
      {
        option: 'Madonna Louise Ciccone',
        answered: true
      },
      {
        option: 'Madonna Alex Ciccone',
        answered: false
      },
    ],
    spurning: 'What is Madonna s full name',
    img: "https://www.irishexaminer.com/remote/media.central.ie/media/images/m/MadonnaAt60_large.jpg?width=648&s=ie-854852",
  },
  {
    options: [
      {
        option: 'Aphra',
        answered: false
      },
      {
        option: `He doesn't have one`,
        answered: true
      },
      {
        option: 'BB-9E',
        answered: false
      },
    ],
    spurning: `What is Yoda's last name?`,
    img: "https://cdn-images-1.medium.com/max/1600/1*BRJuVwF0LHlmiLT5dB5BWA.png",
  },
  {
    options: [
      {
        option: 'Liverpool',
        answered: true,
        
      },
      {
        option: 'London',
        answered: false,
      },
      {
        option: 'Manchester',
        answered: false
      },
    ],
    spurning: 'In which English town did Adolf Hitler study art?',
    img: "https://d.ibtimes.co.uk/en/full/1462488/hitler-paintings.jpg?w=736&e=34da0cd97452faf28ac9ceda58b3d50c",
  },
  {
    options: [
      {
        option: 'Empire State Building',
        answered: false,
        
      },
      {
        option: 'The Dakota Building',
        answered: true,
      },
      {
        option: 'Chrysler Building',
        answered: false
      },
    ],
    spurning: 'Where was John Lennon killed?',
    img: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492176482/articles/2015/09/05/best-of-breslin-are-you-john-lennon/150904-breslin-lennon-tease_d7josc",
  },
]




var question_card = function(quiz){
    console.log(quiz)

  var options = '<form>'
    for( var i = 0; i < quiz.options.length; i++){
    options += `<input name="options" class="radioInput" type="radio"> ${quiz.options[i].option}` // hvar erum við að taka inn svar gildið?
  }
    options += '</form>'

    console.log(options)
  
  /** bæta við div-ið auka korti */
  question_container.innerHTML += `
      <div class= "card" >
          <img src="${quiz.img}" alt="">
          <h1>${quiz.spurning}</h1>
          <p> ${options} </p>
          </div>
          `   
        }
        
        question_card(quiz[0])
        
        
        
        var currentPage = 0
        var stig = 0
        var nextCard = function(){
          
          var radioButtons = document.getElementsByClassName("radioInput") 
          // stig í lokin 
          var somethingIsChecked = false  // þetta varð að vera svo við gætum haft alert á radio
            for(var i = 0; i < quiz[currentPage].options.length; i++){
                console.log("array:",quiz[currentPage].options[i].answered === true)
                console.log("radiobutton:",radioButtons[i].checked)
            if(quiz[currentPage].options[i].answered === true && radioButtons[i].checked === true){
                stig += 1
                console.log(stig)
                console.log(quiz)
            } 
            
            if (radioButtons[i].checked === true){
                somethingIsChecked = true 
              
            }
  }
if (!somethingIsChecked){
    alert("You need to answer!")
    return
} 

  if(currentPage < quiz.length -1){
    currentPage += 1
  }
  else {
    question_container.innerHTML = ''
    if(stig <=5){ 
      document.body.innerHTML = `<div class = "question_container" class="last_page"> 
      <div class= "stigaspjal" id="loka_texti"<h3> You have answered ${stig} questions right! <br> <span> Not Good Enough! </span></h3>
        <img src="https://i.giphy.com/media/5qTFoUzHDkeYg/200w.webp" alt="Fall">
      </did>
      <br>
        <button class="button" id="tryAgain" value="Try Again" onClick="window.location.href=window.location.href=window.location.href"/>Try Again!</button>
      </div>`} 

      else if(stig >= 5 && stig < 10){ 
      document.body.innerHTML = `<div class = "question_container" class="last_page"> 
      <h3>You have answered ${stig} questions right!<br> <span> You did pretty good!</h3></span>
      <span><img src="https://i.giphy.com/media/10zKT0Y5pJf2iA/200w.webp" alt="Sæmilegt"></span>
      <button class="button1" id="tryAgain" value="Try Again" onClick="window.location.href=window.location.href"/>Try Again!</button>
      </div>`}
      else if(stig = 10){ 
      document.body.innerHTML = `<div class = "question_container" class="last_page"> 
      <h3>You have answered ${stig} <br> questions right! <br> <span> Perfect!</span></h3>
      <span><img src="https://i.giphy.com/media/2uI8XF2T6UT4vaFVEM/200w.webp" alt="Flawless!"></span>
      <br>
      <button class="button2" id="tryAgain" value="Try Again" onClick="window.location.href=window.location.href"/>Try Again!</button>
      </div>`} 
      
  } 


  question_container.innerHTML = ''




  question_card(quiz[currentPage])
  
}

var previous = function(){
    console.log ()
    question_container.innerHTML = ''
    if (currentPage > 0){
    currentPage -= 1 
  }  

  question_card(quiz[currentPage])

}


nextQue.onclick = nextCard
prevQuestion.onclick = previous







var button1 = document.getElementById("addcolorButton1");
var button2 = document.getElementById("addcolorButton2");
var button3 = document.getElementById("addcolorButton3");


button1.addEventListener("click",changeColor);
button2.addEventListener("click",changeColor);
button3.addEventListener("click",changeColor);

function changeColor(e){

	console.log('kallað')

	if(e.target.id==="addcolorButton1"){

			document.body.style.backgroundColor = "#F38480";
	} else if (e.target.id === "addcolorButton2"){
		document.body.style.backgroundColor = "#3F729B";
	} else if (e.target.id === "addcolorButton3"){
		document.body.style.backgroundColor = "#8C779C";
	}

}





















