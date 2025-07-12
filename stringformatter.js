const readline = require('readline');
const { exec } = require('child_process');
const os = require('os');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function copyToClipboard(text) {
  let command;
  const platform = os.platform();
  
  if (platform === 'win32') {
    command = `echo ${text} | clip`;
  } else if (platform === 'darwin') {
    command = `echo "${text}" | pbcopy`;
  } else {
    // Linux and other Unix-like systems
    command = `printf "${text}" | xclip -selection clipboard`;
  }
  
  exec(command, (error) => {
    if (error) {
      console.log('(Could not copy to clipboard - clipboard utility not available)');
    } else {
      console.log('(Copied to clipboard)');
    }
  });
}

function punctuationToWord(char) {
    // Check if input is a single character string
    if (typeof char !== 'string' || char.length !== 1) {
        return null;
    }
    
    if (typeof char === 'number' || /[0-9]/.test(char)) {
      return '_' + char;
    }
    if (/[a-zA-Z]/.test(char)) {
        return char;
    }
    
    // Mapping of punctuation marks to their word names
    const punctuationMap = {
        '!': 'exclamationMrk',
        '@': 'atSign',
        '#': 'hash',
        '$': 'dollarSign',
        '%': 'percent Sign',
        '^': 'caret',
        '&': 'ampersand',
        '*': 'asterisk',
        '(': 'leftParenthesis',
        ')': 'rightParenthesis',
        '-': 'hyphen',
        '_': 'underscore',
        '=': 'equalsSign',
        '+': 'plusSign',
        '[': 'leftBracket',
        ']': 'rightBracket',
        '{': 'leftBrace',
        '}': 'rightBrace',
        '\\': 'backslash',
        '|': 'pipe',
        ';': 'semicolon',
        ':': 'colon',
        '"': 'quotationMark',
        "'": 'apostrophe',
        ',': 'comma',
        '.': 'period',
        '/': 'forwardSlash',
        '<': 'lessThan',
        '>': 'greaterThan',
        '?': 'questionMark',
        '`': 'backtick',
        '~': 'tilde',
        ' ': 'space'
    };
    
    // Return the word for the punctuation mark, or null if not found
    return punctuationMap[char] || null;
}

function formatString(str) {
  if (str.match(/^\d+$/)) {
    return String(str).split('').map(char => `_._${char},`).join('');
  }
  return str.split('').map(char => `_.${punctuationToWord(char)},`).join('');
}

function promptForString() {
  rl.question('Enter a string: ', (input) => {
    if (input.trim() === '') {
      console.log('Please enter a valid string.');
    } else {
      const formatted = `_.${input.match(/^\d+$/) ? 'num': 'str'}(${formatString(input).slice(0, -1)})`;
      console.log(formatted);
      copyToClipboard(formatted);
    }
    
    // Prompt for another string
    promptForString();
  });
}

console.log('String Formatter - Enter strings to format them with _. and , characters');
console.log('Press Ctrl+C to exit');

// Start the prompt loop
promptForString();