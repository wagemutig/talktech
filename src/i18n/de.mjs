export const de = {
  nav: {
    brand: 'Tech Talk',
    problem: 'Problem',
    solution: 'Lösung',
    adaptive: 'Adaptive KI',
    avatars: 'Avatare',
    innovation: 'Innovation',
    team: 'Team',
    partners: 'Partner',
    lang: 'EN',
    langUrl: '/techtalk/',
  },

  hero: {
    badge: 'PHZH × afca.ag',
    title: 'Tech Talk',
    subtitle: 'KI-gestützte Gesprächssimulation für<br class="hidden md:block" /> <span class="font-semibold text-white">technisches Englisch</span>',
    description: 'Ein immersiver, adaptiver Lernprototyp, der generative KI und XR kombiniert, um allen Lernenden einer Berufsfachschulklasse gleichzeitig realistische, individuelle technische Fachgespräche auf Englisch zu ermöglichen.',
    ctaPrimary: 'Konzept entdecken',
    ctaSecondary: 'Team kennenlernen',
  },

  problem: {
    badge: 'Die Herausforderung',
    title: 'Warum technisches Englisch-Training neu gedacht werden muss',
    cards: [
      {
        title: '1 Lehrperson · 24 Lernende',
        text: 'Berufsfachschulklassen mit bis zu 24 Lernenden und einer einzigen Lehrperson machen individuelles Sprechtraining nahezu unmöglich. Die Zeit für persönliches Coaching ist stark begrenzt.',
      },
      {
        title: 'Doppelte Hürde: Sprache & Technik',
        text: 'Lernende müssen gleichzeitig komplexe mechanische Systeme fachlich verstehen <em>und</em> diese sprachlich präzise in einer Fremdsprache erklären — eine intensive, authentische Übungspraxis erfordert, die traditionelle Formate nicht bieten können.',
      },
    ],
  },

  solution: {
    badge: 'Die Lösung',
    title: 'Dreiphasige adaptive Lernsimulation',
    subtitle: 'Ein prozessorientierter Aufbau, der jede:n Lernende:n von der Vorbereitung über das aktive Fachgespräch bis zur reflektierenden Selbsteinschätzung führt.',
    phases: [
      {
        step: '01',
        title: 'Briefing',
        time: '~2 Min.',
        lang: 'Deutsch',
        text: 'Die Lernenden starten auf Deutsch mit der Mentorin Ms. Goodwill, die das Szenario erklärt: Ein internationaler Vertriebspartner möchte die auf der technischen Zeichnung abgebildete Baugruppe kaufen — verlangt dafür aber eine präzise, fachlich korrekte Erklärung auf Englisch.',
      },
      {
        step: '02',
        title: 'Fachgespräch',
        time: '~10 Min.',
        lang: 'Englisch',
        text: 'Die Kernsimulation. Lernende führen mit dem Kunden Mr. Barker auf Englisch ein Fachgespräch, erklären Komponenten, Funktionen und Konstruktionsprinzipien. Die KI passt den Schwierigkeitsgrad in Echtzeit mittels der Bloom\'schen Taxonomie an (K1–K3).',
      },
      {
        step: '03',
        title: 'Reflexion & Coaching',
        time: '~3 Min.',
        lang: 'Bilingual',
        text: 'Das Gesprächstranskript wird analysiert. Ms. Goodwill kehrt für ein bilinguales Coaching zurück — Führung auf Deutsch, technische Korrekturen auf Englisch — und leitet die Lernenden zur systematischen Selbsteinschätzung an.',
      },
    ],
    platformTitle: 'Basiert auf Xara — No-Code Konfiguration',
    platformText: 'Die gesamte Simulation läuft auf der Xara XR-Plattform, unterstützt von Azure OpenAI GPT-4o für dialogische Intelligenz und Azure Speech Services für latenzfreie Sprachverarbeitung. Vollständig gehostet in der Microsoft Azure Cloud, unter Einhaltung der strengen Schweizer Datenschutzanforderungen für das Bildungswesen.',
  },

  adaptive: {
    badge: 'Adaptive Dialogsteuerung',
    title: 'Echtzeit-Adaption mittels Bloom\'scher Taxonomie',
    text: 'Die Gesprächs-Engine passt den Schwierigkeitsgrad dynamisch in Echtzeit an die Antworten der Lernenden an. Beginnend auf Wissensebene eskaliert oder deeskaliert die KI über drei kognitive Stufen — so wird jeder Lernende individuell an seiner Leistungsgrenze gefördert, ohne über- oder unterfordert zu werden.',
    levels: [
      { id: 'K1', name: 'Wissen', desc: 'Technische Komponenten auf der Konstruktionszeichnung identifizieren und benennen' },
      { id: 'K2', name: 'Verstehen', desc: 'Mechanische Funktionen, Materialeigenschaften und den Grund für spezifische Komponenten erklären' },
      { id: 'K3', name: 'Anwenden', desc: 'Realistische Fehlerszenarien lösen — Störungen diagnostizieren und technische Lösungen vorschlagen' },
    ],
    footnote: 'Nach zwei einleitenden K1-Fragen bestimmt jede Antwort den weiteren Schwierigkeitsgrad. Jedes Gespräch wählt zufällig Komponenten aus dem Zeichnungspool, sodass keine zwei Sitzungen identisch sind.',
    flowTitle: 'Adaptiver Gesprächsverlauf',
    flowExamples: [
      { level: 'K1', label: 'Bauteil-Identifikation', quote: '"Welche Komponente befindet sich an Position Nummer 3?"' },
      { level: 'K2', label: 'Funktionsverständnis', quote: '"Warum verwenden wir an dieser spezifischen Position eine Radialwellendichtung?"' },
      { level: 'K3', label: 'Fehlerdiagnose', quote: '"Das Getriebe überhitzt. Was könnte basierend auf der Zeichnung die technische Ursache sein?"' },
    ],
    flowNote: 'Jede Simulation endet nach genau 10 Fragen und wechselt dann zur Reflexionsphase',
  },

  avatars: {
    badge: 'KI-Avatare',
    title: 'Zwei Avatare, komplementäre Rollen',
    subtitle: 'Unterschiedliche KI-Persönlichkeiten begleiten den Lernprozess — von der geführten Vorbereitung über den herausfordernden Dialog bis zum reflektierenden Coaching.',
    goodwill: {
      initials: 'MG',
      name: 'Ms. Goodwill',
      role: 'Mentorin & Coach',
      briefing: { title: 'Briefing-Phase', text: 'Instruiert auf Deutsch, erklärt das Szenario und stellt sicher, dass jede:r Lernende den Kontext und die Vokabelanforderungen vor dem Start versteht.' },
      reflection: { title: 'Reflexionsphase', text: 'Analysiert das Gesprächstranskript anhand von B2-Kriterien (Wortschatz, Grammatik, Redefluss). Coaching auf Deutsch, technische Korrekturen auf Englisch. Führt durch gezielte Fragen zur Selbsteinschätzung.' },
    },
    barker: {
      initials: 'MB',
      name: 'Mr. Barker',
      role: 'Internationaler Vertriebspartner',
      conversation: { title: 'Gesprächsphase', text: 'Englischsprachiger Dialogpartner. Agiert als erfahrener, technisch versierter Vertriebspartner, der die Konstruktion vollständig verstehen möchte.' },
      interaction: { title: 'Adaptive Interaktion', text: 'Keine explizite Korrektur oder Bewertung — stattdessen reagiert er mit realistischen Rückfragen bei unpräzisen Erklärungen (<span class="italic text-emerald-200">"I see the part, but could you clarify its exact function?"</span>) und fordert so spontane, handlungsorientierte Antworten.' },
    },
  },

  innovation: {
    badge: 'Was es besonders macht',
    title: 'Innovationswert',
    subtitle: 'Tech Talk verwandelt Sprachunterricht von einem Broadcast-Modell in ein personalisiertes, immersives Erlebnis — ohne individuelle Softwareentwicklung.',
    items: [
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Skalierbares 1:1-Sprechtraining',
        desc: 'Ermöglicht allen 24 Lernenden einer Klasse, gleichzeitig individuelle, adaptive Fachgespräche zu führen — die aktive Sprechzeit vervielfacht sich gegenüber traditionellen Settings.',
      },
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Didaktisch kontrollierte KI',
        desc: 'Die Bloom\'sche Taxonomie-gesteuerte adaptive Dialogführung verhindert frei umherschweifende LLM-Halluzinationen, während die natürliche Spontaneität des echten Dialogs und die Lehrplankonformität erhalten bleiben.',
      },
      {
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Cross-Plattform & XR',
        desc: 'Einsetzbar via Webbrowser, Smartphone oder VR-Brille (Meta Quest 3, Apple Vision Pro) — flexibel für Klassen-, Fern- oder immersive Lernszenarien.',
      },
      {
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        title: 'No-Code / Low-Code',
        desc: 'Vollständig prompt-konfiguriert auf der Xara-Plattform — neue Szenarien, Baugruppen oder Berufe können ohne Programmierung hinzugefügt werden, was schnelle Skalierbarkeit und Kosteneffizienz gewährleistet.',
      },
    ],
    cta: 'Im Mai 2026 begannen erste Sondierungsgespräche mit <strong class="text-white">Swissmem</strong> (dem Schweizer MEM-Branchenverband) bezüglich einer Integration der Tech Talk-Simulation in die neuen FutureMEM-Lehrmittel. Nach den Sommerferien 2026 wird in einem Folgetreffen die Roadmap für die flächendeckende Implementierung in der Schweizer Berufsbildung definiert.',
  },

  team: {
    badge: 'Das Team',
    title: 'Entwickelt von Pädagogen & Ingenieuren',
    subtitle: 'Ein interdisziplinäres Team der Pädagogischen Hochschule Zürich (PHZH), das pädagogische Expertise mit KI-Engineering und Branchenkenntnis verbindet.',
    members: [
      { name: 'Oliver Schulthess', role: 'Projektleitung & Didaktisches Konzept', initials: 'OS', gradient: 'from-blue-400 to-cyan-300' },
      { name: 'Jonas Schubnell', role: 'KI-Prompt-Engineering & Prototyping', initials: 'JS', gradient: 'from-emerald-400 to-teal-300' },
      { name: 'Aaron Schmid', role: 'Technische Architektur & XR-Integration', initials: 'AS', gradient: 'from-violet-400 to-purple-300' },
      { name: 'Colin Schmid', role: 'Interaction Design', initials: 'CS', gradient: 'from-amber-400 to-orange-300' },
    ],
  },

  partners: {
    badge: 'Kooperationen',
    title: 'Partner & Ökosystem',
    subtitle: 'Tech Talk wurde innerhalb der IMMERSE-Innovationsstruktur entwickelt, gefördert von der Digitalisierungsinitiative der Zürcher Hochschulen (DIZH).',
    list: [
      { name: 'PHZH — Pädagogische Hochschule Zürich', url: 'https://phzh.ch', desc: 'Akademische Partnerin' },
      { name: 'afca. ag', url: 'https://afca.ch', desc: 'Technologiepartnerin' },
      { name: 'IMMERSE', url: 'https://phzh.ch/de/ueber-die-phzh/themen-und-taetigkeiten/projekte/immerse/', desc: 'Innovationsstruktur' },
      { name: 'FutureMEM', url: 'https://futuremem.swiss', desc: 'Berufsreform' },
    ],
  },

  footer: {
    credit: 'Ein hackAstone-Projekt der Pädagogischen Hochschule Zürich (PHZH)',
    rights: 'Alle Rechte vorbehalten.',
  },
};