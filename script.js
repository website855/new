document.addEventListener("DOMContentLoaded", () => {
    const randomMatchBtn = document.getElementById("randomMatchBtn");
    const codeMatchBtn = document.getElementById("codeMatchBtn");
    const matchCodeInput = document.getElementById("matchCode");
    const matchResult = document.getElementById("matchResult");

    // Function to generate a random match ID
    function generateMatchID() {
        return "MATCH-" + Math.floor(1000 + Math.random() * 9000); // Random 4-digit match ID
    }

    // Handling random match button click
    randomMatchBtn.addEventListener("click", () => {
        const randomMatchID = generateMatchID();
        matchResult.innerHTML = `🎉 You are matched with a player! Match ID: <strong>${randomMatchID}</strong>`;
        matchResult.style.color = "green";
    });

    // Handling match by code button click
    codeMatchBtn.addEventListener("click", () => {
        const enteredCode = matchCodeInput.value.trim();

        if (enteredCode === "") {
            matchResult.innerHTML = "⚠️ Please enter a match code.";
            matchResult.style.color = "red";
            return;
        }

        // Simulating match found scenario (In a real case, this would check against a database)
        if (enteredCode.startsWith("MATCH-") && enteredCode.length === 10) {
            matchResult.innerHTML = `✅ Match found! You are connected with another player.`;
            matchResult.style.color = "green";
        } else {
            matchResult.innerHTML = `❌ Invalid match code. Please try again.`;
            matchResult.style.color = "red";
        }
    });
});
