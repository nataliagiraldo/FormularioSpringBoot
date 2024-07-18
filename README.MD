# Proyecto de Formulario con Spring Boot

Este proyecto es una aplicación web simple que permite a los usuarios registrar sus nombres, apellidos y profesiones a través de un formulario. Los datos enviados se almacenan en memoria y pueden ser recuperados a través de un endpoint API.

## Tecnologías Utilizadas

- Java 11
- Spring Boot 2.5
- Thymeleaf
- Bootstrap 4.5
- Fetch API (JavaScript)

## Requisitos Previos

- JDK 11 o superior
- Maven 3.6.0 o superior

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```

3. Compila y empaqueta la aplicación con Maven:
    ```bash
    mvn clean package
    ```

## Ejecución

1. Ejecuta la aplicación con Maven:
    ```bash
    mvn spring-boot:run
    ```

2. Abre tu navegador web y navega a `http://localhost:8080` para ver el formulario.

## Endpoints de la API

- `POST /api/submit` - Envía los datos del formulario y los almacena en memoria.
- `GET /api/users` - Recupera la lista de usuarios registrados.

## Estructura del Proyecto

```plaintext
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── formulario/
│   │           └── miproyecto/
│   │               ├── controller/
│   │               │   ├── IndexController.java
│   │               │   └── PageController.java
│   │               ├── model/
│   │               │   └── User.java
│   └── resources/
│       ├── static/
│       │   └── script.js
│       ├── templates/
│       │   └── front/
│       │       └── index.html
│       └── application.properties
└── test/
    └── java/
        └── com/
            └── formulario/
                └── miproyecto/
                    └── MiProyectoApplicationTests.java
