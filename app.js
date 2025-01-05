let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let delbtns = document.querySelectorAll(".delete");

//add items
btn.addEventListener("click", function () {
  // console.log("Button clicked");
  // console.log(input.value + " Added");

  //add input value to the List Now

  let item = document.createElement("li");
  if (input.value != "") {
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";
  }
  else{
    validationMessage("Enter")
  }

  let delbtn = document.createElement("button");
  delbtn.innerText = "X";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);
});

ul.addEventListener("click", function (e) {
  // console.dir(e.target.nodeName);
  //we delete when nodename is button else if it is list we dont delete it.
  //hence
  if (e.target.nodeName == "BUTTON") {
    // console.log("D CLicked")
    let listItems = e.target.parentElement;
    listItems.remove();
  }
});

// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function() {
//         console.log("Element deleted !");
//         let par =this.parentElement;
//         console.log(this.parentElement);
//         this.parentElement.remove();

//     })
// }
