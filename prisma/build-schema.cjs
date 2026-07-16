/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const prismaDir = __dirname;
const output = path.join(prismaDir, 'schema.prisma');

const ignoreFiles = new Set([
  'schema.prisma',
  'build-schema.js',
  'build-schema.ts',
  'build-schema.cjs',
]);

const ignoreDirs = new Set(['migrations', 'node_modules']);

const files = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (ignoreDirs.has(entry.name)) continue;

      walk(fullPath);
      continue;
    }

    if (entry.name.endsWith('.prisma') && !ignoreFiles.has(entry.name)) {
      files.push(fullPath);
    }
  }
}

walk(prismaDir);
console.log(files);
files.sort();

let schema = `// =====================================
// AUTO GENERATED
// DO NOT EDIT
// =====================================

`;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8').trim();

  if (!content) continue;

  schema += content + '\n\n';
}

fs.writeFileSync(output, schema);

console.log(`✅ Generated schema.prisma from ${files.length} files.`);
