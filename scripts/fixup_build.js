const fs = require('fs');
const path = require('path');

// Function to get all JS files in the directory
function getJsFiles(dir) {
  return fs.readdirSync(dir).filter(file => file.endsWith('.js'));
}

// Function to update references in a file
function updateFileReferences(filePath, oldNames, newNames) {
  let content = fs.readFileSync(filePath, 'utf8');
  oldNames.forEach((oldName, index) => {
    const regex = new RegExp('"' + oldName +'"', 'g');
    content = content.replace(regex, '"' + newNames[index] + '"');
  });
  fs.writeFileSync(filePath, content);
}

// Main function to process the directory
function processDirectory(dir, uid) {
  var oldNames = [];
  var newNames = [];
  oldNames.push("fbl.js");
  newNames.push(`https://app-bin.formabble.com/fbl-${uid}.js`);
  oldNames.push("fbl.wasm");
  newNames.push(`https://app-bin.formabble.com/fbl-${uid}.wasm`);
  oldNames.push("fbl-loader.js");
  newNames.push(`https://app-bin.formabble.com/fbl-loader-${uid}.js`);

  // Update references in index.html
  const indexPath = path.join(dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    updateFileReferences(indexPath, oldNames, newNames);
  }

  // Rename JS files
  oldNames.forEach((file, index) => {
    const baseNewName = path.basename(newNames[index]);
    const oldPath = path.join(dir, file);
    
    // Update references in renamed files
    updateFileReferences(oldPath, oldNames, newNames);
    
    const newPath = path.join(dir, baseNewName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldPath} to ${newPath}`);
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

// Process the directory
processDirectory(directory, uid);
