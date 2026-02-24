function updateDashboardCounts() {
  totalCount.innerText = jobCards.length;
  interviewCount.innerText = jobCards.filter(
    (card) => getCardStatus(card) === "interview",
  ).length;
  rejectedCount.innerText = jobCards.filter(
    (card) => getCardStatus(card) === "rejected",
  ).length;
}

function normalStatus(statusText) {
  return statusText.trim().toLowerCase();
}


function getCardStatus(card) {
  const statusBadge = card.querySelector("p.uppercase");
  if (!statusBadge) {
    return "not applied";
  }

  return normalStatus(statusBadge.innerText);
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