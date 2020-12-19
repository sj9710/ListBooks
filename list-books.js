var modalDiv = document.createElement("div");
var br = document.createElement("br");
var ul = document.createElement("ul");
// var newLi = document.createElement("li");
var button = document.createElement("button");
var p = document.createElement("p");
var modal = document.createElement("showModal");
var list = document.getElementById("root");
list.appendChild(ul);
// ul.appendChild(newLi);
list.appendChild(button);
button.innerHTML = "Add Book";
button.setAttribute("id", "modal");
button.onclick = function () {
  console.log("hii");
};
// list.appendChild(div);
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
setAttributes(ul, { id: "bookList" });

var bookForm = document.createElement("FORM");
// bookForm.setAttribute("id", "addBook");
setAttributes(bookForm, { id: "addBook" });
list.appendChild(bookForm);
document.getElementById("addBook").className = "bookForm";

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
  "placeholder": "Author Name",
});
document.getElementById("addBook").appendChild(author);

var genre = document.createElement("INPUT");
setAttributes(genre, {
  "type": "text",
  "value": "",
  "name": "aName",
  "placeholder": "Genre",
});
document.getElementById("addBook").appendChild(genre);

var submit = document.createElement("INPUT");
setAttributes(submit, {
  "type": "submit",
  "value": "Submit",
  "onClick": "onSubmit()",
});
document.getElementById("addBook").appendChild(submit);

bookForm.addEventListener('submit', e => {
  e.preventDefault();
  for (i = 0; i < 3; i++) {
    var data = document.getElementById("addBook").children[i].value;
    var newLi = document.createElement("li");
    var bookData = document.createTextNode(data);
    newLi.appendChild(bookData);
    document.getElementById("bookList").appendChild(newLi);
  }
});
document.body.appendChild(modalDiv);
