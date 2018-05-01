class Project {
	constructor(img, title, description, url, git = 'https://github.com/Atileon'){
    this.title= title; // Title of project
	this.prImg = img; //Background image for the slide
    this.prUrl = url; // Url of the project
    this.gitUrl = git; // github url
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

        let linksEl = document.createElement('div');
        linksEl.className = 'slide-links';

        let wwwEl = document.createElement('a');
        wwwEl.setAttribute('href',this.prUrl);
        wwwEl.setAttribute('target','_blank');
        linksEl.appendChild(wwwEl);

        let iWorld = document.createElement('i');
        iWorld.className = 'fas fa-globe fa-3x';
        wwwEl.appendChild(iWorld);

        let gitEl = document.createElement('a');
        gitEl.setAttribute('href',this.gitUrl);
        gitEl.setAttribute('target','_blank');
        linksEl.appendChild(gitEl);

        let iGit = document.createElement('i');
        iGit.className = 'fab fa-github fa-3x';
        gitEl.appendChild(iGit);

        // ===== Elements to append ====
        container.appendChild(divEl);
        divEl.appendChild(titleEl);
        divEl.appendChild(descEl);
        divEl.appendChild(linksEl);
        
    }
    // createLinks(){
    //     let container = document.getElementById(this.container);
    //     let divEl = document.createElement('div');
    //     divEl.className = 'slide-links';
    //     container.appendChild(divEl);

    //     // If repo exists
    //     if(this.gitUrl !== null){
    //         let gitEl = document.createElement('p');
    //         gitEl.className = 'git-url';
    //         gitEl.textContent = this.gitUrl;
    //         divEl.appendChild(gitEl);// append to divEl
    //     }else{
    //         return;
    //     }
        
    // }
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
p1.prImg = 'https://picsum.photos/g/700/500?gravity=east';
p1.prUrl = 'https://www.avacoding.com';
// p1.gitUrl = 'https://github.com/Atileon/avaSlider';
p1.title = 'Title 1';
p1.prDesc = 'Nulla non metus non urna malesuada finibus. Suspendisse fringilla ex non magna porttitor, sodales pellentesque libero rhoncus. Aliquam nec egestas neque. Vivamus eu tellus sapien. Vivamus at hendrerit nulla, in semper odio. Nulla faucibus aliquet dolor vitae interdum. Sed sed felis quis justo posuere ultrices ac.';
projects.push(p1); //this push the object into the projects array
console.log(projects);

let p2= new Project();
p2.prImg = 'https://picsum.photos/g/700/500?gravity=center';
p2.prUrl = 'https://www.avacoding.com';
p2.gitUrl = 'https://github.com/Atileon/avaSlider';
p2.title = 'Title 2';
p2.prDesc = 'Sed facilisis lacus rutrum consequat consequat. Proin felis magna, gravida in venenatis a, rhoncus eget arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lobortis ex sed tortor pellentesque, ac sollicitudin sapien cursus. In hac habitasse platea dictumst.';
projects.push(p2);

let p3 = new Project();
p3.prImg = 'https://picsum.photos/g/700/500?gravity=west';
p3.prUrl = 'https://www.avacoding.com';
p3.gitUrl = 'https://github.com/Atileon/avaSlider';
p3.title = 'Title 3';
p3.prDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra finibus sapien, in pulvinar neque lobortis in. In tempor consectetur euismod. Sed ipsum nulla, molestie vitae blandit et, finibus vitae ipsum. Nam mattis tellus ligula, nec lacinia velit varius eu. Curabitur malesuada velit massa, eget lacinia neque condimentum in. Integer metus .';
projects.push(p3);

let p4 = new Project();
p4.prImg = 'https://picsum.photos/g/700/500?gravity=north';
p4.prUrl = 'https://www.avacoding.com';
p4.gitUrl = 'https://github.com/Atileon/avaSlider';
p4.title = 'Title 4';
p4.prDesc = 'Sed ipsum nulla, molestie vitae blandit et, finibus vitae ipsum. Nam mattis tellus ligula, nec lacinia velit varius eu. Curabitur malesuada velit massa, eget lacinia neque condimentum in. Integer metus metus, euismod dapibus sodales eu, fringilla vitae felis. Fusce quis turpis id ante porta efficitur. ';
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
    slidesonDom[0].style.display = 'flex';
}
startSlider();


function prev(){
    console.log('previous');
    reset();
    console.log(current);
    current --;
    console.log(current);
    slidesonDom[current].style.display = 'flex';
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
    slidesonDom[current].style.display = 'flex';
    
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