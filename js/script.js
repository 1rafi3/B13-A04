let interviewArr = [];
let rejectedArr = [];


let totalInterview = document.getElementById("total-interview");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

allCards = document.getElementById('cards');
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

const allFiterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


function btnController(id) {

    // console.log(id);  

    allFiterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");

    const btn = document.getElementById(id);
    btn.classList.add("text-white", "bg-[#3B82F6]");

    if(id == 'interview-filter-btn') {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
    } else if(id == 'all-filter-btn') {
        allCards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    } else if(id == 'rejected-filter-btn') {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
    }
}



const mainContainer = document.querySelector("main");

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn-interview")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".job-name").innerText;
        const position = parentNode.querySelector(".job-title").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const appliedStatus = parentNode.querySelector(".apply-verification-button").innerText;
        console.log(appliedStatus);

        parentNode.querySelector(".apply-verification-button").innerText = "Interview";

        // console.log(companyName,position,description,salary);

        const cardInfo = {
            companyName,
            position,
            description,
            salary
        }
        // console.log(cardInfo);

        const existingCompany = interviewArr.find(item => item.companyName == cardInfo.companyName);
        

        if (!existingCompany) {
            interviewArr.push(cardInfo);
        }
        renderInterviewCards()
        // console.log(interviewArr);
        calculateCounts();
    }
    else if (event.target.classList.contains("btn-rejected")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".job-name").innerText;
        const position = parentNode.querySelector(".job-title").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const appliedStatus = parentNode.querySelector(".apply-verification-button").innerText;
        console.log(appliedStatus);

        parentNode.querySelector(".apply-verification-button").innerText = "Rejected";

        // console.log(companyName,position,description,salary);

        const cardInfo = {
            companyName,
            position,
            description,
            salary
        }
        // console.log(cardInfo);

        const existingCompany = rejectedArr.find(item => item.companyName == cardInfo.companyName);
        

        if (!existingCompany) {
            rejectedArr.push(cardInfo);
        }
        renderRejectedCards()
        // console.log(interviewArr);
        calculateCounts();
    }
})


const filteredSection = document.getElementById("filtered-section");


function renderInterviewCards() {
    filteredSection.innerHTML = "";

    for (let i of interviewArr) {
        console.log(i);
        let div = document.createElement("div");
        div.className = "card bg-white p-6";
        div.innerHTML = `<div>
                        <div class="flex justify-between">
                            <div class="mb-5">
                                <h1 class="font-semibold job-name text-[18px]">${i.companyName}</h1>
                                <p class="text-[#64748B] job-title text-sm">${i.position}</p>
                            </div>
                            <div class="opacity-70 btn-delete hover:opacity-100 hover:cursor-pointer"><i class="fa-regular fa-trash-can"></i></div>
                        </div>
                        <p class="text-[#64748B] salary text-sm">${i.salary}</p>
                        <button class="btn mt-5 apply-verification-button mb-2 text bg-[#EEF4FF]">Interview</button>
                        <p class="text-sm description text-[#323B49]">${i.description}</p>
                        <div>
                            <button
                                class="btn btn-interview border-[#10B981] text-[#10B981] bg-white hover:bg-[#10B981] mt-5 hover:text-white">Interview</button>
                            <button
                                class="btn btn-rejected border-[#EF4444] text-[#EF4444] bg-white hover:bg-[#EF4444] mt-5 hover:text-white">Rejected</button>
                        </div>
                    </div>`
        filteredSection.appendChild(div);
    }
}
function renderRejectedCards() {
    filteredSection.innerHTML = "";

    for (let i of rejectedArr) {
        console.log(i);
        let div = document.createElement("div");
        div.className = "card bg-white p-6";
        div.innerHTML = `<div>
                        <div class="flex justify-between">
                            <div class="mb-5">
                                <h1 class="font-semibold job-name text-[18px]">${i.companyName}</h1>
                                <p class="text-[#64748B] job-title text-sm">${i.position}</p>
                            </div>
                            <div class="opacity-70 btn-delete hover:opacity-100 hover:cursor-pointer"><i class="fa-regular fa-trash-can"></i></div>
                        </div>
                        <p class="text-[#64748B] salary text-sm">${i.salary}</p>
                        <button class="btn mt-5 apply-verification-button mb-2 text bg-[#EEF4FF]">Interview</button>
                        <p class="text-sm description text-[#323B49]">${i.description}</p>
                        <div>
                            <button
                                class="btn btn-interview border-[#10B981] text-[#10B981] bg-white hover:bg-[#10B981] mt-5 hover:text-white">Interview</button>
                            <button
                                class="btn btn-rejected border-[#EF4444] text-[#EF4444] bg-white hover:bg-[#EF4444] mt-5 hover:text-white">Rejected</button>
                        </div>
                    </div>`
        filteredSection.appendChild(div);
    }
}