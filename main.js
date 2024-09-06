

  let grandtotal = 0;
  var order = [];

  function addtoorder(name,price) {
    console.log(name, price);
    qty = document.getElementById(name + "-quantity").value;
    if (qty != 0) {
      var total = qty * price;

      grandtotal += total;

      let order_item = `
    <tr>
      <td>${name}</<td>
      <td>${qty}</<td>
      <td>${price}</<td>
    </tr>
  `;

      document.getElementById("order-table-body").innerHTML += order_item;

      jsonorder = {
        name: name,
        quantity: qty,
        total: total,
      };

      order.push(jsonorder);

      document.getElementById("total-price").innerText = grandtotal;
    }
  }

  function favoriteadd(){
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.setItem("total", grandtotal);

    alert("Order has been saved");
  }

  function retrivefromFavorite(){
    order = JSON.parse(localStorage.getItem("order"));
    grandtotal = localStorage.getItem("total");

    document.getElementById("total-price").innerText = grandtotal;

    for (let i = 0; i < order.length; i++) {
      let order_item = `
    <tr>
      <td>${order[i].name}</<td>
      <td>${order[i].quantity}</<td>
      <td>${order[i].total}</<td>
    </tr>
  `;

      document.getElementById("order-table-body").innerHTML += order_item;
    }
  }