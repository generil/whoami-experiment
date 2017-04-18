var state = 'Init';
var cstate = 'Black';
var background = [
    '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A',
    '#FF9800', '#FFC107', '#FF5722', '#795548', '#607D8B', '#FF3D00', '#00E676', '#1B5E20', '#827717', '#1DE9B6', '#0091EA',
    '#2979FF', '#3D5AFE', '#651FFF', '#1976D2', '#D500F9', '#F50057', '#FF1744', '#D50000', '#00BFA5', '#F57F17', '#FF6F00',
    'black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray'
];

var foreground = [
    '#FFEBEE', '#FF5252', '#FF4081', '#E040FB', '#F3E5F5', '#B388FF', '#8C9EFF', '#448AFF', '#18FFFF', '#64FFDA', '#00E676',
    '#76FF03', '#EEFF41', '#F4FF81', '#FFEB3B', '#FFFF00', '#FFC107', '#FF9100', '#FF3D00', '#448AFF', '#000000', '#FFFFFF'
];

var ht = document.getElementsByTagName('html');
var bd = document.getElementsByTagName('body');
for (var i = 0; i < ht.length; i++) {
    ht[i].style.backgroundColor = '#345995';
    bd[i].style.backgroundColor = '#345995';
}

function change() {
    divy = document.getElementsByClassName('more-info');
    for (var i = 0; i < divy.length; i++) {
        divy[0].style.display = 'none';
    }

    if(state == 'Init') {
        state = me();
    } else if(state == 'Age') {
        state = age();
    } else if(state == 'Birthday') {
        state = birthday();
    } else if(state == 'Gender') {
        state = gender();
    } else if(state == 'School') {
        state = school();
    } else if(state == 'Course') {
        state = course();
    } else if(state == 'Programming Language') {
        state = lang();
    } else if(state == 'Operating System') {
        state = os();
    } else if(state == 'More Info') {
        state = moreinfo();
    } else if(state == 'Color') {
        state = colorchanger();
    }
}

function me() {
    document.getElementById('bw').style.display = 'none';
    document.getElementById('random').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    var colora = document.getElementById('main');
    colora.className = 'header';
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'white';
    t[1].style.color = 'rgba(255,255,255,0.7)';
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = '#345995';
        bd[i].style.backgroundColor = '#345995';
    }
    document.getElementById('button1').style.backgroundColor = '#FFC528';
    document.getElementById('button1').style.color = 'rgba(0,0,0,0.7)';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = 'HOW OLD ARE YOU?';
    divy = document.getElementsByClassName('more-info');
    for (var i = 0; i < divy.length; i++) {
        divy[0].style.display = 'hidden';
    }
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Hello';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "I'm Generil de los Santos";
    }
    return 'Age';
}
function age() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'white';
    t[1].style.color = 'rgba(255,255,255,0.7)';
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'black';
        bd[i].style.backgroundColor = 'black';
    }
    document.getElementById('button1').style.backgroundColor = '#1ED760';
    document.getElementById('button1').style.color = 'white';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WHEN'S YOUR BIRTHDAY?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Age';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "I'm 19 years old";
    }
    return 'Birthday';
}
function birthday() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'white';
    t[1].style.color = 'rgba(255,255,255,0.7)';
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = '#ff1a4f';
        bd[i].style.backgroundColor = '#ff1a4f';
    }
    document.getElementById('button1').style.backgroundColor = '#ff5f33';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "ARE YOU A MALE OR A FEMALE?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Birthday';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "I was born on March 11, 1998";
    }
    return 'Gender';
}
function gender() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'lightyellow';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'blueviolet';
        bd[i].style.backgroundColor = 'blueviolet';
    }
    document.getElementById('button1').style.backgroundColor = 'goldenrod';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WHAT SCHOOL ARE YOU IN?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Male';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "Nothing Else";
    }
    return 'School';
}
function school() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'yellow';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'maroon';
        bd[i].style.backgroundColor = 'maroon';
    }
    document.getElementById('button1').style.backgroundColor = 'SpringGreen';
    document.getElementById('button1').style.color = 'rgba(0,0,0,0.7)';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WHAT COURSE DID YOU TOOK?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'School';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "The Glorious UP Cebu!";
    }
    return 'Course';
}
function course() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = '#FFF9C4';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = '#4CAF50';
        bd[i].style.backgroundColor = '#4CAF50';
    }
    document.getElementById('button1').style.backgroundColor = '#FF9100';
    document.getElementById('button1').style.color = 'rgba(0,0,0,0.7)';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WHAT IS YOUR FAVORITE PROGRAMMING LANGUAGE?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Course';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "BS Computer Science III";
    }
    return 'Programming Language';
}
function lang() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'white';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = '#1275ed';
        bd[i].style.backgroundColor = '#1275ed';
    }
    document.getElementById('button1').style.backgroundColor = '#ffbf00';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WHAT IS YOUR FAVORITE OPERATING SYSTEM?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Programming Language';
        text[0].style.fontSize = '8vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "Python, JavaScript, C, C++, Swift and definitely not Java.";
    }
    return 'Operating System';
}
function os() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'rgba(0,0,0,0.7)';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'gold';
        bd[i].style.backgroundColor = 'gold';
    }
    document.getElementById('button1').style.backgroundColor = 'dodgerblue';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "WANT TO KNOW MORE?";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Favorite OS';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "Linux, macOS and not Windows";
    }
    return 'More Info';
}
function moreinfo() {
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'white';
    t[1].style.color = 'rgba(255,255,255,0.7)';
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = '#345995';
        bd[i].style.backgroundColor = '#345995';
    }
    document.getElementById('button1').style.backgroundColor = '#FFC528';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    divy = document.getElementsByClassName('more-info');
    document.getElementById('button1').innerHTML = "MY EXPERIMENT";
    for (var i = 0; i < divy.length; i++) {
        divy[0].style.display = 'block';
    }
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Other Information';
        text[0].style.fontSize = '8vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "Here is my other information.";
    }
    return 'Color';
}

