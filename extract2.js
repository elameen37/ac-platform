const fs = require('fs');
const js = fs.readFileSync('index.js', 'utf8');

// Find all strings in quotes that look like readable text, paths, or component names
const stringRegex = /"(.*?)"/g;
let match;
const strings = new Set();
while ((match = stringRegex.exec(js)) !== null) {
    if (match[1].length > 4 && match[1].length < 100 && /^[a-zA-Z\s/-_]+$/.test(match[1])) {
        strings.add(match[1]);
    }
}

// Group by common words to see the app's domain
const domainWords = ['contract', 'procurement', 'report', 'dashboard', 'user', 'admin', 'project', 'audit', 'tender'];
const categorized = {};
domainWords.forEach(w => categorized[w] = []);

strings.forEach(s => {
    const lower = s.toLowerCase();
    domainWords.forEach(w => {
        if (lower.includes(w)) {
            categorized[w].push(s);
        }
    });
});

let output = 'Extracted Domain Strings:\n\n';
for (const [key, list] of Object.entries(categorized)) {
    output += `=== ${key.toUpperCase()} ===\n`;
    output += list.slice(0, 30).join(' | ') + '\n\n';
}

fs.writeFileSync('extracted_apms_2.txt', output);
console.log('Deep extraction complete.');
