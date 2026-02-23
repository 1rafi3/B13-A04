let interviewArr = [];
let rejectedArr = [];
let currentStatus = "all";


let totalInterview = document.getElementById("total-interview");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let totalJobs = document.getElementById("total-jobs");
let totalJobsHead = document.getElementById("total-jobs-head");
console.log(totalJobsHead.innerText);

allCards = document.getElementById('cards');
total = document.getElementById('cards').children.length;

// console.log(total);
// console.log(totalInterview.innerText);
// console.log(interviewCount.innerText);
// console.log(rejectedCount.innerText);

function updateTotalJobs() {
    total = document.getElementById('cards').children.length;
    totalJobs.innerText = total;
    // console.log(total);
}

updateTotalJobs();

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
    currentStatus = id;

    allFiterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");

    const btn = document.getElementById(id);
    btn.classList.add("text-white", "bg-[#3B82F6]");

    if (id == 'interview-filter-btn') {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewCards();
        updateJobHeaderForInterview();
    } else if (id == 'all-filter-btn') {
        allCards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        totalJobsHead.innerText = `${total} jobs`;
        updateTotalJobs();
    } else if (id == 'rejected-filter-btn') {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectedCards();
        updateJobHeaderForRejected();
    }
}



const mainContainer = document.getElementById("main-container");

mainContainer.addEventListener('click', function (event) {
    // delete button a click korle oi card ta remove hoye jabe

    if (event.target.classList.contains("btn-delete")) {
        const card = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(card);
        card.remove();
        
        updateTotalJobs();
        calculateCounts();

    }
});

function updateJobHeaderForInterview() {
    const totalJobsCount = document.querySelectorAll("#cards .card").length;
    const interviewCountNow = interviewArr.length;
    const totalJobsHead = document.getElementById("total-jobs-head");
    totalJobsHead.innerText = `${interviewCountNow} out of ${totalJobsCount} jobs`;
}
function updateJobHeaderForRejected() {
    const totalJobsCount = document.querySelectorAll("#cards .card").length;
    const rejectedCountNow = rejectedArr.length;
    const totalJobsHead = document.getElementById("total-jobs-head");
    totalJobsHead.innerText = `${rejectedCountNow} out of ${totalJobsCount} jobs`;
}


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
        parentNode.querySelector(".apply-verification-button").classList.remove("bg-[#EEF4FF]");
        parentNode.querySelector(".apply-verification-button").classList.add("border-[#10B981]", "text-[#10B981]", "bg-white","size-min");
        updateAllSectionStatus(companyName, "Interview");

        // console.log(companyName,position,description,salary);

        const cardInfo = {
            companyName,
            position,
            description,
            appliedStatus: 'Interview',
            salary
        }
        // console.log(cardInfo);

        const existingCompany = interviewArr.find(item => item.companyName == cardInfo.companyName);


        if (!existingCompany) {
            interviewArr.push(cardInfo);
        }

        rejectedArr = rejectedArr.filter(item => item.companyName != cardInfo.companyName);

        calculateCounts();

        if (currentStatus == 'rejected-filter-btn') {
            renderRejectedCards();
        }

        

        // renderInterviewCards()
        // console.log(interviewArr);
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
        parentNode.querySelector(".apply-verification-button").classList.remove("bg-[#EEF4FF]");    
        parentNode.querySelector(".apply-verification-button").classList.add("border-[#EF4444]", "text-[#EF4444]", "bg-white","size-min"); 
        updateAllSectionStatus(companyName, "Rejected");

        // console.log(companyName,position,description,salary);

        const cardInfo = {
            companyName,
            position,
            description,
            appliedStatus: 'Rejected',
            salary
        }
        // console.log(cardInfo);

        const existingCompany = rejectedArr.find(item => item.companyName == cardInfo.companyName);


        if (!existingCompany) {
            rejectedArr.push(cardInfo);
        }

        interviewArr = interviewArr.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterviewCards();
        }
        // else if(currentStatus == 'rejected-filter-btn') {
        //     renderRejectedCards();
        // }

        calculateCounts();
    }


})

// all section update er jonno 
function updateAllSectionStatus(companyName, status) {
    const cards = document.querySelectorAll("#cards .card");

    cards.forEach(card => {
        const name = card.querySelector(".job-name").innerText;

        if (name === companyName) {
            card.querySelector(".apply-verification-button").innerText = status;
        }
    });
}


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
                        <button class="btn mt-5 apply-verification-button mb-2 border-[#10B981] text-[#10B981] bg-white size-min">Interview</button>
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
                        <button class="btn mt-5 apply-verification-button mb-2 border-[#EF4444] text-[#EF4444] bg-white size-min">Rejected</button>
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