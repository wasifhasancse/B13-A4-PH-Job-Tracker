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
const rejectedJobShow = document.getElementById("rejected-job-show");
const jobCards = Array.from(allJobShow.children);
const noJobsCard = allJobShow.nextElementSibling;

let activeFilter = "all";

function normalStatus(statusText) {
  let trimmed = statusText.trim().toLowerCase();
  let result = "";
  let lastWasSpace = false;

  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      if (!lastWasSpace) {
        result += " ";
        lastWasSpace = true;
      }
    } else {
      result += trimmed[i];
      lastWasSpace = false;
    }
  }

  return result;
}

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

function setActiveTabStyle(activeButton) {
  const allButtons = [allJobBtn, interviewJobBtn, rejectedJobBtn];

  allButtons.forEach((button) => {
    button.classList.remove("text-white", "border-blue-500", "bg-blue-500");
    button.classList.add("text-gray-600", "border-gray-200", "bg-gray-50");
  });

  activeButton.classList.remove(
    "text-gray-600",
    "border-gray-200",
    "bg-gray-50",
  );
  activeButton.classList.add("text-white", "border-blue-500", "bg-blue-500");
}

function applyFilter(filterName) {
  activeFilter = filterName;
  let visibleCount = 0;

  jobCards.forEach((card) => {
    const cardStatus = getCardStatus(card);
    const showCase = filterName === "all" || cardStatus === filterName;

    card.classList.toggle("hidden", !showCase);

    if (showCase) {
      visibleCount += 1;
    }
  });

  availableJobCount.innerText = visibleCount;

  if (noJobsCard) {
    noJobsCard.classList.toggle("hidden", visibleCount !== 0);
  }
}

document
  .getElementById("job-show-buttons")
  .addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button");
    if (!clickedButton) {
      return;
    }

    if (clickedButton.id === "all-job-button") {
      setActiveTabStyle(allJobBtn);
      applyFilter("all");
      return;
    }

    if (clickedButton.id === "interview-job-button") {
      setActiveTabStyle(interviewJobBtn);
      applyFilter("interview");
      return;
    }

    if (clickedButton.id === "rejected-job-button") {
      setActiveTabStyle(rejectedJobBtn);
      applyFilter("rejected");
    }
  });

  allJobShow.addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button");
    if (!clickedButton) {
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

  if (interviewJobShow.parentElement) {
    interviewJobShow.parentElement.classList.add("hidden");
  }

  if (rejectedJobShow.parentElement) {
    rejectedJobShow.parentElement.classList.add("hidden");
  }

  updateDashboardCounts();
  setActiveTabStyle(allJobBtn);
  applyFilter("all");
