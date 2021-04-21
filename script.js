function sendMoney(){
    var paisaMillega = document.getElementById("paisaMillega").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var sendKaro = document.getElementById("sendKaro").value;
  var findSenderBankAccount = sendKaro + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserBankAccount = paisaMillega + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${paisaMillega}@email.com.`)

    //    Transaction History
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} is sent from sender with Email-id ${sendKaro}@email.com to
        recepient with Email-id ${paisaMillega}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var mainElement = document.getElementById("transaction-body");
        mainElement.insertBefore(createPTag, mainElement.firstChild);
    }
 }


document.getElementById('button').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = "flex";
    });

document.querySelector('.close').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = "none";
    });

document.getElementById('buton').addEventListener('click',
    function () {
        document.querySelector('.body-modal').style.display = "flex";
    });

document.querySelector('.closeme').addEventListener('click',
    function () {
        document.querySelector('.body-modal').style.display = "none";
    });