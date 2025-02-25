const fs = require('fs');
const path = require('path');

// Function to get all JS files in the directory
function getJsFiles(dir) {
  return fs.readdirSync(dir).filter(file => file.endsWith('.js'));
}

// Function to update references in a file
function updateFileReferences(filePath, oldNames, newNames) {
  if (path.extname(filePath) !== '.js' && path.extname(filePath) !== '.html')
    return;
  let content = fs.readFileSync(filePath, 'utf8');
  oldNames.forEach((oldName, index) => {
    const regex = new RegExp('"' + oldName + '"', 'g');
    content = content.replace(regex, (match) => {
      console.log(`${filePath}> Replaced ${match} with "${newNames[index]}"`);
      return '"' + newNames[index] + '"';
    });
  });
  fs.writeFileSync(filePath, content);
}

// Main function to process the directory
function processDirectory(files, uid) {
  var oldNames = [];
  var newNames = [];
  oldNames.push("./fbl.js");
  newNames.push(`./fbl-${uid}.js`);
  oldNames.push("fbl.js");
  newNames.push(`./fbl-${uid}.js`);
  oldNames.push("fbl.wasm");
  newNames.push(`https://app-bin.formabble.com/fbl-${uid}.wasm`);
  oldNames.push("./fbl-loader.js");
  newNames.push(`./versions/fbl-loader-${uid}.js`);


  // Rename JS files
  files.forEach((item, index) => {
    const file = item.p;

    console.log(`Attempting to update ${file}`);

    if (!fs.existsSync(file)) {
      console.warn(`File "${file}" does not exist.`);
      return;
    }

    // Update references in renamed files
    updateFileReferences(file, oldNames, newNames);

    if (typeof item.renameTo === 'string') {
      fs.renameSync(file, item.renameTo);
      console.log(`Renamed ${file} to ${item.renameTo}`);
    }
  });

  console.log('Processing completed.');
}

// Get directory and UID from command line arguments
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node fixup_build.js <directory> <UID>');
  process.exit(1);
}

const directory = args[0];
const uid = args[1];

// Check if directory exists
if (!fs.existsSync(directory)) {
  console.error(`Directory "${directory}" does not exist.`);
  process.exit(1);
}

const files = [
  { p: `${directory}/index.html` },
  { p: `${directory}/fbl.js`, renameTo: `${directory}/fbl-${uid}.js` },
  { p: `${directory}/fbl.wasm`, renameTo: `${directory}/fbl-${uid}.wasm` },
  { p: `${directory}/fbl-loader.js`, renameTo: `${directory}/fbl-loader-${uid}.js` },
];

// Process the directory
processDirectory(files, uid);
