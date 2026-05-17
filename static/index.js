let balance = 0;

const balanceElement = document.getElementById("balance");

const form = document.getElementById("transactionForm");

const transactionList = document.getElementById("transactionList");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;

    const amount = Number(document.getElementById("amount").value);

    const type = document.getElementById("type").value;

    if(type === "income"){
        balance += amount;
    }
    else{
        balance -= amount;
    }

    balanceElement.innerText = `₹${balance}`;

    const transactionDiv = document.createElement("div");

    transactionDiv.classList.add("transaction");

    transactionDiv.classList.add(type);

    if(type === "income"){

        transactionDiv.innerHTML = `
            <span>+ ${title}</span>
            <span>₹${amount}</span>
        `;
    }
    else{

        transactionDiv.innerHTML = `
            <span>- ${title}</span>
            <span>₹${amount}</span>
        `;
    }

    transactionList.appendChild(transactionDiv);

    form.reset();

});