
 
let game=false;
let access=false;
//let load = false;

// 
//let refreshbtn =false; 

let score=0;


let arr=["blue","yellow","ash","red"];
 let systemarr=[];
 let userarr=[];

 //scores
 let scores=[];

    let level= 0;

    let h3=document.querySelector('h3');  
    let h4=document.querySelector('h4');
    let highscore = document.querySelector('.hscore');

// start the game
    document.addEventListener('click',function()
{
    access=true;
     
    while(game!=true)
{
    level++;
  //  let h3=document.querySelector('h3');
   
   // console.log("clicked");

    let btnindex = Math.floor( Math.random()*4);
 // console.log(btnindex);
 let getbtn= arr[btnindex];
//console.log(getbtn);
 
   

    let setbtn =document.querySelector( `.${getbtn}`);
 //console.log(setbtn);
 setbtn.classList.add('flash');
 

 setTimeout( function()
{
    console.log("game started");
    setbtn.classList.remove('flash'); 
    systemarr.push(getbtn);  
   console.log(` system array =  ${systemarr}`);
},500);

//let h3=document.querySelector('h3');
h3.innerText=`level ${level++}`;

//let h4=document.querySelector('h4');
h4.innerText="Your score is 0";

game=true;
}
   
});


function randomcall()
{
   
    let btnindex = Math.floor( Math.random()*4);
//  console.log(btnindex);
 let getbtn= arr[btnindex];
//console.log(getbtn);
 
    //call(getbtn);

    let setbtn =document.querySelector( `.${getbtn}`);
 //console.log(setbtn);
 setbtn.classList.add('flash');
 

 setTimeout( function()
{
    setbtn.classList.remove('flash'); 
    systemarr.push(getbtn);  
   console.log(` system array =  ${systemarr}`);
  // console.log(`present userarray : ${userarr}`);
},500);

userarr=[];

}




    arr.forEach( (a)=>{

let getbtn = document.querySelector(`#${a}`);

   getbtn.addEventListener('click', function(event){
    
     event.stopPropagation();
      //--- console.log(this);

      if(access == true)
      {

        this.classList.add('flash');
setTimeout( function(){
    getbtn.classList.remove('flash');
},500);

checkarr(getbtn);

      }
     
  
});


} );






function checkarr(btn){
    let val=false;
  
        let value =  btn.getAttribute('id');
    userarr.push(value);
 //  console.log(` user array   ${userarr}`);
   // let h3=document.querySelector('h3');
    //let h4=document.querySelector('h4');
   
   // let idx=userarr.indexOf(value);
 let idx = userarr.length-1;

//--------
//console.log(userarr[idx]);

   if( userarr[idx] == systemarr[idx] )
   {
        if(userarr.length == systemarr.length)
        {
           
            setTimeout( function()
        {
            h3.innerText=`level ${level++}`;
            console.log(" matched");
            h4.innerText=`Your score is ${score+=5}`;
            
        },500);
        setTimeout( function()
        {
           // h3.innerText=`level ${level++}`;
            randomcall();
        },1000);
          
        }
   }
   else{
    console.log("not matched");
    h3.innerText="";
    h4.innerText=`Game Over ! Your score is ${score} `;
    scores.push(score);
    console.log(`scores array = ${scores}`);


//showing the high score
let hscore=0;
for(score of scores)
{
    if(score > hscore)
{
    hscore=score;
}
}

//console.log(hscore);

    access=false;
    load=true;

     //body background
    let body = document.querySelector('body');
    body.style.backgroundColor="red";


    //high score display

highscore.innerText=`HIGH SCORE : ${hscore}`;
    

    setTimeout( function(){
             body.style.backgroundColor="white";
    },500);

  //  <button class="btn btn-rounded btn-dark refresh">RESTART THE GAME</button>
   let restart = document.createElement('button');
   restart.innerText="RESTART THE GAME";
   restart.setAttribute('class','btn btn-rounded btn-dark refresh');

   //adding to the div
   let restartdiv= document.querySelector('.enddiv');
         restartdiv.appendChild(restart);
        
   }

//-------
}


    let refresh = document.querySelector('.enddiv');

refresh.addEventListener( 'click', function(event)
{
  // console.log(event.target);
    //event.stopPropagation();
  //  if( load == true)
//{
  
//   let interval =   setInterval( function()
// {
//     window.location.reload();
// },200);

setTimeout( function(){
//clearInterval(interval);
 game=false;
access=false;
 //load = false;

// 

 score=0;

  systemarr=[];
  userarr=[];
     level= 0;

   // console.log(userarr);
    //console.log(systemarr);
    event.target.remove();

    //let h3=document.querySelector('h3');
h3.innerText="Press any where to start the game";

//let h4=document.querySelector('h4');
h4.innerText="";
highscore.innerText="";
},500);

console.clear();

       // window.location.reload();
   
//}
});


