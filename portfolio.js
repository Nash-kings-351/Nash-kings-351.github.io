const toggleBtn =document.getElementsByClassName('toggle')[0]
const navbarLinks =document.getElementsByClassName('navbar-links')[0]
const nav = document.querySelector(".navbar");
const NavTop = nav.offsetTop;
toggleBtn.addEventListener('click',()=>
	{
	navbarLinks.classList.toggle('active')
	}
	)
 
function fixnavbar()
{
    if(window.scrollY >= NavTop)
    {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    }
    else 
    {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", fixnavbar);
// adds and removes selected class when the section is reached with the scroll
  $(document).bind('scroll',function(e){
      $('section').each(function(){
          if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
            window.location.hash = $(this).attr('id');
if($(this).attr('id') == "Home"){
              $('a.nav').removeClass('selected');
              $("#Nav1").toggleClass('selected')
            } else if($(this).attr('id') == "Projects"){
              $('a.nav').removeClass('selected');
              $("#Nav2").toggleClass('selected')
            } else if($(this).attr('id') == "Resume"){
              $('a.nav').removeClass('selected');
              $("#Nav3").toggleClass('selected')
            } else if($(this).attr('id') == "Contact"){
              $('a.nav').removeClass('selected');
              $("#Nav4").toggleClass('selected')
            }
          }
      });
  });