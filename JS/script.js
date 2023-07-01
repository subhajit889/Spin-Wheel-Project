let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spin-btn');
let value = Math.ceil(Math.random() * 3600);
let isFirstSpin = true;

const sections = ["1","5","9","8","0","4","2","0"];

spinBtn.onclick = function () {
    if (isFirstSpin) {
        // Handle first spin
        wheel.style.transform = "rotate(" + value + "deg)";
        value += Math.ceil(Math.random() * 3600);
        
        isFirstSpin = false;
        
        // Display "Please Try Again" alert after completing the first spin
        setTimeout(function() {
            alert("Please Try again!");
        }, 5200);
        
        return;
    } else {
        // Regular spin after the first spin
        wheel.style.transform = "rotate(" + value + "deg)";
        value += Math.ceil(Math.random() * 3600);

        spinBtn.disabled = true;

        const sectionAngle = 360 / sections.length;
        const targetedSection = Math.floor(value / sectionAngle) % sections.length;

        setTimeout(function () {
            if (sections[targetedSection] === "0") {
                alert("Sorry, you didn't win this time. Please try again!");
            } else {
                alert("Congratulations! You won a gift....................!");
            }
            spinBtn.disabled = false;
        }, 5200);
    }
};

