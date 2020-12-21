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
            
            
        }
	
	stage('Express Unit Test') {
            express.inside{
		sh 'ls server'
            	sh 'npm run test tests/*.js'
                
            }
            
        }
        
         
        stage('Angular Test') {
            angular.inside{
		sh 'ls client'
		sh 'ng test'
                
            }
        }
        
        stage('Angular Build') {
            angular.inside{
            	sh 'ng build --prod --build-optimizer=true'
                
            }
        }
	
	
        
           
}


