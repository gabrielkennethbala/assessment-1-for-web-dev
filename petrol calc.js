// this code will setup the foundation  and ensures the safe access to the dom elements
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const pricePerLiterInput = document.getElementById('price-per-liter');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDisplay = document.getElementById('result');
    
    // Add click event listener to the calculate button
    calculateBtn.addEventListener('click', calculateTotalCost);
    
    // function to be used for calculating the total cost of the petrol
    function calculateTotalCost() {
        // Get the values from the inputted numbers and convert them to numbers
        const pricePerLiter = parseFloat(pricePerLiterInput.value);
        const liters = parseFloat(litersInput.value);
        
        // Validate the number inputs
        if (isNaN(pricePerLiter) || isNaN(liters)) {
            resultDisplay.textContent = 'Please enter valid numbers';
            return;
        }
        // making sure negative numbers are indamissible
        if (pricePerLiter < 0 || liters < 0) {
            resultDisplay.textContent = 'Values cannot be negative';
            return;
        }
        
        // Calculate total
        const totalCost = pricePerLiter * liters;
        
        // Displaying results wioth decimals
        resultDisplay.textContent = `Total cost: aed ${totalCost.toFixed(2)}`;
    }
    
    // Calculate initial total when page loads which places a 0 at the start
    calculateTotalCost();
});