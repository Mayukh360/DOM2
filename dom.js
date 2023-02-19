// // let itemList=document.querySelector("#items")
// // //parent node of ul is 'main' id
// // console.log(itemList.parentNode)
// // itemList.parentNode.style.background="grey"

// // let itemList=document.querySelector("#items")
// //parent element of ul is 'main' id
// // console.log(itemList.parentElement)
// // itemList.parentElement.style.background="grey"

// //childelement
// // console.log(itemList.children)

// //first element child
// // console.log(itemList.firstElementChild)
// // itemList.firstElementChild.textContent="Hello"


// //Last element child
// // itemList.lastElementChild.textContent="Shiva"

// //next element Siblings
// // console.log(itemList.nextElementSibling)

// //previous element sibling
// // console.log(itemList.previousElementSibling)


// //------------******************************************************************-------------------------------------

// //Create Element

// //create div
// let newDiv=document.createElement("div")

// //Adding Class
// newDiv.className="Hello"

// //Adding id
// newDiv.id="hello1"

// //Adding attributes
// newDiv.setAttribute="title"

// //Creating text node
// let newDivText=document.createTextNode("Java World")

// //Add text to div
// newDiv.appendChild(newDivText)

// //Putting div in the DOM ***
// let put=document.querySelector('header .container')  //Header tag class container
// let h1=document.querySelector("header h1")

// put.insertBefore(newDiv , h1)

//create div
let newDiv=document.createElement("div")

//Adding Class
newDiv.className="Hello"

//Adding id
newDiv.id="hello1"

//Adding attributes
newDiv.setAttribute="title"

//Creating text node
let newDivText=document.createTextNode("Java World")

//Add text to div
newDiv.appendChild(newDivText)


let put=document.querySelector("ul .list-group-item")
let h1=document.querySelector("ul h1")
put.insertBefore(newDiv , h1)