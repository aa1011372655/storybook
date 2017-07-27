const coloured = `
⢀⢀⣀⣀⣠⣤⣤⣤⣤⣤⣶⣶⣶⣶⣶⣶⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⡆⠀⠀⠀⠀⠀
⢸⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢀⣿⣿⣇⡀⠀⠀⢀⣀⣀⣀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⣿⣿⡇⣀⣀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⢸⣿⣿⠀⠀⢀⠀⠀⠀
⠈⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠸⠿⣿⣿⠟⠛⢀⣿⣿⡿⢿⣿⣿⠀⠀⣿⣿⣿⣿⡟⢠⢿⢿⠀⠀⢿⢿⠀⠀⣿⣿⣿⠿⣿⣿⡆⠀⣾⣿⢿⠿⢿⣿⣆⠀⣴⣿⣿⠿⣿⣿⣷⠀⢸⣿⣿⢀⣾⣿⡟⠁⠀
⠀⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⣿⠀⠀⢸⣿⣿⠀⠀⣿⣿⡇⠀⣿⣿⠁⠀⠀⢸⢿⢿⠀⠀⢿⢿⠀⠀⣿⣿⠀⠀⣿⣿⣿⢰⢿⢿⠀⠀⢸⢿⢿⠀⣿⣿⠃⠀⢸⣿⣿⠀⢸⣿⣿⣿⣿⣍⠀⠀⠀
⠀⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⣿⠀⠀⠘⣿⣿⣦⣾⣿⣿⠀⠀⣿⣿⠀⠀⠀⠈⢿⢿⣷⣾⢿⢿⠀⠀⣿⣿⣷⣶⣿⣿⠁⠀⣿⢿⣷⡶⣿⢿⠃⠀⢿⣿⣷⣶⣿⣿⠏⠀⢸⣿⣿⠈⢿⣿⣷⣀⠀
⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠉⠉⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠉⠉⠀⠀⠀⠀⢠⣀⠀⣠⢿⢿⠀⠀⠉⠉⠀⠉⠉⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠈⠉⠉⠀⠀⠈⠉⠉⠀
⠀⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⢿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠛⠛⠛⠛⠛⠛⠛⠛⠛⠿⠿⠿⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

const mono = `
⢀⢀⣀⣀⣠⣤⣤⣤⣤⣤⣶⣶⣶⠀⠀⣶⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠸⣿⣿⣿⡿⠉⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⠀⠀⠀⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⡆⠀⠀⠀⠀⠀
⢸⠀⣿⣿⣿⠀⠀⠀⢰⣿⡀⠀⠀⢸⣿⣿⣿⠀⠀⢀⣿⣿⣇⡀⠀⠀⢀⣀⣀⣀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⣿⣿⡇⣀⣀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⢸⣿⣿⠀⠀⢀⠀⠀⠀
⠈⡆⣿⣿⣿⣧⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⠀⠸⠿⣿⣿⠟⠛⢀⣿⣿⡿⢿⣿⣿⠀⠀⣿⣿⣿⣿⡟⢠⢿⢿⠀⠀⢿⢿⠀⠀⣿⣿⣿⠿⣿⣿⡆⠀⣾⣿⢿⠿⢿⣿⣆⠀⣴⣿⣿⠿⣿⣿⣷⠀⢸⣿⣿⢀⣾⣿⡟⠁⠀
⠀⡇⣿⣿⣿⣿⣿⣶⣤⠀⠀⠀⠀⢿⣿⣿⣿⠀⠀⠀⣿⣿⠀⠀⢸⣿⣿⠀⠀⣿⣿⡇⠀⣿⣿⠁⠀⠀⢸⢿⢿⠀⠀⢿⢿⠀⠀⣿⣿⠀⠀⣿⣿⣿⢰⢿⢿⠀⠀⢸⢿⢿⠀⣿⣿⠃⠀⢸⣿⣿⠀⢸⣿⣿⣿⣿⣍⠀⠀⠀
⠀⣷⣿⣿⣿⠀⠀⠀⠸⣿⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⣿⣿⠀⠀⠘⣿⣿⣦⣾⣿⣿⠀⠀⣿⣿⠀⠀⠀⠈⢿⢿⣷⣾⢿⢿⠀⠀⣿⣿⣷⣶⣿⣿⠁⠀⣿⢿⣷⡶⣿⢿⠃⠀⢿⣿⣷⣶⣿⣿⠏⠀⢸⣿⣿⠈⢿⣿⣷⣀⠀
⠀⣿⣿⣿⣿⣷⣀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⠀⠀⠀⠉⠉⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠉⠉⠀⠀⠀⠀⢠⣀⠀⣠⢿⢿⠀⠀⠉⠉⠀⠉⠉⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠈⠉⠉⠀⠀⠈⠉⠉⠀
⠀⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⢿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠛⠛⠛⠛⠛⠛⠛⠛⠛⠿⠿⠿⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

