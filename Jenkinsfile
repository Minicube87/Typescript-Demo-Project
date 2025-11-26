pipeline {
    agent any

    tools{
        nodejs "Node"
    }

    stages {
        stage('Install') {
            steps {
                // Installiert Dependencies aus package.json
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Baut TypeScript nach dist/
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Führt Tests aus (z.B. Jest)
                sh 'npm test'
            }
        }

        stage('Audit') {
            steps {
                // Sicherheitscheck der Dependencies
                sh 'npm audit --json > audit-report.json'
            }
        }
    }

    post {
        always {
            echo '-----------------------'
        }
        success {
            echo 'Build successful'
        }
        failure {
            echo 'Build failed'
        }
    }
}
