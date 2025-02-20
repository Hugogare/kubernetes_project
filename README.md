Guía para Desplegar una Aplicación en Kubernetes con Minikube

1. Introducción

Esta guía explica cómo desplegar una aplicación con un backend en FastAPI y un frontend en Node.js en Kubernetes usando Minikube.

2. Requisitos Previos

Docker

Minikube

Kubectl

Git

3. Configuración del Entorno

Iniciar Minikube y verificar que el nodo esté activo.

Configurar Docker para usar Minikube.

4. Construcción y Despliegue de los Servicios

Crear el backend con FastAPI y el frontend con Node.js.

Containerizar ambos servicios con Docker.

Crear archivos YAML para Kubernetes.

Aplicar los despliegues y servicios con kubectl.

5. Actualización con Rolling Update

Modificar el backend y generar una nueva imagen.

Actualizar el deployment en Kubernetes.

Verificar que el cambio se haya aplicado sin interrupciones.

6. Rollback (Opcional)

Si hay errores en la nueva versión, revertir a la versión anterior con kubectl.
