// length count
function getLengthCount(element) {
  return element.children.length;
}

function setStatusBadge(status) {
  document.getElementById("job-status").innerText = status;
  document.getElementById("job-status").classList.remove("text-gray-800");

  if (status === "Interview") {
    document
      .getElementById("job-status")
      .classList.remove("text-red-400", "border-red-300", "bg-red-100");
    document
      .getElementById("job-status")
      .classList.add("text-green-400", "border-green-300", "bg-green-100");
  } else if (status === "Rejected") {
    document
      .getElementById("job-status")
      .classList.remove("text-green-400", "border-green-300", "bg-green-100");
    document
      .getElementById("job-status")
      .classList.add("text-red-400", "border-red-300", "bg-red-100");
  }
}

function updateDashboardCounts() {
  totalCount.innerText = jobCards.length;
  interviewCount.innerText = jobCards.filter(
    (card) => getCardStatus(card) === "interview",
  ).length;
  rejectedCount.innerText = jobCards.filter(
    (card) => getCardStatus(card) === "rejected",
  ).length;
}

function getCardStatus(card) {
  const statusBadge = card.querySelector("p.uppercase");
  if (!statusBadge) {
    return "not applied";
  }

  return normalStatus(statusBadge.innerText);
}