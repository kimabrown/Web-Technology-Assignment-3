/*item numbers*/
var item = {
    0: "Daniel Plan", 1: "The Exercise Cure", 2: "What To Expect", 3: "The First Year",
    4: "Talk To Kids", 5: "Hands Free Mama", 6: "Soul Healing", 7: "Wheat Belly"};

/*review cart button*/
function reviewCart()
{
    if (document.cookie.length <= 0)
    {
        alert("Empty Cart - Please Buy Something First");
        return;
    }
    else
    {
        window.location.href = "shopping_cart.html";
        document.getElementById("cart").innerHTML = tableStr;
    }
}

/*add to cart button*/
function addToCart()
{
    var pname = document.getElementsByTagName("h1")[0].innerText;
    var pic = document.getElementsByTagName("img")[0].getAttribute("src");
    var price = document.getElementsByTagName("h4")[0].innerText.replace(/Price: \$/, "");
    var quantity = document.getElementsByName("quantity")[0].value;
    var confirmCart = confirm("Add Item " + pname + " To Cart?");
    if (confirmCart)
    {
        addCookie(pname, price + "," + quantity + "," + pic)
        return true;
    }
    return false;
}

function addCookie(key, value)
{
    document.cookie = key + "=" + value;
}

/*set item data when added to cart*/
function setStorage(str)
{
    if (str == "danielForm")
    {
        var price = 2.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "exerciseForm")
    {
        var price = 1.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "expectForm")
    {
        var price = 3.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "expect1Form")
    {
        var price = 1.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "kidsForm")
    {
        var price = 1.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "mamaForm")
    {
        var price = 0.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "soulForm")
    {
        var price = 1.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
    if (str == "wheatForm")
    {
        var price = 0.99;
        var quantity = parseInt(document[str].quantity.value);
        var totalPrice = price * quantity;
        var value = quantity + " " + price + " " + totalPrice;
        sessionStorage.setItem(value);
        return;
    }
}

/*cart table*/
function cartTable() {
    var totalPrice = 0;
    var myCookie = document.cookie;

    var carray = myCookie.split("; ");

    for (var i = 0; i < carray.length; i++)
    {
        var temp = carray[i].split("=");
        var name = temp[0];
        var id = getItemsID(name);

        if (id < 0 || id > item.length)
        { return false; }

        var info = temp[1].split(',');
        var price = parseFloat(info[0]);
        var quantity = parseInt(info[1]);
        var imgpath = info[2];

        var itemRow = document.getElementById('cart').insertRow(-1);
        var idCell = itemRow.insertCell(-1);
        var itemCell = itemRow.insertCell(-1);
        var priceCell = itemRow.insertCell(-1);
        var quantityCell = itemRow.insertCell(-1);
        var totalItemCell = itemRow.insertCell(-1);

        idCell.innerText = id;
        itemCell.innerHTML = "<h4>" + name + "</h4><img src='" + imgpath + "'/><input type='button' name='remove' value='Remove' onclick='removeFromCart(this)'/>";
        priceCell.innerText = '$' + price;
        quantityCell.innerText = quantity;
        totalItemCell.innerText = '$' + (quantity * price).toFixed(2);

        totalPrice += (quantity * price);
    }

    var itemRow = document.getElementById('cart').insertRow(-1);
    var itemCell = itemRow.insertCell(-1);
    var totalPriceCell = itemRow.insertCell(-1);

    itemCell.innerText = "TOTAL";
    totalPriceCell.innerText = "$" + totalPrice.toFixed(2);
    totalPriceCell.setAttribute("colspan", "4");
    totalPriceCell.style = "text-align: right;"
}

function removeFromCart(event)
{
    console.log(event);
    var name = event.parentElement.getElementsByTagName("h4")[0].innerText;

    if (confirm("Remove " + name + " from cart?")) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
        window.location.reload();
    }
    else { return false;}
}

function getItemsID(name)
{
    console.log(item);
    for (var i = 0; i < 8; i++)
    {
        if (name == item[i]) { return i;}
    }

    return -1;
}

//*****************************
function hasNumber(myString) {
    return /\d/.test(myString);
}

