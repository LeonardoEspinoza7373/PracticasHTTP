# Simulación de Peticiones HTTP desde Frontend

Este proyecto implementa una página web básica capaz de realizar peticiones HTTP simuladas utilizando **Fetch API** hacia un servicio de prueba (JSONPlaceholder).  
Permite analizar métodos HTTP, CORS, códigos de estado y tiempos de respuesta utilizando las herramientas de desarrollo del navegador.

## Objetivos de la práctica

- Comprender y aplicar HTTP/HTTPS, métodos REST, códigos de estado y CORS.  
- Implementar una página web semántica que consuma un servicio externo.  
- Analizar las peticiones desde la pestaña **Network**.  
- Documentar resultados en tablas.  
- Subir la evidencia al repositorio en la rama `feature/http-client`.

## 🛠 Tecnologías utilizadas

- **HTML5**, **CSS3**, **JavaScript**
- **Fetch API**
- **VS Code + Live Server**
- **Navegador (Edge/Chrome) – DevTools / Network**
- **JSONPlaceholder** (servicio mock)
- **GitHub – rama feature/http-client**

---

## 🔧 Instrucciones de cómo ejecutar el proyecto

1. **Clonar el repositorio:**

   git clone https://github.com/usuario/repositorio.git

   
2. **Entrar al proyecto**

   cd repositorio

   
3. **Abrirlo en VS Code**

   code .

   
4. **Instalar la extensión Live Server**

   (Si ya está instalada, pasar al paso siguiente)

   
5. **Abrir el archivo index.html y ejecutar con Live Server**

   Click derecho → "Open with Live Server"

   
6. **El navegador abrirá la página en:**

   http://127.0.0.1:5500/

   
7. **Abrir DevTools → Network**

   Para analizar headers, CORS, tiempos de respuesta y códigos de estado.


---

## 🌐 Servicio consumido

Se utiliza el mock público:

https://jsonplaceholder.typicode.com/posts/1


### Métodos soportados:

| Método | Código |
|--------|--------|
| GET    | 200    |
| POST   | 201    |
| PUT    | 200    |
| DELETE | 200    |


## Tabla de registros de peticion: 
| Método | URL                                                                                          | Código de estado | Tiempo respuesta | Observaciones CORS                                |
| ------ | -------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ------------------------------------------------- |
| GET    | [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) | 200              | 120 ms           | CORS permitido (`Access-Control-Allow-Origin: *`) |
| POST   | [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)     | 201              | 240 ms           | Preflight OPTIONS ejecutado                       |
| PUT    | [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) | 200              | 260 ms           | Preflight, método permitido                       |
| DELETE | [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) | 200              | 150 ms           | CORS permitido                                    |

