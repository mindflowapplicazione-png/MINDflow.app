export const SECTIONS = [
  // 🧠 CARRIERA & MINDSET (planner + note + meeting + ecc.)
  {
    id: "priorita_giorno",
    icon: "⚠️",
    title: "Priorità del giorno (Max 5)",
    limit: 5,
    fields: [
      {key:"titolo", label:"Titolo", type:"text", required:true},
      {key:"percentuale", label:"Importanza %", type:"number", min:0, max:100}
    ]
  },
  { id:"obbiettivo_principale", icon:"🥇", title:"Obbiettivo principale", fields:[
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"percentuale", label:"Avanzamento %", type:"number", min:0, max:100}
    ]},
  { id:"mini_obbiettivi", icon:"🥈", title:"Mini obbiettivi", fields:[
      {key:"descrizione", label:"Descrizione", type:"text"},
      {key:"percentuale", label:"Avanzamento %", type:"number", min:0, max:100}
    ]},
  { id:"daily_planner", icon:"📆", title:"Daily Planner", fields:[
      {key:"azione", label:"Azione", type:"text", required:true},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"inizio", label:"Inizio", type:"time"},
      {key:"fine", label:"Fine", type:"time"}
    ], checkable:true },
  { id:"note_rapide", icon:"🗒️", title:"Note rapide", fields:[
      {key:"testo", label:"Nota", type:"textarea"},
      {key:"orario", label:"Orario", type:"time"}
    ], checkable:true },
  { id:"meeting", icon:"💼", title:"Meeting", fields:[
      {key:"nome", label:"Persona/Meeting", type:"text"},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"link", label:"Link", type:"url"}
    ], checkable:true },
  { id:"cosa_ti_ha_colpito", icon:"📸", title:"Cosa ti ha colpito oggi?", fields:[
      {key:"descrizione", label:"Commento/Descrizione", type:"textarea"},
      {key:"file", label:"Foto/Audio/File", type:"file"}
    ]},
  { id:"sfide_personali", icon:"🚀", title:"Sfide personali", fields:[
      {key:"azione", label:"Azione", type:"text"},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"durata", label:"Durata", type:"text"},
      {key:"percentuale", label:"% raggiungimento", type:"number", min:0, max:100}
    ]},
  { id:"bilancio_giornaliero", icon:"💰", title:"Bilancio giornaliero", fields:[
      {key:"entrate", label:"Entrate €", type:"number"},
      {key:"uscite", label:"Uscite €", type:"number"},
      {key:"challenge", label:"Challenge risparmio €", type:"number"}
    ]},
  { id:"cose_da_comprare", icon:"🛍️", title:"Cose da comprare", fields:[
      {key:"item", label:"Oggetto", type:"text"},
      {key:"dove", label:"Dove comprarlo", type:"text"}
    ], checkable:true },
  { id:"faccende", icon:"🧽", title:"Faccende domestiche", fields:[
      {key:"item", label:"Cosa fare", type:"text"}
    ], checkable:true },
  { id:"contatti", icon:"📲", title:"Email/chiamate da fare", fields:[
      {key:"nome", label:"Nome", type:"text"},
      {key:"contatto", label:"Email o Telefono", type:"text"},
      {key:"descrizione", label:"Descrizione", type:"textarea"}
    ], checkable:true },
  { id:"scadenze", icon:"⏰", title:"Scadenze importanti", fields:[
      {key:"titolo", label:"Titolo", type:"text"},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"quando", label:"Quando scade", type:"date"}
    ], checkable:true },
  { id:"domani", icon:"🧱", title:"Cose da fare per domani", fields:[
      {key:"titolo", label:"Attività", type:"text"}
    ], checkable:true },
  { id:"pensieri", icon:"💭", title:"Pensieri del giorno", fields:[
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"percentuale", label:"% quanto ci hai pensato", type:"number", min:0, max:100}
    ]},
  { id:"riflessione_serale", icon:"🤔", title:"Riflessione serale", fields:[
      {key:"descrizione", label:"Come è andata oggi?", type:"textarea"}
    ]},

  // 🩷 EMOZIONI
  { id:"tracker_umore", icon:"📊", title:"Tracker umore", fields:[
      {key:"orario", label:"Orario", type:"time"},
      {key:"umore", label:"Umore", type:"select", options:["😭","☹️","😑","🙂","🥰"]},
      {key:"intensita", label:"Intensità %", type:"number", min:0, max:100},
      {key:"trigger", label:"Trigger emotivo ⁉️", type:"text"},
      {key:"influenza", label:"% influenza nella vita", type:"number", min:0, max:100},
      {key:"dipende", label:"% quanto dipende da me", type:"number", min:0, max:100},
      {key:"azione", label:"Cosa fare per risolvere", type:"textarea"},
      {key:"allegati", label:"File/Foto/Audio", type:"file"}
    ]},
  { id:"gratitudine", icon:"🙏🏼", title:"Gratitudine (1..5)", fields:[
      {key:"livello", label:"Numero (1-5)", type:"number", min:1, max:5},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"percentuale", label:"% gratitudine", type:"number", min:0, max:100}
    ]},
  { id:"self_care", icon:"✨", title:"Self-care del giorno", fields:[
      {key:"nome", label:"Nome rituale", type:"text"},
      {key:"passi", label:"Passaggi (step by step)", type:"textarea"},
      {key:"esito", label:"Come mi sento alla fine", type:"textarea"}
    ]},
  { id:"mindfulness", icon:"🧘‍♀️", title:"Sessioni Mindfulness", fields:[
      {key:"durata", label:"Durata (min)", type:"number"},
      {key:"tipo", label:"Tipo (respiro/pausa)", type:"text"},
      {key:"esito", label:"Come mi sento", type:"textarea"}
    ]},
  { id:"obiettivi_emotivi", icon:"📈", title:"Obiettivi Emotivi", fields:[
      {key:"titolo", label:"Obiettivo", type:"text"},
      {key:"scadenza", label:"Data", type:"date"},
      {key:"progresso", label:"Progresso %", type:"number", min:0, max:100}
    ]},

  // 💪🏼 FITNESS & SALUTE
  { id:"sonno", icon:"💤", title:"Ore di sonno", fields:[
      {key:"ore", label:"Ore", type:"number", step:"0.1"},
      {key:"qualita", label:"Qualità (profondo/leggero)", type:"text"},
      {key:"dolori", label:"Dolori al risveglio? (sì/no + dove)", type:"text"}
    ]},
  { id:"nutrizione", icon:"🍽️", title:"Nutrizione e KCAL", fields:[
      {key:"pasto", label:"Pasto", type:"select", options:["Colazione","Spuntino","Pranzo","Cena","Spuntino"]},
      {key:"descrizione", label:"Descrizione", type:"text"},
      {key:"kcal", label:"Kcal", type:"number"}
    ]},
  { id:"integratori", icon:"💊", title:"Farmaci/Integratori", fields:[
      {key:"nome", label:"Nome", type:"text"},
      {key:"note", label:"Spiegazione/Impatto AI (manuale per ora)", type:"textarea"}
    ]},
  { id:"stretching", icon:"🤸🏼", title:"Stretching/Mobilità", fields:[
      {key:"tipo", label:"Tipo", type:"text"},
      {key:"durata", label:"Durata", type:"text"}
    ]},
  { id:"workout", icon:"🏋🏼‍♀️", title:"Workout", fields:[
      {key:"giorno", label:"Giorno", type:"date"},
      {key:"esercizi", label:"Esercizi (lista)", type:"textarea"},
      {key:"stima_kcal", label:"Stima Kcal bruciate", type:"number"}
    ]},
  { id:"idratazione", icon:"💧", title:"Idratazione", fields:[
      {key:"ml", label:"Acqua (ml)", type:"number"}
    ]},
  { id:"sigarette", icon:"🚭", title:"Sigarette", fields:[
      {key:"n", label:"N. sigarette", type:"number"}
    ]},
  { id:"alcol", icon:"🍷", title:"Alcol", fields:[
      {key:"unita", label:"Unità", type:"number"}
    ]},
  { id:"visite", icon:"🩺", title:"Visite mediche", fields:[
      {key:"tipo", label:"Tipo/Analisi", type:"text"},
      {key:"data", label:"Data", type:"date"},
      {key:"luogo", label:"Dove", type:"text"}
    ]},
  { id:"trend", icon:"📈", title:"Trend corporei", fields:[
      {key:"peso", label:"Peso kg", type:"number", step:"0.1"},
      {key:"grassa", label:"Massa grassa %", type:"number", step:"0.1"},
      {key:"muscolo", label:"Massa muscolare %", type:"number", step:"0.1"}
    ]},
  { id:"energia", icon:"⚡", title:"Energia giornaliera", fields:[
      {key:"livello", label:"Livello 0-100", type:"number", min:0, max:100},
      {key:"note", label:"Note", type:"textarea"}
    ]},

  // 🔮 SPIRITUALITÀ & CRESCITA (schede principali in forma lista)
  { id:"meditazione", icon:"🧘🏼‍♀️", title:"Meditazione Guidata (log)", fields:[
      {key:"durata", label:"Durata (min)", type:"number"},
      {key:"ripetizioni", label:"Quante volte oggi", type:"number"},
      {key:"audio", label:"Audio personale (facoltativo)", type:"file"}
    ]},
  { id:"astrologia", icon:"🪐", title:"Astrologia – dati base", fields:[
      {key:"data_nascita", label:"Data di nascita", type:"date"},
      {key:"ora_nascita", label:"Ora di nascita", type:"time"},
      {key:"luogo", label:"Luogo", type:"text"}
    ]},
  { id:"tarocchi", icon:"🃏", title:"Tarocchi – calcoli", fields:[
      {key:"data", label:"Data riferimento (per anno personale)", type:"date"},
      {key:"note", label:"Appunti/Esito", type:"textarea"}
    ]},
  { id:"numerologia", icon:"🔢", title:"Numerologia – dati", fields:[
      {key:"nome", label:"Nome e cognome", type:"text"},
      {key:"data", label:"Data di nascita", type:"date"}
    ]},
  { id:"kabbalah", icon:"✡️", title:"Kabbalah/Gematria – dati", fields:[
      {key:"nome_ebraico", label:"Nome (traslitterato)", type:"text"}
    ]},
  { id:"iching", icon:"☯️", title:"I Ching – lanci monete", fields:[
      {key:"serie", label:"Sequenza lanci (6 valori 6/7/8/9)", type:"text"},
      {key:"note", label:"Interpretazione", type:"textarea"}
    ]},
  { id:"rune", icon:"ᚱ", title:"Rune – estrazioni", fields:[
      {key:"rune", label:"Rune estratte", type:"text"},
      {key:"note", label:"Significato", type:"textarea"}
    ]},
  { id:"energia_chakra", icon:"🌱", title:"Energia & Chakra", fields:[
      {key:"bilanciamento", label:"Note test + esercizi", type:"textarea"}
    ]},
  { id:"rituali", icon:"🕯️", title:"Rituali e mistica", fields:[
      {key:"nome", label:"Nome rituale", type:"text"},
      {key:"descrizione", label:"Descrizione", type:"textarea"},
      {key:"passi", label:"Passaggi", type:"textarea"},
      {key:"esito", label:"Come ti sei sentito", type:"textarea"}
    ]},
  { id:"sogni", icon:"📿", title:"Sogni", fields:[
      {key:"descrizione", label:"Descrizione del sogno", type:"textarea"},
      {key:"significato", label:"Significato (AI manuale)", type:"textarea"}
    ]},
  { id:"creativita", icon:"🎨", title:"Creatività & Hobby", fields:[
      {key:"idea", label:"Idea / Ispirazione", type:"textarea"},
      {key:"file", label:"Allegati", type:"file"}
    ]},
  { id:"watchlist", icon:"🎞️", title:"Watchlist", fields:[
      {key:"titolo", label:"Titolo", type:"text"},
      {key:"descrizione", label:"Descrizione (AI manuale)", type:"textarea"}
    ]},
  { id:"manifestazione", icon:"🔥", title:"Manifestazione & LoA", fields:[
      {key:"desiderio", label:"Desiderio/Obiettivo", type:"text"},
      {key:"passi", label:"Passi pianificati", type:"textarea"},
      {key:"scadenza", label:"Data", type:"date"}
    ]}
];
