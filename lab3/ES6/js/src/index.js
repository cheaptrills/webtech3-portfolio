class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    //console.log(this.element);
  }
  
  createElement(title){
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
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
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
     console.log("test");
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
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
  }
  
}

let app = new App();