const chalkMap = {
  '▓': () => '\\033[38;5;176m',
  '▒': () => '\\033[38;5;211m',
  '.': () => '\\033[38;5;231m',
  B: () => '\\033[38;5;111m',
  '₯': () => '\\033[38;5;150m',
  R: () => '\\033[38;5;210m',
  m: () => '\\033[38;5;211m',
  l: () => '\\033[38;5;225m',
  O: () => '\\033[38;5;215m',
  Z: () => '\\033[38;5;232m',
  ' ': () => '\\033[38;5;16m',
  '?': () => `\\033[38;5;${Math.floor(Math.random() * 255) + 1}m`,
};

const colourmap = `
▓▓▒▒▒▒▒▒▒▒▒▒▒..▒▒                                                               
▓▓▒▒▒▒▒▒▒▒▒▒▒ll▒▒                                                               
▓▓▒▒▒▒l.....▒▒▒▒▒   OOO                        RRR                      ▓▓▓     
▓▓▒▒▒l...▒▒..▒▒▒▒  OOOOO  ₯₯₯₯   ▓▓        BB  RRRRR     BBB     ₯₯₯   ▓▓▓  ▓   
▓▓▒▒▒▒...l▒▒▒▒▒▒▒ OOOOOO₯₯₯₯₯₯₯  ▓▓▓▓▓BBB  BB  RRRRRRR BBBBBBB ₯₯₯₯₯₯₯ ▓▓▓▓▓▓▓▓ 
 ▓▒▒▒▒▒▒l....▒▒▒▒   OO  ₯₯₯  ₯₯₯ ▓▓▓  BBB  BB  RR  RRRBBB  BBB ₯₯₯ ₯₯₯ ▓▓▓▓▓▓   
 ▓▒▒▒...▒▒l...▒▒▒   OO  ₯₯₯₯₯₯₯  ▓▓   BBBBBBB  RRRRRRR BBBBBBB ₯₯₯₯₯₯₯ ▓▓▓▓▓▓▓▓ 
 ▓▒▒▒▒l.....l▒▒▒▒   OO    ₯₯₯₯   ▓▓    BB BBB  RR RR    BBBB    ₯₯₯₯   ▓▓▓  ▓▓▓ 
 ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                      BBBBBB                                   
 ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                                               
`.split('');

const result = coloured.split('').map((char, index) => {
  const colorKey = colourmap[index];
  const colorPrefix = chalkMap[colorKey] ? chalkMap[colorKey]() : '';
  const isSpace = colorKey === ' ';
  return colorPrefix + (isSpace ? '⠀' : char);
});

const exec = require('child_process').exec;

exec(`printf "%b" "${result.join('')}\\033[0m"`, {}).stdout.pipe(process.stdout);

exec(`printf "%b" "${mono}"`, {}).stdout.pipe(process.stdout);