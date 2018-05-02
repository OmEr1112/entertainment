import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
// let date = new Date();
// // console.log(date);
// let dateString = date.toLocaleDateString();
// let date1 = new Date().toJSON().slice(0,10);
// document.getElementById('date').textContent = `DATE: ${dateString}`;

const m_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

const d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

const myDate = new Date();
myDate.setDate(myDate.getDate());
const curr_date = myDate.getDate();
const curr_month = myDate.getMonth();
const curr_day  = myDate.getDay();
const curr_year = myDate.getFullYear();
document.getElementById('date').textContent = d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + curr_year;


const videos = document.querySelectorAll('.videosList li');
const videoPlayer = document.querySelector('.videos iframe');
// const nextVideo = "path/of/next/video.mp4";
// const videoPlayer = document.getElementById('videoPlayer');


function videoChange(n) {
  videoPlayer.src = videos[n].firstElementChild.firstElementChild.dataset.video;

  // videoPlayer.onended = function(){
  //     videoPlayer.src = nextVideo;
  // }
}


videos[0].addEventListener('click', e => videoChange(0));
videos[1].addEventListener('click', e => videoChange(1));
videos[2].addEventListener('click', e => videoChange(2));
videos[3].addEventListener('click', e => videoChange(3));

videoChange(0);



// image slider


let bannerStatus = 1;
let timer = 3000;
let auto = true;

    window.onload = function() {
      bannerLoop();
    }
    
    let startBannerLoop;
    if (auto === true) {
        startBannerLoop = setInterval(function() {
        bannerLoop();
      }, timer);
    }

    document.getElementById("imageSection").onmouseenter = function() {
      clearInterval(startBannerLoop);
    }

    document.getElementById("imageSection").onmouseleave = function() {
      if (auto === true) {
        startBannerLoop = setInterval(function(){
          bannerLoop();
        }, timer);
      }
    }

    document.getElementById("imgbanbtn-prev").onclick = function() {
      bannerLoop2();
    }

    document.getElementById("imgbanbtn-next").onclick = function() {
      bannerLoop();
    }

    
    function bannerLoop() {
      const image1 = document.getElementById('image1');
      const image2 = document.getElementById('image2');
      const image3 = document.getElementById('image3');


      if (bannerStatus === 1) {

        image2.style.opacity = "0";
        setTimeout(function() {
          image1.style.transform = "translate3d(0, 0, 0)";
          image1.style.zIndex = "1000";
          
          image2.style.transform = "translate3d(583px, 0, 0)";
          image2.style.zIndex = "1500";
          
          image3.style.transform = "translate3d(-583px, 0, 0)";
          image3.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image2.style.opacity = "1";
        }, 700);
        
        bannerStatus = 2;

      } else if (bannerStatus === 2) {

        image3.style.opacity = "0";
        setTimeout(function() {
          image2.style.transform = "translate3d(0, 0, 0)";
          image2.style.zIndex = "1000";
          
          image3.style.transform = "translate3d(583px, 0, 0)";
          image3.style.zIndex = "1500";
          
          image1.style.transform = "translate3d(-583px, 0, 0)";
          image1.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image3.style.opacity = "1";
        }, 700);

        bannerStatus = 3;

      } else if (bannerStatus === 3) {

        image1.style.opacity = "0";
        setTimeout(function() {
          image3.style.transform = "translate3d(0, 0, 0)";
          image3.style.zIndex = "1000";
          
          image1.style.transform = "translate3d(583px, 0, 0)";
          image1.style.zIndex = "1500";
          
          image2.style.transform = "translate3d(-583px, 0, 0)";
          image2.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image1.style.opacity = "1";
        }, 700);

        bannerStatus = 1;
      }
    }



    function bannerLoop2() {
      const image1 = document.getElementById('image1');
      const image2 = document.getElementById('image2');
      const image3 = document.getElementById('image3');
      

      if (bannerStatus === 1) {

        image1.style.opacity = "0";
        setTimeout(function() {
          image2.style.transform = "translate3d(0, 0, 0)";
          image2.style.zIndex = "1000";
          
          image1.style.transform = "translate3d(-583px, 0, 0)";
          image1.style.zIndex = "1500";
          
          image3.style.transform = "translate3d(583px, 0, 0)";
          image3.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image1.style.opacity = "1";
        }, 700);

        bannerStatus = 3;

        } else if (bannerStatus === 2) {

        image2.style.opacity = "0";
        setTimeout(function() {
          image3.style.transform = "translate3d(0, 0, 0)";
          image3.style.zIndex = "1000";
          
          image2.style.transform = "translate3d(-583px, 0, 0)";
          image2.style.zIndex = "1500";
          
          image1.style.transform = "translate3d(583px, 0, 0)";
          image1.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image2.style.opacity = "1";
        }, 700);

        bannerStatus = 1;

        } else if (bannerStatus === 3) {

        image3.style.opacity = "0";
        setTimeout(function() {
          image1.style.transform = "translate3d(0, 0, 0)";
          image1.style.zIndex = "1000";
          
          image3.style.transform = "translate3d(-583px, 0, 0)";
          image3.style.zIndex = "1500";
          
          image2.style.transform = "translate3d(583px, 0, 0)";
          image2.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image3.style.opacity = "1";
        }, 700);

        bannerStatus = 2;
        }
    }



// waypoints

const ele = document.getElementsByClassName("dlSection")[0];
ele.style.opacity = 0;
ele.style.transform = "scale(1.1)";

new Waypoint({
  element: ele,
  handler: function() {
    ele.style.opacity = 1;
    ele.style.transform = "scale(1)";
    ele.style.transition = "all 1s ease";
  },
  offset: "62%"
});

const ele1 = document.getElementById("mainFooter");
ele1.style.opacity = 0;
ele1.style.transform = "scale(1.1)";

new Waypoint({
  element: ele1,
  handler: function() {
    ele1.style.opacity = 1;
    ele1.style.transition = "all 1000ms ease";
    ele1.style.transform = "scale(1)";
  },
  offset: "88%"
});
