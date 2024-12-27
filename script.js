const scriptURL = "https://script.google.com/macros/s/AKfycbxN3x4g-Ez3BO6n475FKEaJe9kW_a3Hs3m498OwzjxvYZxe0QUshaFkoNvZTg1n7xawMw/exec";

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