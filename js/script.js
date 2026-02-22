// length count
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const availableJobCount = document.getElementById("available-job-count");

const allJobShow = document.getElementById("all-job-show");
const interviewJobShow = document.getElementById("interview-job-show");
const interviewJobShowArray = [];
const rejectedJobShow = document.getElementById("rejected-job-show");
const rejectedJobShowArray = [];


// dashboard total job count
totalCount.innerText = getLengthCount(allJobShow);

// dashboard interview job count
interviewCount.innerText = getLengthCount(interviewJobShow);

// dashboard rejected job count
rejectedCount.innerText = getLengthCount(rejectedJobShow);

// dashboard available job count
availableJobCount.innerText = getLengthCount(allJobShow);
