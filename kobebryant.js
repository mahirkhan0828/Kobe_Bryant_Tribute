var quotes = [
  "This is the moment I accept the most challenging times will always be behind me and in front of me.",
  "Everything negative - pressure, challenges - is all an opportunity for me to rise.",
  "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
  "Winning takes precedence over all. There's no gray area. No almosts.",
  "Once you know what failure feels like, determination chases success.",
  "I realized that intimidation didn\'t really exist if you're in the right frame of mind.",
  "I'm reflective only in the sense that I learn to move forward. I reflect with a purpose.",
  "I\'m extremely willful to win, and I respond to challenges. It\'s not a challenge to me to win the scoring title, because I know I can.",
  "My parents are my backbone. Still are. They\'re the only group that will support you if you score zero or you score 40.",
  "The beauty in being blessed with talent is rising above doubters to create a beautiful moment.",
  "A lot of leaders fail because they don\'t have the bravery to touch that nerve or strike that chord.",
  "The moment you give up, is the moment you let someone else win.",
  "I can\'t relate to lazy people. We don\'t speak the same language. I don\'t understand you. I don\'t want to understand you.",
  "If you\'re afraid to fail, then you\'re probably going to fail.",
  "Pain doesn't tell you when you ought to stop. Pain is the little voice in your head that tries to hold you back because it knows if you continue you will change.",
  "Use your success, wealth and influence to put them in the best position to realize their own dreams and find their true purpose.",
  "If you want to be great at something, there\'s a choice you have to make. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be.",
  "We all have self-doubt. You don\'t deny it, but you also don\'t capitulate to it. You embrace it.",
  "My brain... it cannot process failure. It will not process failure. Because if I sit there and have to face myself and tell myself, \'You're a failure\' ...I think that\'s almost worse than death.",
  "The most important thing is you must put everybody on notice that you\'re here and you are for real.",
  "Trust me, setting things up right from the beginning will avoid a ton of tears and heartache",
  "I create my own path. It was straight and narrow. I looked at it this way: you were either in my way, or out of it.",
  "We can always kind of be average and do what\'s normal. I\'m not in this to do what's normal.",
  "Haters are a good problem to have. Nobody hates the good ones. They hate the great ones.",
  "It\'s the one thing you can control. You are responsible for how people remember you or don\'t. So don\'t take it lightly."
]

var pictures= [
  "https://clutchpoints.com/wp-content/uploads/2020/01/Kobe-Bryant-killed-in-fatal-helicopter-crash.jpg",
  "https://media.giphy.com/media/3oEjI575FJ9AQBJYWs/giphy.gif",
  "https://media2.giphy.com/media/l3V0d1C0UfJe8x2TK/source.gif",
  "https://media.giphy.com/media/xT9DPDoWMicL4nU3NC/giphy.gif"
]

function KobeQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById("displayquote").innerHTML = quotes[randomNumber];
}

var iterator = 1;
function mainKobePic() {
  if (iterator >= pictures.length){
    iterator = 0
  };
  document.getElementById("mainKobePic").setAttribute("src", pictures[iterator]);
  iterator+=1;
}