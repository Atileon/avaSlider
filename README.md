# The AvA slider
## Another slider on web but this is mine!...my precious!

So, this is a simple slider (responsive) that I've created just to show slides for future projects that would be deployed on my site(under construction)

---
## So, How it works?

Well, It's based on class object that would create the slide for any new object created. Let see some code examples

```javascript
    // Assuming that I want to create Slides for my projects to show...

    constructor(img, title, description, url, git = 'https://github.com/Atileon'){
    this.title= title; // Title of project
    this.prImg = img; //Background image for the slide
    this.prUrl = url; // Url of the project
    this.gitUrl = git; // github url
    this.prDesc= description; // Short description of project
    this.container = 'avaSlider';// Set the container Id
    //The container gotta be created on html to get in the slider
    // CSS are based on this container
    }
```
Once you've declare all arguments, lets create the slide with the following method:

```javascript
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
        //This create the div to contain links
        let linksEl = document.createElement('div');
        linksEl.className = 'slide-links';
        // This create an 'a'element for the website link
        let wwwEl = document.createElement('a');
        wwwEl.setAttribute('href',this.prUrl);
        wwwEl.setAttribute('target','_blank');
        linksEl.appendChild(wwwEl);
        // the website link
        let iWorld = document.createElement('i');
        iWorld.className = 'fas fa-globe fa-3x';
        wwwEl.appendChild(iWorld);
        // This create another 'a' element this time for github link
        let gitEl = document.createElement('a');
        gitEl.setAttribute('href',this.gitUrl);
        gitEl.setAttribute('target','_blank');
        linksEl.appendChild(gitEl);
        // the github link
        let iGit = document.createElement('i');
        iGit.className = 'fab fa-github fa-3x';
        gitEl.appendChild(iGit);

        // ===== Elements to append ====
        container.appendChild(divEl);
        divEl.appendChild(titleEl);
        divEl.appendChild(descEl);
        divEl.appendChild(linksEl);
    }
```
## Create Objects (project slides in this case) : 

First things first
```javascript
    const projects =[]; // Here we push the slides ready to be created
```

You would create as many objects(slides) as you want declaring in this way:
```javascript
    let p1= new Project();
    p1.prImg = 'https://picsum.photos/g/700/500?gravity=east';
    p1.prUrl = 'https://www.avacoding.com';
    p1.gitUrl = 'https://github.com/Atileon/avaSlider';
    p1.title = 'Title 1';
    p1.prDesc = 'Nulla non metus non urna malesuada finibus. Suspendisse fringilla ex non magna porttitor, sodales pellentesque libero rhoncus. Aliquam nec egestas neque. Vivamus eu tellus sapien. Vivamus at hendrerit nulla, in semper odio. Nulla faucibus aliquet dolor vitae interdum. Sed sed felis quis justo posuere ultrices ac.';
    projects.push(p1); //this push the object into the projects array
```

