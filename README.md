# 📌 Kubernetes Multi-Service Application 🚀  

Este proyecto es una aplicación multi-servicio que consta de:  
- **Backend**: API REST creada con FastAPI.  
- **Frontend**: Interfaz web en Node.js que consume el backend.  

Ambos servicios están **containerizados** y desplegados en **Kubernetes** utilizando **Minikube**.  

---

## **📌 1. Requisitos Previos**  
Asegúrate de tener instalados:  
- [Docker](https://docs.docker.com/get-docker/)  
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)  
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)  
- [Git](https://git-scm.com/)  

Verifica las versiones con:  
```sh
docker --version
minikube version
kubectl version --client
git --version