function colorchanger() {
    document.getElementById('bw').style.display = 'inline';
    document.getElementById('random').style.display = 'inline';
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'rgba(0,0,0,0.6)';
    t[1].style.color = 'rgba(0,0,0,0.4)';
    document.getElementById('button1').style.backgroundColor = 'rgba(0,0,0,0.6)';
    document.getElementById('button1').style.color = 'rgba(255,255,255,0.9)';
    document.getElementById('bw').style.backgroundColor = 'black';
    document.getElementById('bw').style.color = 'white';
    var colora = document.getElementById('main');
    colora.className += ' rb';

    text = document.getElementsByClassName('welcome');
    capt = document.getElementsByClassName('caption');
    document.getElementById('button1').innerHTML = "LET'S DO IT AGAIN";
    for (var i = 0; i < text.length; i++) {
        text[0].innerHTML = 'Colora';
        text[0].style.fontSize = '10vmax';
    }
    for (var i = 0; i < capt.length; i++) {
        capt[0].innerHTML = "Click any button to change the colors";
    }


    return 'Init';
}

function switchBW() {
    document.getElementById('reset').style.display = 'inline';
    bgoffset = getRandomNumber(0, 32);
    fgoffset = getRandomNumber(0, 21);
    document.getElementById('random').style.backgroundColor = background[bgoffset];
    document.getElementById('random').style.color = foreground[fgoffset];
    console.log(cstate);
    if (cstate == 'Black') {
        cstate = toBlack();
    } else if (cstate == 'White') {
        cstate = toWhite();
    }
}
function switchRandom() {
    bgoffset = getRandomNumber(0, (background.length)-1);
    fgoffset = getRandomNumber(0, (foreground.length)-1);
    document.getElementById('main').className = 'header';
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = foreground[fgoffset];
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = background[bgoffset];
        bd[i].style.backgroundColor = background[bgoffset];
    }
    bgoffset = getRandomNumber(0, (background.length)-1);
    fgoffset = getRandomNumber(0, (foreground.length)-1);
    document.getElementById('button1').style.backgroundColor = background[bgoffset];
    document.getElementById('button1').style.color = foreground[fgoffset];
    document.getElementById('bw').style.backgroundColor = background[bgoffset];
    document.getElementById('bw').style.color = foreground[fgoffset];
    document.getElementById('random').style.backgroundColor = background[bgoffset];
    document.getElementById('random').style.color = foreground[fgoffset];
    document.getElementById('reset').style.display = 'inline';
}
function toBlack() {
    document.getElementById('main').className = 'header';
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'white';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'black';
        bd[i].style.backgroundColor = 'black';
    }
    document.getElementById('button1').style.backgroundColor = 'white';
    document.getElementById('bw').style.backgroundColor = 'white';
    document.getElementById('button1').style.color = 'black';
    document.getElementById('bw').style.color = 'black';

    document.getElementById('bw').innerHTML = 'TO WHITE';

    return 'White';
}
function toWhite() {
    document.getElementById('main').className = 'header';
    var ht = document.getElementsByTagName('html');
    var bd = document.getElementsByTagName('body');
    var t = document.getElementsByClassName('txt');
    for (var i = 0; i < t.length; i++) {
        t[i].style.color = 'black';
    }
    for (var i = 0; i < ht.length; i++) {
        ht[i].style.backgroundColor = 'white';
        bd[i].style.backgroundColor = 'white';
    }
    document.getElementById('button1').style.backgroundColor = 'black';
    document.getElementById('bw').style.backgroundColor = 'black';
    document.getElementById('button1').style.color = 'white';
    document.getElementById('bw').style.color = 'white';

    document.getElementById('bw').innerHTML = 'TO BLACK';
    return 'Black';
}
function reset() {
    document.getElementById('bw').style.display = 'inline';
    document.getElementById('random').style.display = 'inline';
    document.getElementById('reset').style.display = 'none';
    var t = document.getElementsByClassName('txt');
    t[0].style.color = 'rgba(0,0,0,0.6)';
    t[1].style.color = 'rgba(0,0,0,0.4)';
    document.getElementById('button1').style.backgroundColor = 'rgba(0,0,0,0.6)';
    document.getElementById('button1').style.color = 'rgba(255,255,255,0.9)';
    document.getElementById('bw').style.backgroundColor = 'black';
    document.getElementById('bw').style.color = 'white';
    document.getElementById('bw').innerHTML = 'TO BLACK';
    cstate = 'Black';
    var colora = document.getElementById('main');
    colora.className += ' rb';
}

function getRandomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}