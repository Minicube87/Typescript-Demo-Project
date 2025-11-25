# TypeScript DevOps Übungsprojekt

Dieses Projekt wurde entwickelt, um DevOps-Workflows mit npm, Jenkins und GitHub Actions zu üben.

## Erste Schritte

1.  Abhängigkeiten installieren:
    ```bash
    npm install
    ```
2.  Projekt bauen:
    ```bash
    npm run build
    ```
3.  Tests ausführen:
    ```bash
    npm test
    ```

## CI/CD Übungen

1.  **Jenkins**: Erstellen Sie ein `Jenkinsfile`, das eine Pipeline mit den folgenden Stufen definiert:
    -   Install (Installieren)
    -   Build (Bauen)
    -   Test (Testen)
    -   Audit (Prüfen)
2.  **GitHub Actions**: Erstellen Sie eine `.github/workflows/ci.yml` Datei, die bei Push und Pull Requests auf `main` ausgelöst wird und die gleichen Schritte wie oben ausführt.

## Übungen

Siehe `exercises/AUDIT_UPDATE.md` für Anweisungen zum Üben von Paket-Audits und -Updates.
