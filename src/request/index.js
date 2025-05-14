const baseUrl = import.meta.env.VITE_BASE_URL;

// get all
export async function getInvoices(query = "") {
  const req = await fetch(baseUrl + (query ? `?status=${query}` : ""));

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// get by id
export async function getInvoice(id) {
  const req = await fetch(baseUrl + `/${id}`);

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// delete
export async function deleteById(id) {
  const req = await fetch(baseUrl + `/${id}`, {
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
  const req = await fetch(baseUrl + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}

// add new invoice
export async function addInvoice(data) {
  const req = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (req.status === 200) {
    const result = req.json();
    return result;
  } else {
    throw new Error("Something went wrong!");
  }
}
