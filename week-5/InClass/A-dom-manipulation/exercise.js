/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
/*console.log(document.querySelectorAll("p"))

/!*    2. the first div element node
    --> should log the ".site-header" node*!/
console.log(document.querySelector("div.site-header"))

/!*    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*!/
console.log(document.querySelector("div#jumbotron-text"))

/!*    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3*!/
console.log(document.querySelectorAll(".primary-content p"))*/



/*Task 2
======*/

/*When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"*/
document.querySelector("#alertBtn").addEventListener("click", function () {
    alert("Thanks for visiting Bikes for Refugees!")
})



/*Task 3
=======*/

/*Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.*/
document.querySelector("#bgrChangeBtn").addEventListener("click", function () {
    document.body.classList.add("red")
});



/*Task 4
======*/

/*When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."*/
document.querySelector("#addTextBtn").addEventListener("click", function () {
    const createParagraph = document.createElement(("p"));
    createParagraph.textContent = "Read more below";
    document.body.append(createParagraph);

})




/*Task 5
======*/

/*When the 'Larger links!' button is clicked, the text of all links on the page should increase.*/