/*images for shopping cart*/
function cartImages(str) {
    if (str.includes("Daniel Plan")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/health/healthPlan.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"Daniel Plan\")'>Remove</button>";
        return str
    }
    if (str.includes("The Exercise Cure")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/health/NoExercise.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"The Exercise Cure\")'>Remove</button>";
        return str;
    }
    if (str.includes("What To Expect")) {
        console.log("gets here" + str);
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/parenting/expect.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"What To Expect\")'>Remove</button>";
        return str;
    }
    if (str.includes("The First Year")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/parenting/expect1.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"The First Year\")'>Remove</button>";
        return str;
    }
    if (str.includes("Talk To Kids")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/parenting/talk.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"Talk To Kids\")'>Remove</button>";
        return str
    }
    if (str.includes("Hands Free Mama")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/parenting/Mama.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"Hands Free Mama\")'>Remove</button>";
        return str;
    }
    if (str.includes("Soul Healing")) {
        console.log("gets here" + str);
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/health/Soul.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"Soul Healing\")'>Remove</button>";
        return str;
    }
    if (str.includes("Wheat Belly")) {
        str += "<br> <img style='width:80px; height:80px;' src='images/e-books/health/WheatBelly.jpg' alt='no img'> <br>";
        str += "<button onclick=";
        str += "'removeSessionItem(\"Wheat Belly\")'>Remove</button>";
        return str;
    }
}

/*checkout*/ 
function checkoutTable() {
    var runningTotal = 0;

    getSessionObj()
    console.log(item);

    var str = "<table border='1'>";

    str += "<tr> <th>Item# </th>  <th>Product Name </th> <th>Quantity </th> <th>Price </th> <th> Total Price</th> "
    for (property in item) {
        if (hasNumber(item[property])) {
            var keyStr = item[property].substring(0, item[property].indexOf("/"));

            keyStr = checkoutImages(keyStr);

            var valString = item[property].substring(item[property].indexOf("/") + 1);
            var values = valString.split(" ");
            values[2] = values[2].trim();
            values[2] = parseFloat(values[2]);
            var num = parseFloat(values[2]).toFixed(2) / 1;

            runningTotal += num;
            str += "<tr> <td>" + property + " </td> <th>" + keyStr + " </td> <td>" + values[0] + " </td> <td>$" + values[1] + " </td> <td> $" + parseFloat(values[2]).toFixed(2) + "</td>  </tr>";
        }
    }

    var sum = 0;

    str += "<tr> <th>Item# </th>  <th>Product Name </th> <th>Quantity </th> <th>Price </th> <th> Total Price</th></tr>";
    str += "<tr> <table border='1'><tr><td style='width:100%;'> Total: </td> <td>$" + parseFloat(runningTotal).toFixed(2) + "</td>  </tr></table></tr>"
    str += "</table>";

    document.getElementById("displayCart").innerHTML = str;

    tableStr = str;
}

/*credit card number validation*/
function validation() {
    var number = document.getElementById("cc").value;
    number = number.trim();

    if (isNaN(number)) {
        alert("not a number");
    }
    else {
        var sum = 0;

        for (var i = 0; i < number.length; i++) {
            var digits = parseInt(number.charAt(i));

            if (digits % 2 == 0) {
                digits = digits * 2;
            }
            else
                digits = digits;

            sum = sum + digits;
        }


        if ((sum % 10) == 0)
            return true;
        else
            window.alert("Card Number Invalid!");
    }
}
/*
var pics = new Array(8);
pics[0] = "images/e-books/health/healthPlan.jpg";
pics[1] = "images/e-books/health/NoExercise.jpg";
pics[2] = "images/e-books/parenting/expect.jpg";
pics[3] = "images/e-books/parenting/expect1.jpg";
pics[4] = "images/e-books/parenting/talk.jpg";
pics[5] = "images/e-books/parenting/Mama.jpg";
pics[6] = "images/e-books/health/Soul.jpg";
pics[7] = "images/e-books/health/WheatBelly.jpg";


//Array for labels
var labels = new Array(8);
labels[0] = "Daniel Plan";
labels[1] = "The Exercise Cure";
labels[2] = "What To Expect";
labels[3] = "The First Year";
labels[4] = "Talk To Kids";
labels[5] = "Hands Free Mama";
labels[6] = "Soul Healing";
labels[7] = "Wheat Belly";

var c = 0;
var timer = 0;
*/
