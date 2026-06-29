import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Die Rescue Trainer",
  description: "Impressum und rechtliche Angaben der Die Rescue Trainer.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="pt-32 pb-16" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Impressum</h1>
          <p className="text-slate-400">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8">
            {/* Anbieter */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Anbieter</h2>
              <address className="not-italic text-slate-600 text-sm leading-relaxed">
                <strong>DieRescueTrainer</strong><br />
                Taunusstraße 20<br />
                61440 Oberursel<br />
                Deutschland
              </address>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Kontakt</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Telefon:{" "}
                <a href="tel:+4961712777284" className="text-blue-600 hover:underline">
                  +49 6171 2777284
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@dierescuetrainer.de" className="text-blue-600 hover:underline">
                  info@dierescuetrainer.de
                </a>
              </p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Robert Knecht und Leon Gärtner<br />
                Taunusstraße 20<br />
                61440 Oberursel
              </p>
            </div>

            {/* USt */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Umsatzsteuer</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
              </p>
            </div>

            {/* Haftung Inhalte */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Haftung für Inhalte</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung Links */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Haftung für Links</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Urheberrecht</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Streitschlichtung */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Streitschlichtung</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
