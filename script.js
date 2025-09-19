const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

  (function(){
    emailjs.init("oFSQppOdzV9TRSO2W"); // Replace with your Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    let message = document.getElementById("message").value.trim();
    if(message === ""){
      alert("Write your thought first");
      return;
    }

    emailjs.send("service_9derinp","template_160zd2e",{
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: message
    }).then(function(){
      alert("Message sent successfully!");
    }, function(error){
      alert("Failed to send. Please try again.");
      console.log(error);
    });
  });

