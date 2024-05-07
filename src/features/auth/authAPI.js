// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return releveant info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    // const email = loginInfo.email;
    // const password = loginInfo.password;

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    // if (data.length) {
    //   if (password === data[0].password) {
    //     resolve({ data: data[0] });
    //   } else {
    //     reject({ message: "Wrong Credentials" });
    //   }
    // } else {
    //   reject({ message: "user not found" });
    // }
    //TODO: on server it will only return releveant info of user (not password)
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    //TODO: on server it will remove user session info
    resolve({ data: "success" });
  });
}
