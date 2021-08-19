// Module-27.1 (17/8/2021): Module Overview and shopping cart increase case count
/* 
document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; 
    caseInput.value = parseInt(caseNumber) + 1;
    // console.log(caseNumber);
});

// Module-27.2 (17/8/2021):shopping cart handle decrease and update price
document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; 
    caseInput.value = parseInt(caseNumber) - 1;
     //console.log(caseNumber);
}); 
*/
// Module-27.2 
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value; 
        if(isIncreasing == true){
            productNumber = parseInt(productNumber) + 1;
        }
        else if(productNumber > 0){
            productNumber = parseInt(productNumber) - 1;
        }
        productInput.value = productNumber
        // update total 
        const productTotal = document.getElementById(product + '-total');
        productTotal.innerText = productNumber * price;
        // calculate Total
         calculateTotal();
        


}
// handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
}); 

// Module-27.3: Calculate phone cost using the same shared function
//handle phone increase decrease events 
 document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});

// Module-27.4 Get all product sub total cost, tax and grand total
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
} 

// Module-27.5 Pin matcher overview, Generate pin and display it goto new folder