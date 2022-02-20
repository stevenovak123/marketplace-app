# Containerized this app for CLOUD COMPUTING

## 1. Install and configure docker for the system

Check the documentation at
https://www.docker.com/get-started

## 2. Install and configure kubectl

    sudo apt-get install kubectl

Documentation: https://kubernetes.io/docs/tasks/tools/

## 3. Install and configure minikube

    minikube start --nodes 2 -p @name of the cluster --driver=docker

    minikube dashboard -p @name of the cluster

Documentation : https://minikube.sigs.k8s.io/docs/tutorials/multi_node/

## 4. Create a Dockerfile in the project

https://docs.docker.com/develop/
https://docs.docker.com/develop/dev-best-practices/
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

### Mention all the things to be containerized

### Upload the image to docker hub

    docker upload <imagename>

Link to DockerHub : https://hub.docker.com/

## 5. Checking for proper deployment of Cluster

    kubectl get nodes

Check for 2 nodes

## 6. Creating a deployment

    kubectl create deployment <name> --image=<dockerImage>

### On successful deployment of the image

    kubectl expose deployment <name> --type=NodePort --port=3000

    minikube ip -p <cluster name>

    kubectl get svc

## In the browser

In the search bar enter

1.IP from minikube

2.ip:Portnumber(Containing/TCP)
