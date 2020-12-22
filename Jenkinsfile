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
        }
	
	
         
        stage('Angular Test') {
            /*angular.inside('-v ${workspace}/client:/app'){
		sh 'ls client'
		sh 'ng test'
                
            }*/
		sh 'docker exec -it angular bash'
		sh 'ls'
		sh 'ng test'
        }
        
        stage('Angular Build') {
            angular.inside{
            	sh 'ng build --prod --build-optimizer=true'
                
            }
        }
	
	stage('Express Unit Test') {
            express.inside{
		sh 'ls server'
            	sh 'npm run test tests/*.js'
                
            }
            
        }
        
        
           
}


