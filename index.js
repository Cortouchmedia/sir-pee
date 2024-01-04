// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'bx bx-plus') {
            icon.className = 'bx bx-minus';
        } else {
            icon.className = 'bx bx-plus';
        }
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block"; 
}

closebtn.addEventListener('click', closeNav)



const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });


  
	
	// Access the testimonials
	let testSlide = document.querySelectorAll('.testItem');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	// Add click event to the indicators
	function switchTest(currentTest){
		currentTest.classList.add('active');
		var testId = currentTest.getAttribute('attr');
		if(testId > counter){
			testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(testId == counter){return;}
		else{
			testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
		}
		indicators();
	}

	// Add and remove active class from the indicators
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// Code for auto sliding
	function slideNext(){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= testSlide.length - 1){
			counter = 0;
		}
		else{
			counter++;
		}
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}
	function autoSliding(){
		deleteInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	// Stop auto sliding when mouse is over the indicators
	const container = document.querySelector('.indicators');
	container.addEventListener('mouseover', pause);
	function pause(){
		clearInterval(deleteInterval);
	}

	// Resume sliding when mouse is out of the indicators
	container.addEventListener('mouseout', autoSliding);

