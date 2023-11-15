# Portfolio

## Descripción
Este es el backend de la aplicación donde se encuentran los datos de usuario, los hobbies y herramientas que están asociadas.

## Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina.

## Instalación
1. Clona este repositorio: `git clone `
2. Ingresa al directorio del proyecto: `cd backend`
3. Instala las dependencias: `npm install`

## Configuración
1. Dirigete hacia MongoDB, crea una base de datos y copia el link de conexión.
2. Crea un archivo `.env` en el directorio raíz.
3. Agrega las variables de entorno necesarias. Puedes consultar el archivo `.env.example` para obtener un ejemplo.

## Endpoints/API
1. `/api/users` Tiene los datos del usuario.
2. `/api/tools` Tiene los datos de las herramientas.
3. `/api/hobbies` Tiene los datos de los hobbies.

## Uso
Para iniciar la aplicación, ejecuta el siguiente comando:
```bash
npm start