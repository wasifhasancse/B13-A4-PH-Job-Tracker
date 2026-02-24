// length count select
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const availableJobCount = document.getElementById("available-job-count");
const filterJobCount = document.getElementById("filter-job-count");

// dashboard button select
const allJobBtn = document.getElementById("all-job-button");
const interviewJobBtn = document.getElementById("interview-job-button");
const rejectedJobBtn = document.getElementById("rejected-job-button");
const allJobShow = document.getElementById("all-job-show");
const interviewJobShow = document.getElementById("interview-job-show");
const rejectedJobShow = document.getElementById("rejected-job-show");
const jobCards = Array.from(allJobShow.querySelectorAll(".job-card"));
const noJobsCard = document.getElementById("no-jobs-available");

let activeFilter = "all";

// update the card status badge 
function updateStatusBadgeStyle(statusBadge, status) {
  statusBadge.innerText = status;
  statusBadge.classList.remove(
    "text-blue-950",
    "border-blue-300",
    "bg-blue-100",
    "text-green-400",
    "border-green-300",
    "bg-green-100",
    "text-red-400",
    "border-red-300",
    "bg-red-100",
  );

  if (status === "Interview") {
    statusBadge.classList.add(
      "text-green-400",
      "border-green-300",
      "bg-green-100",
    );
    return;
  }

  if (status === "Rejected") {
    statusBadge.classList.add("text-red-400", "border-red-300", "bg-red-100");
    return;
  }

  statusBadge.classList.add("text-blue-950", "border-blue-300", "bg-blue-100");
}


// filter the job cards according to the selected status and update the counts and dashboard
function applyFilter(filterName) {
  activeFilter = filterName;
  let visibleCount = 0;
  const totalJobs = jobCards.length;

  jobCards.forEach((card) => {
    const cardStatus = getCardStatus(card);
    const showCase = filterName === "all" || cardStatus === filterName;

    card.classList.toggle("hidden", !showCase);

    if (showCase) {
      visibleCount += 1;
    }
  });

  if (filterName === "all") {
    filterJobCount.innerText = "";
    availableJobCount.innerText = totalJobs;
  } else {
    filterJobCount.innerText = `${visibleCount} of `;
    availableJobCount.innerText = totalJobs;
  }

  if (noJobsCard) {
    noJobsCard.classList.toggle("hidden", visibleCount !== 0);
  }
}

// toggle the job cards according to active tab and filter job cards according to status 
function showFilteredJobs(buttonId) {
  if (buttonId === "all-job-button") {
    setActiveTabStyle(allJobBtn);
    applyFilter("all");
    return;
  }

  if (buttonId === "interview-job-button") {
    setActiveTabStyle(interviewJobBtn);
    applyFilter("interview");
    return;
  }

  if (buttonId === "rejected-job-button") {
    setActiveTabStyle(rejectedJobBtn);
    applyFilter("rejected");
  }
}

window.showFilteredJobs = showFilteredJobs;

document
  .getElementById("job-show-buttons")
  .addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button");
    if (!clickedButton) {
      return;
    }

    showFilteredJobs(clickedButton.id);
  });


allJobShow.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) {
    return;
  }

  const isDeleteButton = clickedButton.id === "delete-button";
  if (isDeleteButton) {
    const selectedCard = clickedButton.closest(".job-card");
    if (!selectedCard) {
      return;
    }

    const selectedCardIndex = jobCards.indexOf(selectedCard);
    if (selectedCardIndex !== -1) {
      jobCards.splice(selectedCardIndex, 1);
    }

    selectedCard.remove();
    updateDashboardCounts();
    applyFilter(activeFilter);
    return;
  }

  const buttonLabel = normalStatus(clickedButton.innerText);
  if (buttonLabel !== "interview" && buttonLabel !== "rejected") {
    return;
  }

  const selectedCard = jobCards.find((card) => card.contains(clickedButton));
  if (!selectedCard) {
    return;
  }

  const statusBadge = selectedCard.querySelector("p.uppercase");
  if (!statusBadge) {
    return;
  }

  const nextStatus = buttonLabel === "interview" ? "Interview" : "Rejected";
  updateStatusBadgeStyle(statusBadge, nextStatus);
  updateDashboardCounts();
  applyFilter(activeFilter);
});

updateDashboardCounts();
setActiveTabStyle(allJobBtn);
applyFilter("all");
