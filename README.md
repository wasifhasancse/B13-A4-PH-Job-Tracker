## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById:
i) Here we can select an element by id
ii) it returns us only single element
iii) if no element found, it return us null
iv) example: document.getElementById("title");

getElementsByClassName:
i) Here we can select elements by class name and also selet multiple element with same class name
ii) it return us an array type object as HTMLCollection
iii) if no element found, it return empty array as HTMLCollection
iv) example: document.getElementById("card");

querySelector / querySelectorAll:
i) Here we can select one element with querySelector and we can select multiple element with querySelectorAll
ii) in querySelector if there is multiple element, it return only 1st element. In querySelectorAll it returns an array type as NodeList
iii) in querySelector if no element found, it return null. In querySelectorAll it returns an empty array type as NodeList
iv) example: document.querySelector("#card-title"); and document.querySelectorAll(".card-box");


### 2. How do you create and insert a new element into the DOM?
Answer: 
at first we can select the element where we want to create a new element
const cardContainer = document.getElementById("card-container");
now we can create the new element, 
const card = document.createElement("div");
card.innerHtml = `
<h2>the card title</h2>
<p>the card discription</p>';
now, we need to add the new element in the parent element.
cardContainer.appendChild(card);
now in the html output we can see the new element.

### 3. What is Event Bubbling? And how does it work?
Answer: 
if we select a target and the event is start form the target element with upward to it's parent elements, it's called Event Bubbling. 
when we select a target element, we go into the target by capture phase and then the bubbling phase start, this come upward to it's parent and upwart untill it reach the root parent.
work:
when we click a target the click event start
then the event goes up to the parent element
then it goes upward to body
then it goes upward to document

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: 
Event Delegation is one type of event when when we select a parent element and make event listener in the parent elemet for handle event of it's child element. 
usefull:
i) the parent element handle the event for it's child element
ii) easy to handle child elements.
iii) using event.terget we can handle terget element
iv) it also works for dynamically added children elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault():
i) we can use it to stop browser default action
ii) it doesn't stop bubbling event
iii) we can use it in form or links

stopPropagation():
i) we can use it to stop bubbling event
ii) it doesn't stop the browser default action
iii) it can control the flow of events in DOM
