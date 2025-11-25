# Audit und Update Übung

## Ziel
Lernen Sie, Sicherheitslücken in Abhängigkeiten zu identifizieren und zu beheben sowie Pakete auf dem neuesten Stand zu halten.

## Teil 1: Pakete auditieren (überprüfen)

1.  Führen Sie den Audit-Befehl aus, um nach Schwachstellen zu suchen:
    ```bash
    npm audit
    ```
2.  Überprüfen Sie die Ausgabe. Wenn Schwachstellen vorhanden sind, versuchen Sie, diese automatisch zu beheben:
    ```bash
    npm audit fix
    ```
3.  Wenn weiterhin Schwachstellen bestehen, untersuchen Sie diese und aktualisieren Sie die betroffenen Pakete oder deren Eltern-Pakete manuell.

## Teil 2: Pakete aktualisieren

1.  Prüfen Sie auf veraltete Pakete:
    ```bash
    npm outdated
    ```
2.  Aktualisieren Sie Pakete auf ihre neuesten kompatiblen Versionen:
    ```bash
    npm update
    ```
3.  Um auf Hauptversionen (Major Versions) zu aktualisieren (potenziell inkompatible Änderungen), müssen Sie möglicherweise die spezifische Version installieren:
    ```bash
    npm install <package>@latest
    ```
    Oder verwenden Sie ein Tool wie `npm-check-updates`.

## Teil 3: CI/CD Integration

1.  Beobachten Sie, wie sich der Schritt `npm run audit` in der Jenkins- oder GitHub Actions-Pipeline verhält.
2.  Versuchen Sie, eine verwundbare Paketversion einzuführen (nur zu Übungszwecken!) und sehen Sie, ob die Pipeline fehlschlägt.
    *Hinweis: Committen Sie keine verwundbaren Pakete in den Produktionscode.*
