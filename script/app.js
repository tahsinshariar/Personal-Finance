document.addEventListener("DOMContentLoaded", () => {
    let income = document.querySelector(".income");
    let food = document.querySelector(".food");
    let rent = document.querySelector(".rent");
    let clothes = document.querySelector(".clothes");
    let totalExpenses = document.querySelector(".total");
    let balance = document.querySelector(".balance");
    let saveInput = document.querySelector(".save");
    let savingAmount = document.querySelector(".saving");
    let savingBalance = document.querySelector(".saving-balance");
    let calButton = document.querySelector(".calculation");
    let saveButton = document.querySelector(".save-button");


    calButton.addEventListener('click', () => {

        let incomeAmount = parseInt(income.value) || 0;
        let foodAmount = parseInt(food.value) || 0;
        let rentAmount = parseInt(rent.value) || 0;
        let clothesAmount = parseInt(clothes.value) || 0;

        let expense = foodAmount + rentAmount + clothesAmount;

        totalExpenses.textContent = expense.toFixed(2);
        balance.textContent = (incomeAmount - expense).toFixed(2);

        let buttonElement = document.querySelector(".button");

        if (incomeAmount < expense) {
            buttonElement.style.color = "red";
            buttonElement.textContent = "Income is not valid";
            balance.textContent = 0;
            totalExpenses.textContent = 0;
        } else {
            if (buttonElement) {
                buttonElement.remove();
            }
        }
    });

    saveButton.addEventListener('click', () => {
        
        let savePercentage = parseInt(saveInput.value) || 0;

        let balanceAmount = parseFloat(balance.textContent);
        let savings = (balanceAmount * savePercentage) / 100;
        savingAmount.textContent = savings.toFixed(2);
        savingBalance.textContent = (balanceAmount - savings).toFixed(2);

        let buttonElement = document.querySelector(".two-button");
        if(savePercentage > 100){
            savingAmount.textContent = 0;
            savingBalance.textContent = 0;
            buttonElement.style.color = "red";
            buttonElement.textContent = "Save Percentage is wrong";
        } else {
            if (buttonElement) {
                buttonElement.remove();
            }
        }
    });
});
