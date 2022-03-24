let transaction = document.querySelector('.btn');

const _ = (id) => {
    return document.getElementById(id);
  }

transaction.addEventListener("click", () => {
    let text = _("text").value;
    let number = _("amount").value;

    if(text === "" || number === ""){
        alert('Text and Number fields cannot be empty')
    }
    else{
        localStorage.setItem(text, number);
    }
});

function history() {
    let incomeCount = 0,
      expenseCount = 0;
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let text = localStorage.key(i);
        let amt = localStorage.getItem(localStorage.key(i));
        if (amt.includes("-")) {
          expenseCount += Math.abs(parseFloat(amt));
        } else {
          incomeCount += parseFloat(amt);
        }
        let list = _("list");
        let item = document.createElement("li");
        item.classList.add(`${amt.includes("-") ? `minus` : `plus`}`);
        let itext = document.createElement("p");
        itext.textContent = text;
        item.appendChild(itext);
        let iamt = document.createElement("p");
        iamt.textContent = `${amt.includes("-") ? `` : `+`}${amt}`;
        item.appendChild(iamt);
        list.appendChild(item);
      }
    }
    _("money-plus").textContent = `+$${incomeCount.toFixed(2)}`;
    _("money-minus").textContent = `-$${expenseCount.toFixed(2)}`;
    _("balance").textContent = `$${(incomeCount - expenseCount).toFixed(2)}`;
  }

 
  window.onload = () => {
      history();
  }