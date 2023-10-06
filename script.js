const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const precentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Initialize the big cup
updateBigCup()

// Add click event listeners to each small cup
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));

});

// Function to highlight cups when clicked
function highlightCups(idx) {
if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
}

    // Iterate through small cups and add or remove the "full" class to highlight them
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    
    });

    // Update the big cup based on the highlighted small cups
    updateBigCup()
}

// Function to update the big cup based on the small cups
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        precentage.style.visibility = 'hidden';
        precentage.style.height = 0;
    
    }else {
        precentage.style.visibility = 'visible';
        precentage.style.height = `${fullCups / totalCups * 330}px`;
        precentage.innerText = `${fullCups / totalCups * 100}%`;
    }
    
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }

    
}

