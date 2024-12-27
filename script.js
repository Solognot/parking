const scriptURL = "https://script.google.com/macros/s/AKfycbxDnbP1qx8FQuz6DbQTCNH66wbe9b2fQkVUtu1WSytZFFDbN1ZB5Q61JHTcREDmVZt2gA/exec";

document.getElementById("parking-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const action = document.getElementById("action").value;
    const responseDiv = document.getElementById("response");

    const data = { name, action };

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        const result = await response.json();
        responseDiv.textContent = result.message;
    } catch (error) {
        responseDiv.textContent = "Error: Could not connect to the server.";
    }
});