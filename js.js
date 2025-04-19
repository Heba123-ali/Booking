let submitBtn = document.getElementById('submit');
let message = document.getElementById('message');

function showMessage(text, textColor, bgColor) {
    message.textContent = text;
    message.style.color = textColor;
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    message.style.backgroundColor = bgColor;
    message.style.padding = "10px";
    message.style.borderRadius = "10px";
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userName = document.getElementById("name").value;
    let useAge = document.getElementById("age").value;
    let phoneNumber = document.getElementById("phone").value;
    let userGender = document.getElementById('gender').value;
    let userDate = document.getElementById('date').value;

    if(userName === "" || useAge === "" || phoneNumber === "" || userGender === "" || userDate === "") {
        showMessage("من فضلك املئي جميع الحقول", "#e74c3c", "#beb0af");
    }
    else if ( isNaN(useAge) || useAge < 1 || useAge > 100) {
        showMessage("الرجاء إدخال عمر صحيح", "#e74c3c", "#beb0af");
    }
    else if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
        showMessage("الرجاء إدخال رقم هاتف صحيح", "#e74c3c", "#beb0af");
    }
    else if (userName.length < 3 || userName.length > 20) {
        showMessage("الرجاء إدخال اسم صحيح", "#e74c3c", "#beb0af");
    }
    else {
        showMessage("تم ارسال البيانات بنجاح", "#fff", "#2ecc71");
    }
});

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("date").value = "";
    message.innerHTML = "";
});
