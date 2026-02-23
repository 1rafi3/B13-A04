## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans of 1 : getElementById only captures an id, getElementsByClassName captures many elements by class-name and querySelector is more like an getElementById it returns first element within the document that matches the CSS selector , and querySelectorAll returns a NodeList of all elements that matches the CSS selector 

### 2. How do you create and insert a new element into the DOM?

Ans of 2 : there are several steps I follow to create and insert a new element into the DOM 

				1. I target the part where I want to insert the new element and catch the part by id 
				2. I create an element by createElement('');
				3. then inside that element I give innerText or innerHTML 
				4. then appendChild to the element that i have captured by id 

### 3. What is Event Bubbling? And how does it work?

Ans of 3 : Event bubbling is a JavaScript Behaviour where an event (like a click or a tap or hover something like that) triggers a child element that travels through its parent element triggering their handler too 

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans of 4 : Instead of adding an event lisenter to many child, adding one event listener to parent and than handling events by event bubbling is called event delegation. 
usefullness : only one event lintener instead of many , cleaner code , less repeatation , easier to manage 

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans of 5 : preventDefault() prevent browser action or we can say it stops browser default behaviour like reloding submission etc ...
		   stopPropagation() prevent event bubbling (like going up or down) 

---