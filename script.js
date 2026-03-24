// Attendance
function markAttendance() {
  let name = document.getElementById("studentName").value;
  if (name === "") return;

  let li = document.createElement("li");
  li.textContent = name + " ✅ Present";

  document.getElementById("attendanceList").appendChild(li);
  document.getElementById("studentName").value = "";
}

// Gate Pass
function requestGatePass() {
  let name = document.getElementById("gateStudent").value;
  if (name === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${name} - Pending 
    <button onclick="approvePass(this)">Approve</button>`;

  document.getElementById("gateList").appendChild(li);
  document.getElementById("gateStudent").value = "";
}

function approvePass(btn) {
  btn.parentElement.innerHTML = btn.parentElement.textContent.replace("Pending", "✅ Approved");
}

// Visitor Log
function addVisitor() {
  let visitor = document.getElementById("visitorName").value;
  let student = document.getElementById("visitStudent").value;

  if (visitor === "" || student === "") return;

  let li = document.createElement("li");
  li.textContent = `${visitor} visiting ${student}`;

  document.getElementById("visitorList").appendChild(li);

  document.getElementById("visitorName").value = "";
  document.getElementById("visitStudent").value = "";
}

// Mess Feedback
function addFeedback() {
  let feedback = document.getElementById("feedbackText").value;
  if (feedback === "") return;

  let li = document.createElement("li");
  li.textContent = feedback;

  document.getElementById("feedbackList").appendChild(li);
  document.getElementById("feedbackText").value = "";
}