// length count
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const availableJobCount = document.getElementById("available-job-count");

// dashboard button select
const allJobBtn = document.getElementById("all-job-button");
const interviewJobBtn = document.getElementById("interview-job-button");
const rejectedJobBtn = document.getElementById("rejected-job-button");

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

// job showing button toggle event
document.getElementById("job-show-buttons").addEventListener("click", function (event) {
    const clickedButton = event.target;

    allJobBtn.classList.add(
      "text-gray-600",
      "border-2",
      "border-gray-200",
      "bg-gray-50",
    );
    interviewJobBtn.classList.add(
      "text-gray-600",
      "border-2",
      "border-gray-200",
      "bg-gray-50",
    );
    rejectedJobBtn.classList.add(
      "text-gray-600",
      "border-2",
      "border-gray-200",
      "bg-gray-50",
    );

    clickedButton.classList.remove(
      "text-gray-600",
      "border-2",
      "border-gray-200",
      "bg-gray-50",
    );
    clickedButton.classList.add(
      "text-white",
      "border-2",
      "border-blue-500",
      "bg-blue-500",
    );
    console.log("clicked", event.target);
    console.log("clicked", event.target.id);
  });

