class Project {
	constructor(img, url,title, description){
    this.title= title; // Title of project
	this.prImg = img; //Background image for the slide
	this.prUrl = url; // Url of the project 
    this.prDesc= description; // Short description of project
    this.container = 'avaSlider';// Set the container Id
	}
	test(){//this was just to test, feel free to delete this method
	console.log(this.prImg);
	console.log('=====');
	console.log(this.prUrl);
	console.log('=====');
	console.log(this.prDesc);	
	}
	createSlide(){
        //This method create elements to be insert on DOM takin as refer the 
        // main container declared at constructor
        // Container must be created on HTML with the id 'avaSlider'
        let container = document.getElementById(this.container);
        // The slide and background of project (slide)
		let divEl = document.createElement('div');
		divEl.className = 'slide';
        divEl.style.backgroundImage = `url('${this.prImg}')`;
        // The title header
        let titleEl = document.createElement('h2');
        titleEl.className = 'slide-title';
        titleEl.textContent = this.title;
        // Description paragraph
        let descEl = document.createElement('p');
        descEl.className = 'slide-description';
        descEl.textContent = this.prDesc;
        // ===== Elements to append ====
        container.appendChild(divEl);
        divEl.appendChild(titleEl);
        divEl.appendChild(descEl);
        
    }
    
}



// Global variables

const projects =[]; // Here we push the slides ready to be created

let prevBtn= document.getElementById('prev');// Previous slide Button
let nextBtn= document.getElementById('next');// Next slide Button
let current = 0;// Current slide displayed
//The following variable gets all the elements with 'slide' class as an array
let slidesonDom = document.getElementsByClassName('slide');
console.log(slidesonDom.length+' elements(slides) by now');

let p1= new Project();
p1.prImg = 'https://fakeimg.pl/1000x500/f17c07,125/fff/?text=one';
p1.prUrl = 'www.p1.com';
p1.title = 'Title 1';
p1.prDesc = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dict';
projects.push(p1);
console.log(projects);

let p2= new Project();
p2.prImg = 'https://fakeimg.pl/1000x500/?text=two';
p2.prUrl = 'www.p2.com';
p2.title = 'Title 2';
p2.prDesc = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dict';
projects.push(p2);

let p3 = new Project();
p3.prImg = 'https://fakeimg.pl/1000x500/?text=three';
p3.prUrl = 'p3.com';
p3.title = 'Title 3';
p3.prDesc = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dict';
projects.push(p3);

let p4 = new Project();
p4.prImg = 'https://fakeimg.pl/1000x500/?text=four';
p4.prUrl = 'p4.com';
p4.title = 'Title 4';
p4.prDesc = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dict';
projects.push(p4);


function createSliders(){
    for(let project of projects){
        // project.test();
        project.createSlide();
    }
    console.log('Slides created on DOM!');
}
createSliders();// Now checking on the DOM 
console.log(slidesonDom.length+' elements has been created!');

// Hide all elements created by createSlider() function
function reset(){
    for(let slide of slidesonDom){
        slide.style.display = 'none';
    }
}
// This will be the first slide to show 
function startSlider(){
    reset();
    slidesonDom[0].style.display = 'block';
}
startSlider();


function prev(){
    console.log('previous');
    reset();
    console.log(current);
    current --;
    console.log(current);
    slidesonDom[current].style.display = 'block';
    console.log(current);
    
}
prevBtn.addEventListener('click',function(){
    if( current === 0){
        current = slidesonDom.length;
    }
    prev();
    
});


function next(){
    console.log('next');
    reset();
    console.log(current);
    current ++;
    console.log(current);
    slidesonDom[current].style.display = 'block';
    
}
nextBtn.addEventListener('click',function(){
    
    if(current === slidesonDom.length - 1){
        current = -1; // -1 because at next iteration it turns 0 that return the first slide
    }
    next();
});
// ===== shape length ====
// this just to calculate the length of stroke on svg arrows
let shape = document.querySelector('.next-arrow');
let shapeLength= shape.getTotalLength();
console.log(shapeLength);