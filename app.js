/*
random quote machine
*/
let quoteArray = [
  'Trick the type of guy to have his first words to his parents are “BIGGEST MISTAKE OF YOUR LIFE”',
  'Trick the type of guy to moan when the barber brushes off the back of his neck',
  'Trick the type of guy to go swimming in his bathtub',
  'Trick the type of guy to go to the circus and yell "DO IT AGAIN" when a stunt goes wrong',
  'Trick the type of guy to open his task manager and yell MULTIPLE APPLICATIONS!',
  'Trick the type of guy to say U DEAD when he sees a ghost',
  'Trick the type of guy would visit his grandma in the hospital for that STROKE GAMEPLAY',
  'Trick the type of guy who screams WHO NEXT at a funeral',
  'Trick the type of guy to cancel a doctors appointment cuz he’s sick',
  'Trick the type of guy who makes you believe he is bronze and challenger in the same game'
];


function addRandomQuote() {
  var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  document.getElementById('quote_p').innerHTML = randomQuote;
}


// constants
const key = 'AIzaSyDKxuIPPLYh9lxuLXlVhzStyqHAWvl6IdE';
const playlistId = 'UUuSrv3qgQA7SSi6R9bWag5A';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

//youtube API sees all these info, so that it knows what kind of information you want to retrieve
const options = {
  playlistId: playlistId,
  maxResults: 20,
  key: key,
  part: 'snippet'
};

let loadMainVideo = function () {

  //put in options into the URL so that youtube API will work
  URL += '?' + Object.keys(options).map((k) => k + '=' + encodeURIComponent(options[k])).join('&');
  //use fetch to get HTTP request
  fetch(URL)
    .then(res => res.json())
    .then(function (data) {
      loadPlayList(data);
      var first_video_id = data.items[0].snippet.resourceId.videoId;
      //put the 1st video in the playlist into the dom
      document.getElementById('youtube_feed').innerHTML = `
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/${first_video_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `


      document
        .getElementById('youtube_playlist')
        .addEventListener('click', function (event) {
          // const target = event.target;
          // console.log({ target });

          if (event.target.dataset.key) {
            console.log(event.target.dataset.key);
            first_video_id = event.target.dataset.key;
          } else {
            console.log(event.target.parentElement.dataset.key);
            first_video_id = event.target.parentElement.dataset.key;
          }

          // console.log("The key is", target);
        });
    })
    .catch(err => console.log(err))
}

loadMainVideo();


/*  
Load Playlist
*/

function loadPlayList(data) {
  console.log(data.items.length); //this gives you 20 which is correct

  //let's try loop through the array using for loop
  for (let i = 1; i < data.items.length; i++) {
    var thumbnail = data.items[i].snippet.thumbnails.medium.url;
    var title = data.items[i].snippet.title.substring(0, 50);
    var videoID = data.items[i].snippet.resourceId.videoId;


    document.getElementById('youtube_playlist').innerHTML += `
      <div class="individual_list_item" data-key = "${videoID}">
      <img src="${thumbnail}" alt="video_thumbnail_placeholder" class="thumbnails">
        <p class="playlist_titles">${title}</p>
    </div>
      `;
  }
}

// document
// .getElementById('youtube_playlist')
// .addEventListener('click',function(event){
//   // const target = event.target;
//   // console.log({ target });

//   let key;
//   if (event.target.dataset.key) {
//     key = event.target.dataset.key;
//   } else {
//     console.log(event.target.parentElement.dataset.key);
//     key = event.target.parentElement.dataset.key;
//   }

//   // console.log("The key is", target);
// });

// document
// .getElementById('youtube_playlist')
// .addEventListener('click',function(event){
//   // const target = event.target;
//   // console.log({ target });


//   if (event.target.dataset.key) {
//     console.log(event.target.dataset.key);
//     first_video_id = event.target.dataset.key;
//   } else {
//     console.log(event.target.parentElement.dataset.key);
//     first_video_id= event.target.parentElement.dataset.key;
//   }

//   // console.log("The key is", target);
// });