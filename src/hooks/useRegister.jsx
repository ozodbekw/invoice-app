import { useState } from "react";

function useRegister() {
  const [url, setUrl] = useState(
    "https://json-api.uz/api/project/for-auth/auth/register"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((obj) => {
        console.log(obj);
      });
  };
  return <div>useRegister</div>;
}

export default useRegister;
