let submitBtn = document.getElementById('submit');
let message = document.getElementById('message');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userName = document.getElementById("name").value;
    let useAge = document.getElementById("age").value;
    let phoneNumber = document.getElementById("phone").value;
    let userGender = document.getElementById('gender').value;
    let userDate = document.getElementById('date').value;

    if(userName === "" || useAge === "" || phoneNumber === "" || userGender === "" || userDate === "") {
        message.textContent = "من فضلك املئي جميع الحقول";
        message.style.color = "#e74c3c";
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.style.backgroundColor = "#beb0af";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
    }
    else if ( isNaN(useAge) || useAge < 1 || useAge > 100) {
        message.textContent = "الرجاء إدخال عمر صحيح";
        message.style.color = "#e74c3c";
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.style.backgroundColor = "#beb0af";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        
    } else if (phoneNumber.length > 11 || phoneNumber.length <11 || isNaN(phoneNumber)) {
        message.textContent = "الرجاء إدخال رقم هاتف صحيح";
        message.style.color = "#e74c3c";
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.style.backgroundColor = "#beb0af";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
    }
    else if (userName.length < 3 || userName.length > 20) {
        message.textContent = "الرجاء إدخال اسم صحيح";
        message.style.color = "#e74c3c";
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.style.backgroundColor = "#beb0af";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
    }
    else {
        message.textContent = "تم ارسال البيانات بنجاح";
        message.style.color = "#fff";
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.style.backgroundColor = "#2ecc71";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
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