import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Die Rescue Trainer",
  description: "Datenschutzerklärung der Die Rescue Trainer GbR gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-2" style={{ color: "#2A3142" }}>
          Datenschutzerklärung
        </h1>
        <p className="text-slate-500 mb-10 text-sm">Stand: Juni 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className="not-italic mt-2 text-slate-600">
              Robert Knecht &amp; Leon Gärtner<br />
              DieRescueTrainer GbR<br />
              Taunusstraße 20<br />
              61440 Oberursel<br />
              E-Mail: <a href="mailto:info@dierescuetrainer.de" className="underline" style={{ color: "#3068F5" }}>info@dierescuetrainer.de</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>2. Erhobene Daten</h2>
            <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li><strong>Kontaktformulardaten:</strong> Name, E-Mail-Adresse, Nachrichteninhalt und gewünschter Kurstyp, sofern Sie das Kontaktformular nutzen.</li>
              <li><strong>Technisch notwendige Cookies:</strong> Session-Cookies, die für den Betrieb der Website erforderlich sind und keinerlei persönliche Nutzungsprofile erstellen.</li>
              <li><strong>Server-Logfiles:</strong> IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge und verwendeter Browser — nur zu technischen Zwecken und anonymisiert.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>3. Zweck der Datenverarbeitung</h2>
            <p>Ihre Daten werden ausschließlich genutzt, um:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Ihre Kursanfragen zu beantworten und Sie zu beraten,</li>
              <li>die technische Funktion der Website sicherzustellen,</li>
              <li>gesetzlichen Verpflichtungen nachzukommen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>4. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / Vertragserfüllung)
              sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb unserer Website).
              Optionale Cookies setzen wir nur mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>5. Weitergabe an Dritte</h2>
            <p>
              Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter. Eine Ausnahme besteht nur,
              wenn wir gesetzlich dazu verpflichtet sind oder Sie ausdrücklich eingewilligt haben.
              Wir setzen kein Tracking, keine Werbecookies und keine Analysetools von Drittanbietern ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>6. Hosting</h2>
            <p>
              Diese Website wird auf eigenen Servern bei Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen,
              gehostet. Hetzner verarbeitet Daten ausschließlich auf Servern innerhalb der EU.
              Es findet kein Tracking durch externe Dienste statt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>7. Ihre Rechte</h2>
            <p>Sie haben gemäß DSGVO folgende Rechte gegenüber uns:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li><strong>Auskunft</strong> über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
              <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
              <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li><strong>Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@dierescuetrainer.de" className="underline" style={{ color: "#3068F5" }}>
                info@dierescuetrainer.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
              In Hessen ist dies der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI),
              Postfach 3163, 65021 Wiesbaden, <a href="https://www.datenschutz.hessen.de" className="underline" style={{ color: "#3068F5" }}>www.datenschutz.hessen.de</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#2A3142" }}>9. Cookies</h2>
            <p>
              Wir verwenden technisch notwendige Cookies (z. B. für die Sitzungsverwaltung), die keine
              Erlaubnis erfordern. Optionale Analyse- oder Marketing-Cookies setzen wir ausschließlich nach
              Ihrer Einwilligung über das Cookie-Banner ein. Sie können Ihre Einwilligung jederzeit widerrufen,
              indem Sie den Browser-Speicher löschen oder uns kontaktieren.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
