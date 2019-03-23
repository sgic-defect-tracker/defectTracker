function addDefect() {
  var data = JSON.stringify({
    Defect_ID: document.getElementById("inputDefectId").value,
    Module: document.getElementById("module").value,
    Severity: document.getElementById("sample3x").value,
    Description: document.getElementById("description").value,
    Steps_to_recreate: document.getElementById("stepstorecreate").value,
    Defect_Type: document.getElementById("defectType").value,
    Priority: document.getElementById("priority").value,
    Status: document.getElementById("status").value,
    Assigned_To: document.getElementById("assignedTo").value,
    Available_in: document.getElementById("available").value,
    Comments: document.getElementById("comments").value
  });
  console.log(Comments);
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("POST", "http://localhost:3000/defect");
  xhr.setRequestHeader("Content-type", "application/json");
  console.log(this.responseText);
  xhr.send(data);
}
