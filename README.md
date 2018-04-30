# The AvA slider
## Another slider on web but this is mine!...my precious!

So, this is a simple slider (responsive) that I've created just to show slides for future projects that would be deployed on my site(under construction)

---
## So, How it works?

Well, It's based on class object that would create the slide for any new object created. Let see some code examples

```javascript
    // Assuming that I want to create Slides for my projects to show...

    constructor(img, url,title, description){

    this.title= title; // Title of project
    this.prImg = img; //Background image for the slide
    this.prUrl = url; // Url of the project 
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
        // main container declared at constructor by default

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
```
## Create Objects (project slides in this case) : 

First things first
```javascript
    const projects =[]; // Here we push the slides ready to be created
```

You would create as many objects(slides) as you want declaring in this way:
```javascript
    let p1= new Project();
    p1.prImg = 'https://fakeimg.pl/1000x500/f17c07,125/fff/?text=one';
    p1.prUrl = 'www.p1.com';
    p1.title = 'Title 1';
    p1.prDesc = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dict';
    projects.push(p1); //this push the object into the projects array
```
