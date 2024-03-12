function calcPrice() {
  var price = 0;
  var x = document.getElementById("TVA").value;
  if (x == "true") {
    price += 100;
  }
  x = document.getElementById("employees").value;
  var elem = document.getElementById("employees_check");
  if (x == "true") {
    elem.style.display = "inline-block";
    x = document.getElementById("employees_no").value;
    price += x * 30;
  } else {
    elem.style.display = "none";
  }
  x = document.getElementById("fiscal_value").value;
  if (x > 0 && x <= 250000) {
    price += 100;
  } else if (x > 250000 && x <= 1000000) {
    price += 200;
  } else if (x > 1000000) {
    price += 400;
  }
  x = document.getElementById("activity").value;
  if (x == "production") {
    price += 1000;
  } else if (x == "services") {
    price += 250;
  } else if (x == "engros") {
    price += 600;
  } else if (x == "endetail") {
    price += 200;
  }
  x = document.getElementById("operations").value;
  if (x == "true") {
    price += 80;
  }
  x = document.getElementById("no_doc").value;
  if (x > 0 && x <= 30) {
    price += 100;
  } else if (x > 30 && x <= 70) {
    price += 250;
  } else if (x > 70 && x <= 100) {
    price += 350;
  } else if (x > 100 && x <= 200) {
    price += 1000;
  } else if (x > 200) {
    price += 2000;
  }
  x = document.getElementById("taxpayer").value;
  if (x == 'true') {
    price += 1000;
  }
  x = document.getElementById("price_value");
  x.innerHTML = price;
}
