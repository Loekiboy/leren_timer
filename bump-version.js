#!/usr/bin/env node
/*
 Simple version bump script that keeps package.json and manifest.json in sync.
 Usage:
   node bump-version.js [patch|minor|major]
*/
const fs = require('fs');
const path = require('path');

const root = __dirname;
const pkgPath = path.join(root, 'package.json');
const manifestPath = path.join(root, 'manifest.json');

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJSON(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function bump(v, type) {
  const parts = v.split('.').map(n => parseInt(n, 10));
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    throw new Error(`Unexpected version format: ${v}`);
  }
  if (type === 'major') {
    parts[0] += 1; parts[1] = 0; parts[2] = 0;
  } else if (type === 'minor') {
    parts[1] += 1; parts[2] = 0;
  } else { // patch
    parts[2] += 1;
  }
  return parts.join('.');
}

function main() {
  const type = (process.argv[2] || 'patch').toLowerCase();
  if (!['patch','minor','major'].includes(type)) {
    console.error('Usage: node bump-version.js [patch|minor|major]');
    process.exit(1);
  }

  const pkg = readJSON(pkgPath);
  const manifest = readJSON(manifestPath);

  const current = pkg.version || manifest.version;
  const next = bump(current, type);

  pkg.version = next;
  manifest.version = next;

  writeJSON(pkgPath, pkg);
  writeJSON(manifestPath, manifest);

  console.log(`Version bumped: ${current} -> ${next}`);
}

main();
