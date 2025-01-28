const url = window.location.href;
const urlObj = new URL(url);
const params = new URLSearchParams(urlObj.search);
const scriptURL = `https://script.google.com/macros/s/${params.get('q')}/exec`;

// Update the document link dynamically
document.getElementById("doc").innerHTML = `<a href="https://docs.google.com/spreadsheets/d/${params.get('g')}/edit?gid=0#gid=0" target="_blank">DOC</a>`;

// Function to handle the Check In/Check Out actions
async function handleAction(action) {
    const name = document.getElementById("name").value.trim();
    const responseDiv = document.getElementById("response");

    if (!name) {
        responseDiv.textContent = "Please enter your name.";
        return;
    }

    const data = { name, action };

    try {
        const response = await fetch(scriptURL, {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "text/plain;charset=utf-8" },
        });
        const result = await response.json();
        responseDiv.textContent = result.message;
    } catch (error) {
        responseDiv.textContent = "Error: Could not connect to the server.";
    }
}

// Attach event listeners to the Check In and Check Out buttons
document.querySelector(".check-in-btn").addEventListener("click", () => handleAction("check-in"));
document.querySelector(".check-out-btn").addEventListener("click", () => handleAction("check-out"));
