// A mock function to mimic making an async request for data

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    console.log("This is item boss" + id);
    //TODO: we will not hard-code server URL here
    const response = await fetch("/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`/products/`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return releveant info of user (not password)
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter={"category":"smartphone"}
  // sort={_sort:"-price"}
  // pagination= {_page:1, _limit:10}
  // TODO: on server we will use multiple values
  // TODO: server will filter the deleted products in case of non admin

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  console.log(pagination);
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("/products?" + queryString);
    const data = await response.json();
    console.log({ data });
    const products = data;
    const totalItems = await response.headers.get("X-Total-Count");
    // const totalItems = data.items;
    console.log("This is total items list :" + totalItems); // X-total-Count
    resolve({ data: { products: products, totalItems: totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}
