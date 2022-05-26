let url = "https://significado.herokuapp.com/v2/";

let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let result = document.querySelector("#box");

btn.addEventListener("click", () => {
  let palavra = input.value;
  if (palavra === "") {
    result.innerHTML = `
        <div id="txt">
            <p>Informe uma palavra!!</p>
        </div>`;
  } else {
    fetch(`${url}${palavra}`)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
            <div id="txt">
                <h1>${palavra}</h1>
                <p><span>1°</span>${data[0].meanings[0]}</p><br>
                <p><span>2°</span>${data[0].meanings[1]}</p>
            </div>`;
      })
      .catch(() => {
        result.innerHTML = `
            <div id="txt">
                <p>Palavra não encontrada.</p>
            </div>`;
      });
  }
});
