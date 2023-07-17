document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url =
    "https://geo.ipify.org/api/v2/country?apiKey=at_TI8ldGatoi9FKHn7AHmxyo8Oa81UZ&ipAddress=8.8.8.8";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
