node {

	try {
	
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
		    sh 'docker exec -i angular ng test'

		}

		stage('Angular Build') {
		    sh 'docker exec -i angular ng build --prod'
		}
		
	} catch (e) {
		
		throw e
	
	} finally {
		def currentResult = currentBuild.result ?: 'SUCCESS'
		if (currentResult == 'UNSTABLE') {
		    echo 'Unstable Build'
		}

		def previousResult = currentBuild.getPreviousBuild()?.result
		if (previousResult != null && previousResult != currentResult) {
		    echo 'State of the Pipeline has changed'
		    
		}

		sh 'docker container rm -f angular express'
		/* sh 'docker system prune' */
	    }
	
	
        
        
           
}


