jQuery(document).ready(function($) {


  const data_list = [
    {
      'link':'./img/1.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'A confused grizzly bear in calculus class.'
    },
    {
      'link':'./img/2.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'A person riding a horse in the sunrise.'
    },
    {
      'link':'./img/3.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'Coffee pouring into a cup.'
    },
    {
      'link':'./img/4.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'An astronaut is riding a horse in the space in a photorealistic style'
    },
    {
      'link':'./img/5.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'Robot dancing in times square'
    },
    {
      'link':'./img/6.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'Drone flythrough of a tropical jungle covered in snow.'
    },
    {
      'link':'./img/7.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'A beautiful sunrise on mars, Curiosity rover. High definition, timelapse, dramatic colors.'
    },
    {
      'link':'./img/8.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'Wooden figurine walking on a treadmill made out of exercise mat'
    },
    {
      'link':'./img/9.gif',
      'name': 'MagicVideo',
      'header': '',
      'text':'Sprouts in the shape of text ’Imagen’ coming out of a fairytale book.'
    }
  ]


  for (data of data_list) {
  if (document.getElementById('image-container')!= null){
    document.getElementById('image-container').innerHTML += `
  

    <a href=${data.link} data-lightbox="image-1"><div class="thumb">
        <div class="hover-effect">
            <div class="hover-content">
                 <h1 id="onDesktop">${data.name} <em>${data.header}</em></h1>
                 <p id="onDesktop">${data.text}</p>
            </div>
        </div>
        <div class="image">
        <img src=${data.link} alt="imgae not in path">
    </div>
    </div></a>

`;

  }

}

	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });


});

