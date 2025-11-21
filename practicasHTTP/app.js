const url = "https://jsonplaceholder.typicode.com/posts/1";
const resultado = document.getElementById("resultado");

async function enviarPeticion(metodo) {
  const inicio = performance.now();

  try {
    const response = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: metodo !== "GET" ? JSON.stringify({ title: "Nuevo título" }) : null
    });

    const tiempo = performance.now() - inicio;

    console.log("URL:", url);
    console.log("Método:", metodo);
    console.log("Código de estado:", response.status);
    console.log("Tiempo de respuesta:", tiempo.toFixed(2), "ms");

    const data = await response.json();
    resultado.textContent = JSON.stringify(data, null, 2);

  } catch (error) {
    console.error("Error:", error);
  }
}

document.getElementById("btnGet").onclick = () => enviarPeticion("GET");
document.getElementById("btnPost").onclick = () => enviarPeticion("POST");
document.getElementById("btnPut").onclick = () => enviarPeticion("PUT");
document.getElementById("btnDelete").onclick = () => enviarPeticion("DELETE");
