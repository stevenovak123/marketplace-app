#Containerized this app for CLOUD COMPUTING
install and configure docker for the system(follow the documentaion from docker)
install and configure kubectl 
install and configure minikube
run minikube start --nodes 2 -p @name of the cluster
minikube dashboard -p @name of the cluster
Create a Dockerfile in the project 
Mention all the things to be containerized
Upload the image to docker hub
kubectl get nodes and check for 2 nodes
kubectl create deployment @name of the deployment --image=@url of the image
kubectl expose deployment <name> --type=NodePort --port=3000
minikube ip -p @name of the cluster
kubectl get svc 
IN The browser IP from minikube ip:Portnumber(Containing/TCP)