function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var listKey = 0;
var ulKey = 999;
var button = document.createElement("button");
button.innerHTML = "Add Book";
button.setAttribute("id", "modal-btn");
document.getElementById("root").appendChild(button);

var modalDiv = document.createElement("div");
setAttributes(modalDiv,{"id": "book-modal"});
document.getElementById("root").appendChild(modalDiv);
document.getElementById("book-modal").className = "modal";

var modalContent = document.createElement("div");
setAttributes(modalContent,{ "id": "modal-content"});
document.getElementById("book-modal").appendChild(modalContent);
document.getElementById("modal-content").className = "modal-content";

var modalBody = document.createElement("div");
setAttributes(modalBody,{ "id": "book-details"});
document.getElementById("modal-content").appendChild(modalBody);

var bookForm = document.createElement("FORM");
setAttributes(bookForm, { id: "addBook" });
modalBody.appendChild(bookForm);
document.getElementById("addBook").className = "modal-body";

var title = document.createElement("INPUT");
setAttributes(title, {
  "type": "text",
  "value": "",
  "name": "bName",
  "id": "title",
  "placeholder": "Book Name",
});
document.getElementById("addBook").appendChild(title);
title.setAttribute("required", "");

var author = document.createElement("INPUT");
setAttributes(author, {
  "type": "text",
  "value": "",
  "name": "aName",
  "id": "author-name",
  "placeholder": "Author Name",
});
document.getElementById("addBook").appendChild(author);

var genre = document.createElement("INPUT");
setAttributes(genre, {
  "type": "text",
  "value": "",
  "name": "gName",
  "id": "genre-name",
  "placeholder": "Genre",
});
document.getElementById("addBook").appendChild(genre);

var submit = document.createElement("INPUT");
setAttributes(submit, {
  "type": "submit",
  "value": "Submit",
});
document.getElementById("addBook").appendChild(submit);

var list = document.getElementById("root");
var newOl = document.createElement("ol");
list.appendChild(newOl);
setAttributes(newOl, { id: "bookLists" });

bookForm.addEventListener('submit', e => {
  e.preventDefault();
  listKey += 1;
  ulKey += 1;
  var datas = document.getElementById("addBook").children[0].value;
  var newLis = document.createElement("li");
  setAttributes(newLis, { id: listKey });
  var newUls = document.createElement("ul");
  setAttributes(newUls, { id: ulKey });
  var bookDatas = document.createTextNode(datas);
  newLis.appendChild(bookDatas);
  document.getElementById("bookLists").appendChild(newLis);
  document.getElementById(listKey).appendChild(newUls);

  for (i = 1; i <= 2; i++) {
    var data = document.getElementById("addBook").children[i].value;
    var newLi = document.createElement("li");
    if(data == ""){
      var bookData = document.createTextNode("No Data Available");
    }
    else{
      var bookData = document.createTextNode(data);
    }
    newLi.appendChild(bookData);
    document.getElementById(ulKey).appendChild(newLi);
  }
    modal.style.display = 'none';
    document.getElementById('title').value=''; 
    document.getElementById('author-name').value=''; 
    document.getElementById('genre-name').value=''; 
})

const modal = document.querySelector('#book-modal');
const modalBtn = document.querySelector('#modal-btn');

modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}