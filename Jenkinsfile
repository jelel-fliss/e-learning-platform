node {

    /**  Images **/
    def database
    def express
    def angular
   

        stage('SCM Checkout') {
            echo "SCM Checkout Stage : Accessing GitHub Project Repository"
            checkout scm
        }
        stage('Docker Build') {

            db = docker.build("cll/database","-f sql/Dockerfile.database ./sql")
            express = docker.build("cll/express","-f server/Dockerfile.node ./server")    
            angular = docker.build("cll/angular","-f client/Dockerfile.angular ./client")
            
            sh 'docker run -d --name angular cll/angular'
	    sh 'docker run -d --name express cll/express'
        }
	
	stage('Express Unit Test') {
            sh 'docker exec -i express npm run test tests/*.js'
		
            
        }
         
        stage('Angular Test') {
            /*angular.inside('-v ${workspace}/client:/app'){
		sh 'ls client'
		sh 'ng test'
                
            }*/
		sh 'docker exec -i angular cd /app && ng test'
		
        }
        
        stage('Angular Build') {
            angular.inside{
            	sh 'ng build --prod --build-optimizer=true'
                
            }
        }
	
	
        
        
           
}


