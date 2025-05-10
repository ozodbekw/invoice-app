const baseUrl = import.meta.env.VITE_BASE_URL;

// get all
export async function getInvoices(route = "/invoices", query = "") {
  const req = await fetch(baseUrl + route + (query ? `?status=${query}` : ""));

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// get by id
export async function getInvoice(id, route = "/invoices") {
  const req = await fetch(baseUrl + route + `/${id}`);

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// delete
export async function deleteById() {
  const req = await fetch(baseUrl + `/invoice${id}`, {
    method: "DELETE",
  });

  if (req.status === 200) {
    return "success";
  } else {
    throw new Error("Something went wrong!");
  }
}

// update by id
export async function updateById(id, newData) {
  const req = await fetch(baseUrl + `/invoice${id}`, {
    method: "PATCH",
    body: JSON.stringify(newData),
  });

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// add by id
export async function addInvoice(data) {
  const req = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}
