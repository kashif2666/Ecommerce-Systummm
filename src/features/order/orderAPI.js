// A mock function to mimic making an async request for data
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders/" + order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(pagination, sort) {
  let queryString = "";
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("/orders?" + queryString);

    const data = await response.json();
    console.log({ data });
    const products = data;
    const totalOrders = await response.headers.get("X-Total-Count");
    // const totalItems = data.items;
    console.log("This is total items list :" + totalOrders); // X-total-Count
    resolve({ data: { orders: products, totalOrders: +totalOrders } });
  });
}
