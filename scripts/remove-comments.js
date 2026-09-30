import fs from "fs";
import path from "path";
import strip from "strip-comments";

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', '.next', 'coverage'];

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const cleaned = strip(original, {
    language: 'javascript', // works well for JSX/TSX too
    preserveNewlines: true,
  });

  if (cleaned !== original) {
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log(`Cleaned: ${filePath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name)) {
        walk(fullPath);
      }
    } else if (EXTENSIONS.includes(path.extname(entry.name))) {
      processFile(fullPath);
    }
  }
}

// Change this to your project folder if needed
const targetDir = process.argv[2] || './src';

console.log(`Removing comments from: ${targetDir}`);
walk(targetDir);
console.log('Done!');