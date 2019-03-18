class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    //console.log(this.element);
  }
  
  createElement(title){
    let i = 0;
    let newNote = document.createElement('div');//joris zijn kado
    //passen den html aan met nieuwe info
    newNote.innerHTML = `<p>${this.title}</p><br><a href="#" class="card-remove">Remove</a>`;
    newNote.classList.add("card"); 
    
    let myPromise = new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        let a = document.getElementsByTagName("a");
        // "bind" bind functie note dat geselecteerd is, functie werkt enkel op die dan
        a[i].addEventListener('click', this.remove.bind(newNote));
        // functie om uit local storage te deleten samen met titel
        a[i].addEventListener('click', this.deleteNoteFromStorage.bind(title));
        i++;
      }, 1000);
    });
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let notearray = JSON.parse(localStorage.getItem('notes'));

    if (notearray === null) {
      notearray = [];
      notearray.push(this.title);
      localStorage.setItem('notes', JSON.stringify(notearray));
      
    } else {
      notearray.push(this.title);
      localStorage.setItem('notes', JSON.stringify(notearray));
    }

  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
   let removenote = this;

   removenote.style.transition = "opacity 1s";
   removenote.style.opacity = 0;
    setTimeout(() =>{
      removenote.style.display = "none";
    }, 1100);

    //console.log("verwijderd");
  } 
  
  removestorage() {
    let notearray = JSON.parse(localStorage.getItem("notes"));
    let click = notearray.indexOf(this);
    notearray.splice(click, 1);
    localStorage.setItem("notes", JSON.stringify(notearray));
  }

 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
     this.btnAdd = document.querySelector("#btnAddNote"); 
     this.btnAdd.addEventListener("click", this.createNote.bind(this));
     let input = document.querySelector("#textAddNote");

     input.addEventListener("keyup", (e) => {
      if(e.keyCode == 13){
        this.createNote();
      } 
      e.preventDefault();
    });

     console.log("test");
     this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    const info = JSON.parse(localStorage.getItem('notes'));

      if (info.length > 0) {
        info.forEach(notes => {
          let note = new Note(notes);
          note.add();
        });
      }
    
  }
   
  createNote(e){
    let nieuwenote = document.querySelector("#txtAddNote").value;
    let note = new Note(nieuwenote);
    // HINT🤩
    note.add();
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector("#txtAddNote").value = "";
  }
  
}

let app = new App();
