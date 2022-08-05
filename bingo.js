var arr = [11, 07, 13, 15, 12, 11, 02, 16, 05, 09, 12, 03, 17, 13, 11, 05, 04, 08, 08, 14, 09, 06, 05, 10, 10];

var main_div = document.createElement('div');
main_div.className = 'main_div';
var parent_div = document.createElement('div');
parent_div.className = 'parent';

var span1 = document.createElement('span');

var span2 = document.createElement('span');

var span3 = document.createElement('span');

var span4 = document.createElement('span');

var imge = document.createElement('img');

// var progress = document.createElement('progress');
// progress.setAttribute('value','');
// progress.setAttribute('max','100');

// var m;
// function stbt(){
//  m = setInterval(time,200);
// }
// var sec = 0;
// function time()
// {
//     console.log(sec);
//   sec = sec + 1;
//   progress.value = sec;
//   if(sec == 100)
//   {
//     console.log('hii');
//     clearInterval(m);
//   }
// }
var val1;
var val2;
var y = 0;
var val;
var z;
var chance = 0;
function game() {
    if(this.style.backgroundColor == 'blue')
    {
        display();
        return;
    }
    console.log(row.r1);
    if(row.r1 == '5' || row.r2 == '5' || row.r3 == '5' || row.r4 == '5' || row.r5 == '5')
    {
        console.log('hii');
         z.backgroundColor = 'yellow';
     }
    val = parseInt(val1) + parseInt(val2);
    y = this.value;
     z = this;
    var key = z.getAttribute('key');
  
    if (val == y) {
        // sec= 0;
      row["r"+((key%5)+ 1)] = row["r"+((key%5)+1)] + 1;
      
      col["c"+(Math.ceil((parseInt(key)+1)/5))] = col["c"+(Math.ceil((parseInt(key)+1)/5))] + 1;
      console.log(row,col);
       z.style.backgroundColor = 'blue';
    //    z.disabled = true;
    }
    else if(chance < 2){
        //  sec = 0;
         chance = chance + 1;
    }
    else{
        val = 0;
    } 
    display();
}

var btn;
for (let i = 0; i < arr.length; i++) {
    btn = document.createElement('button');
    btn.textContent = arr[i];
    btn.addEventListener('click', game);
    btn.value = arr[i];
    btn.className = 'main-btn';
    main_div.append(btn);
    btn.setAttribute('key',i);
    btn.disabled = true;
}
parent_div.append(span1, span2, span3, span4, imge);

function display(){
    var q_all = document.querySelectorAll('.main-btn');
for(let i=0;i<arr.length;i++)
{
    q_all[i].disabled = false;
}
    val1 = Math.floor(Math.random() * 8 + 1);
    val2 = Math.floor(Math.random() * 8 + 1);

    span1.textContent = val1;
    span3.textContent = val2;
    span2.textContent = '+';
    span4.textContent = '=';
    imge.src = '1.png';
    butn.disabled = 'true';
}

var btn_div = document.createElement('div');
btn_div.className = 'btn-div';
var butn = document.createElement('button');
butn.className = 'start-btn';
butn.textContent = 'START GAME';
butn.addEventListener('click', display);

var end_btn = document.createElement('button');
end_btn.className = 'end-btn';
end_btn.textContent = 'END GAME';
btn_div.append(butn, end_btn);

var row = {
    r1 : 0,
    r2 : 0,
    r3 : 0,
    r4 : 0,
    r5 : 0
}
var col = {
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0
}
document.body.append(parent_div, main_div, btn_div);


