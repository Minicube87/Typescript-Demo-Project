pipeline {
    agent any

    tools{
        nodejs "Node"
    }

    stages {
        //stage("Cleanup"){ 
        //    steps{ 
        //        sh "rm -rf ./*"
        //    }       
        //}

        stage('Install') {
            steps {
                // Installiert Dependencies aus package.json
                sh 'npm --version'
                sh 'node --version'
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

        stage('Audit fix'){
            steps{
                // Falls Schwachstellen vorhanden sind, wird versucht diese automatisch zu beheben
                sh 'npm audit fix'
            }
        }

        stage('Check for outdated Packages'){
            steps{
                // Prüfe veraltete Pakete
                sh 'npm outdated'
            }
        }

        stage('Update for outdated Packages'){
            steps{
                // Aktualisierung der neuesten kompatiblen Versionen
                sh 'npm update'
            }
        }

        stage('Spezifisch typescript aktualisieren'){
            steps{
                // TODO: Über alle dependencies rüberlaufen mit for schleife
                sh 'npm install typescript@latest'
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
