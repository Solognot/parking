const scriptURL = "https://script.google.com/macros/s/AKfycbzdLjSIO2-ZpQazhdGABdlMI_7KkXykzg7MWnybM2GHqScDJJ-K6MBS2yYypZcqKE7EAQ/exec"

document.getElementById("parking-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const action = document.getElementById("action").value;
    const responseDiv = document.getElementById("response");

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
});