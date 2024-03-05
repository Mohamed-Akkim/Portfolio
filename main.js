
window.addEventListener('load', function() {
    moveContentToTop();
});


 const skillElements = document.querySelectorAll('.skill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateProgress(entry.target);
      }
    });
  }, { threshold: 0.8 });

  skillElements.forEach(skillElement => {
    observer.observe(skillElement);
  });



  function sendemail(){
    var from_name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("message").value;
    var templateParams = {
          from_name: from_name,
          email_id: email,
          phone_no:phone,
          message: message
        };
  
        emailjs.send('service_0fbvrau', 'template_ea299qj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       window.alert("Sent successfully!");
       
    })
  
  }

  var typed = new Typed(".text", {
    strings: ["WEB DEVELOPER", "FRONT END DEVELOPER", "WEB DESIGNER","BACK END DEVELOPER", "FULL STACK DEVELOPER"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

  // Function to update progress bars
  function updateProgress(skillElement) {
    const progressBar = skillElement.querySelector('.progress-bar');
    const valueNow = progressBar.getAttribute('aria-valuenow');
    progressBar.style.width = valueNow + '%';
  }


  
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const containers = document.querySelectorAll('.show');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Remove 'active' class from all toggle buttons and containers
        buttons.forEach(btn => btn.classList.remove('active'));
        containers.forEach(container => container.classList.remove('active'));
  
        // Add 'active' class to the clicked button
        button.classList.add('active');
        // Add 'active' class to the respective container
        containers[index].classList.add('active');
      });
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.gradient-border');
    const containers = document.querySelectorAll('.list');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Remove 'active' class from all toggle buttons and containers
        buttons.forEach(btn => btn.classList.remove('active'));
        containers.forEach(container => container.classList.remove('active'));
  
        // Add 'active' class to the clicked button
        button.classList.add('active');
        // Add 'active' class to the respective container
        containers[index].classList.add('active');
      });
    });
  });  


  
  function moveContentToTop() {
    var content = document.querySelector('.moon');
    content.style.transform = 'translateX(-50%) translateY(-250%)';
}
if (window.innerWidth > 575) {
window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var screenHeight = window.innerHeight-50;

  // Check if scrolled less than screen height
  if (scrolled < screenHeight) {
      document.body.classList.add('dark-mode');
      document.getElementById('navbar').classList.add('transparent');
  } else {
      // Remove the class if scrolled greater than screen height
      document.body.classList.remove('dark-mode');
      document.getElementById('navbar').classList.remove('transparent');
  }
});
  }else {
    // Remove the class if the screen width is less than or equal to the threshold
    document.body.classList.remove('dark-mode');
    document.getElementById('navbar').classList.add('navbackground');
}




(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();
    

})(jQuery);



