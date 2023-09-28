pipeline { 
    agent any

    stages {  
        stage('Checkout') {   
            steps {    
                // Kodu GitHub'dan çek    
                checkout scm   
            }  
        }
  
        stage('Build and Deploy') {   
            steps {    
                // Docker ile React uygulamasını ayağa kaldır    
                sh 'docker-compose up -d'   
                }  
        } 
    }
 

    post {  
        success {   
            // İşlem başarıyla tamamlandı, gerektiğinde burada başka işler yapabilirsiniz.  
        } 
        }
}