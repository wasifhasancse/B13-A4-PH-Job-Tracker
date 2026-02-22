// length count 
function getLengthCount(element) {
  return element.children.length;
}

function setStatusBadge(status) {
  document.getElementById("job-status").innerText = status;
  document.getElementById("job-status").classList.remove("text-gray-800");
  
  if (status === "Interview") {
    document.getElementById("job-status")
      .classList.remove("text-red-400", "border-red-300", "bg-red-100");
    document.getElementById("job-status")
      .classList.add("text-green-400", "border-green-300", "bg-green-100");
  } else if (status === "Rejected") {
    document.getElementById("job-status")
      .classList.remove("text-green-400", "border-green-300", "bg-green-100");
    document.getElementById("job-status")
      .classList.add("text-red-400", "border-red-300", "bg-red-100");
  }
}