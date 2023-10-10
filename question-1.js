// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  for (const val of orders) {
    let message = `Order Id ${val.orderId}:`;
    if (val.total >= 6000) {
      console.log(`${message} "Shipping is free"`);
    } else if (val.total >= 3000)
      console.log(`${message} "Shipping cost is 250 Baht."`);
    else console.log(`${message} "Shipping cost is 500 Baht."`);
  }
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];
calculateShippingCost(orders);
