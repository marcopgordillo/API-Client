import "./styles.css";
import ApiClient from "./utils/api-client";
(function () {
  const client = new ApiClient("https://jsonplaceholder.typicode.com", "sv");

  async function app() {
    const elem = document.getElementById("app");

    elem.innerText = "Loading...";

    try {
      const users = await client.users.get();

      elem.innerHTML = `
      <ul>
        ${users.map((u) => `<li>${u.name}</li>`).join("")}
      </ul>
      `;
    } catch (err) {
      elem.setAttribute("style", "color:red;font-weight: bold");
      elem.innerText = `Error: ${err.message}`;
    }
  }

  app();
})();
