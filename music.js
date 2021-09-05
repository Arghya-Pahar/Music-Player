
const music=document.querySelector("audio");
const img=document.querySelector("img");
const Play=document.getElementById("play");
const Prev=document.getElementById("prev");
const next=document.getElementById("next");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
let progress=document.getElementById("progress");
let spotcurrent=document.getElementById("currenttime");
let spotduration=document.getElementById("duration")
const progressdiv=document.getElementById("progressdiv");
const songs=[{
    Name:"Hale Dil - Muder 2 320Kbps.mp3",
    artist:"Arijit singh",
    title:"Hale dil",
    img:"image1.jpg",

},
{
    Name:"Kabhi Jo Baadal Barse - Arijit Singh - 320Kbps.mp3",
    artist:"Atif aslam",
    title:"Kabhi jo Badal",
    img:"image2.jpg",

},
{
    Name:"Tu Hi Haqeeqat - Tum Mile 320Kbps.mp3",
    artist:"Arman malik",
    title:" Tu hi Haqeeqat",
    img:"image3.jpg"
}];




let isplaying=false;
const playmusic=()=>{
    isplaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
    
}
const pausemusic=()=>{
    isplaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

Play.addEventListener('click',()=>{
    
    if(isplaying==false)
    {
        playmusic();
        console.log("play");
    }
    else{
        pausemusic();
        console.log("pause");
    }

});
// chnaging the music data
let index=0;
loadsongs=(songs)=>{
   title.innerText=songs.title;
   artist.innerText=songs.artist;
   music.src=`${songs.Name}`;
   img.src=`${songs.img}`;
   

};
function playing(){
    loadsongs(songs[0]);
   
    

};
playing();

next.addEventListener('click',()=>{
    progress.style.display="none";
    index=(index+1)%songs.length;
    loadsongs(songs[index]);
    playmusic();

});
prev.addEventListener('click',()=>{
    if(index==0){
        index=songs.length;
    }
    else{
        index=index-1;
    }
    loadsongs(songs[index]);
    playmusic();

});
// progresbar work
music.addEventListener("timeupdate",(Even)=>{
    
     const current=Even.srcElement.currentTime;
     const duration=Even.srcElement.duration;
// current time and duration work
    const totdurmin=Math.floor(duration/60);
    const totdursec=Math.floor(duration%60);
    const spotdurmin=Math.floor(current/60);
    const spotdursec=Math.floor(current%60);

    if(spotdursec<10)
    {

        spotcurrent.innerText=`${spotdurmin}:0${spotdursec}`
    }
    else{

        spotcurrent.innerText=`${spotdurmin}:${spotdursec}`
    }
// tot duration work
    if(totdursec<10)
    {

        spotduration.innerText=`${totdurmin}:0${totdursec}`
    }
    else{

        spotduration.innerText=`${totdurmin}:${totdursec}`
    }

    
// progress bar width work
     let progresstime=(current/duration)*100;
     progress.style.width=`${progresstime}%`;
     progress.style.display="block";
    });
// progress onclick
progressdiv.addEventListener("click",(event)=>{
    // console.log(event);
    const moveprogress=(event.offsetX/event.srcElement.clientWidth)*music.duration;
    music.currentTime=moveprogress;
});