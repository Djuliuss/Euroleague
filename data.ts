// Define Player interface
export interface Player {
  name: string;
  team: number;
  isRepeat?: boolean;
}

// teams

// 1 - Monaco
// 2 - Olympiacos
// 3 - Red Star
// 4 - Zalgiris
// 5 - Fenerbaće
// 6 - Bayern Munich
// 7 - Paris
// 8 - Efes
// 9 - Panathinaikos
// 10 - Emporio Armani
// 11 - Partizan
// 12 - Macabbi
// 13 - ASVEL
// 14 - Virtus
// 15 - ALBA

export const players: Player[] = [
  // { name: "MIKE JAMES", team: 1 },
  // { name: "ALPHA DIALLO", team: 1 },
  // { name: "ELIE OKOBO", team: 1 },
  // { name: "JARON BLOSSOMGAME", team: 1 },
  // { name: "JORDAN LOYD", team: 1 },
  // { name: "GEORGIOS PAPAGIANNIS", team: 1 },
  // { name: "DONATAS MOTIEJUNAS", team: 1 },
  // { name: "MATTHEW STRAZEL", team: 1 },
  // { name: "MAM JAITEH", team: 1 },
  // { name: "VITTO BROWN", team: 1 },
  // { name: "SASHA VEZENKOV", team: 2 },
  // { name: "EVAN FOURNIER", team: 2 },
  // { name: "THOMAS WALKUP", team: 2 },
  // { name: "NIKOLA MILUTINOV", team: 2 },
  // { name: "NIGEL WILLIAMS-GOSS", team: 2 },
  // { name: "LUCA VILDOZA", team: 2 },
  // { name: "ALEC PETERS", team: 2 },
  // { name: "SHAQUIELLE MCKISSIC", team: 2 },
  // { name: "KOSTAS PAPANIKOLAOU", team: 2 },
  // { name: "MOUSTAPHA FALL", team: 2 },
  // { name: "FILIP PETRUSEV", team: 3 },
  // { name: "JOEL BOLOMBOY", team: 3 },
  // { name: "NIKOLA KALINIC", team: 3 },
  // { name: "CODI MILLER-MCINTYRE", team: 3 },
  // { name: "YAGO DOS SANTOS", team: 3 },
  // { name: "NEMANJA NEDOVIC", team: 3 },
  // { name: "LUKA MITROVIC", team: 3 },
  // { name: "ISAIAH CANAAN", team: 3 },
  // { name: "MIKE DAUM", team: 3 },
  // { name: "DEJAN DAVIDOVAC", team: 3 },
  // { name: "DOVYDAS GIEDRAITIS", team: 4 }, //
  // { name: "LONNIE WALKER IV", team: 4 },
  // { name: "EDGARAS ULANOVAS", team: 4 }, //
  // { name: "SYLVAIN FRANCISCO", team: 4 },
  // { name: "ARNAS BUTKEVICIUS", team: 4 },
  // { name: "MATTHEW MITCHELL", team: 4 },
  // { name: "DEIVIDAS SIRVYDIS", team: 4 }, //
  // { name: "BRYANT DUNSTON", team: 4 },
  // { name: "IGNAS BRAZDEIKIS", team: 4 }, //
  // { name: "LAURYNAS BIRUTIS", team: 4 }, //
  // { name: "NIGEL HAYES-DAVIS", team: 5 },
  // { name: "WADE BALDWIN IV", team: 5 },
  // { name: "DEVON HALL", team: 5 },
  // { name: "BONZIE COLSON", team: 5 },
  // { name: "TARIK BIBEROVIC", team: 5 },
  // { name: "MARKO GUDURIC", team: 5 },
  // { name: "NICOLO MELLI", team: 5 },
  // { name: "ARTURS ZAGARS", team: 5 },
  // { name: "KHEM BIRCH", team: 5 },
  // { name: "SERTAC SANLI", team: 5 },
  // { name: "NICK WEILER-BABB", team: 6 },
  // { name: "CARSEN EDWARDS", team: 6 },
  // { name: "JOHANNES VOIGTMANN", team: 6 },
  // { name: "SHABAZZ NAPIER", team: 6 },
  // { name: "ANDREAS OBST", team: 6 },
  // { name: "DEVIN BOOKER", team: 6 },
  // { name: "OSCAR DA SILVA", team: 6 },
  // { name: "DANKO BRANKOVIC", team: 6 },
  // { name: "IVAN KHARCHENKOV", team: 6 },
  // { name: "ELIAS HARRIS", team: 6 },
  // { name: "COLLIN MALCOLM", team: 7 },
  // { name: "NADIR HIFI", team: 7 },
  // { name: "TYSON WARD", team: 7 },
  // { name: "LEOPOLD CAVALIERE", team: 7 },
  // { name: "KEVARRIUS HAYES", team: 7 },
  // { name: "MIKAEL JANTUNEN", team: 7 },
  // { name: "TJ SHORTS", team: 7 },
  // { name: "BANDJA SY", team: 7 },
  // { name: "MAODO LO", team: 7 },
  // { name: "YAKUBA OUATTARA", team: 7 },
  // { name: "SHANE LARKIN", team: 8 },
  // { name: "RODRIGUE BEAUBOIS", team: 8 },
  // { name: "JORDAN NWORA", team: 8 },
  // { name: "ROLANDS SMITS", team: 8 },
  // { name: "DARIUS THOMPSON", team: 8 },
  // { name: "VINCENT POIRIER", team: 8 },
  // { name: "ERCAN OSMANI", team: 8 },
  // { name: "ELIJAH BRYANT", team: 8 },
  // { name: "DAN OTURU", team: 8 },
  // { name: "STANLEY JOHNSON", team: 8 },
  // { name: "KOSTAS SLOUKAS", team: 9 },
  // { name: "JERIAN GRANT", team: 9 },
  // { name: "MATHIAS LESSORT", team: 9 },
  // { name: "JUANCHO HERNANGOMEZ", team: 9 },
  // { name: "LORENZO BROWN", team: 9 },
  // { name: "CEDI OSMAN", team: 9 },
  // { name: "KENDRICK NUNN", team: 9 },
  // { name: "KONSTANTINOS MITOGLOU", team: 9 },
  // { name: "OMER YURTSEVEN", team: 9 },
  // { name: "PANAGIOTIS KALAITZAKIS", team: 9 },
  { name: "NENO DIMITRIJEVIC", team: 10 },
  { name: "ARMONI BROOKS", team: 10 },
  { name: "ZACH LEDAY", team: 10 },
  { name: "NIKOLA MIROTIC", team: 10 },
  { name: "FABIEN CAUSEUR", team: 10 },
  { name: "GIAMPAOLO RICCI", team: 10 },
  { name: "SHAVON SHIELDS", team: 10 },
  { name: "LEANDRO BOLMARO", team: 10 },
  { name: "NICCOLO MANNION", team: 10 },
  { name: "STEFANO TONUT", team: 10 },
  { name: "CARLIK JONES", team: 11 },
  { name: "STERLING BROWN", team: 11 },
  { name: "ISAAC BONGA", team: 11 },
  { name: "TYRIQUE JONES", team: 11 },
  { name: "BRANDON DAVIES", team: 11 },
  { name: "FRANK NTILIKINA", team: 11 },
  { name: "VANJA MARINKOVIC", team: 11 },
  { name: "ALEKSEJ POKUSEVSKI", team: 11 },
  { name: "IFFE LUNDBERG", team: 11 },
  { name: "DUANE WASHINGTON", team: 11 },
  { name: "JAYLEN HOARD", team: 12 },
  { name: "WILLIAM RAYMAN", team: 12 },
  { name: "LEVI RANDOLPH", team: 12 },
  { name: "ROMAN SORKIN", team: 12 },
  { name: "JOHN DIBARTOLOMEO", team: 12 },
  { name: "ROKAS JOKUBAITIS", team: 12 },
  { name: "JAKE COHEN", team: 12 },
  { name: "JASIEL RIVERO", team: 12 },
  { name: "TAMIR BLATT", team: 12 },
  { name: "DAVID DeJULIUS", team: 12 },
  { name: "THEO MALEDON", team: 13 },
  { name: "PARIS LEE", team: 13 },
  { name: "JOFFREY LAUVERGNE", team: 13 },
  { name: "ANDRE ROBERSON", team: 13 },
  { name: "NEAL SAKO", team: 13 },
  { name: "DAVID LIGHTY", team: 13 },
  { name: "NANDO DE COLO", team: 13 },
  { name: "MBAYE NDIAYE", team: 13 },
  { name: "EDWIN JACKSON", team: 13 },
  { name: "SHAQUILLE HARRISON", team: 13 },
  { name: "ISAIA CORDINIER", team: 14 },
  { name: "WILL CLYBURN", team: 14 },
  { name: "MATTHEW MORGAN", team: 14 },
  { name: "ACHILLE POLONARA", team: 14 },
  { name: "MOUHAMET DIOUF", team: 14 },
  { name: "MARCO BELINELLI", team: 14 },
  { name: "ANTE ZIZIC", team: 14 },
  { name: "TORNIKE SHENGELIA", team: 14 },
  { name: "DANIEL HACKETT", team: 14 },
  { name: "ALESSANDRO PAJOLA", team: 14 },
  { name: "TIM SCHNEIDER", team: 15 },
  { name: "TREVION WILLIAMS", team: 15 },
  { name: "MATTEO SPAGNOLO", team: 15 },
  { name: "JONAS MATTISSECK", team: 15 },
  { name: "GABRIELE PROCIDA", team: 15 },
  { name: "YANNI WETZELL", team: 15 },
  { name: "ELIAS RAPIEQUE", team: 15 },
  { name: "MARTIN HERMANNSSON", team: 15 },
  { name: "ZIGA SAMAR", team: 15 },
  { name: "LOUIS OLINDE", team: 15 },
];
