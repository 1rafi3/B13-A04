let interviewArr = [];
let rejectedArr = [];


let totalInterview = document.getElementById("total-interview");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count"); 

total = document.getElementById('cards').children.length;

console.log(total);
// console.log(totalInterview.innerText);
// console.log(interviewCount.innerText);
// console.log(rejectedCount.innerText);


function calculateCounts() {
    totalInterview.innerText = total;
    interviewCount.innerText = interviewArr.length;
    rejectedCount.innerText = rejectedArr.length;   
}
calculateCounts();

// button controller 

function btnController(id){
    
}