const fs = require('fs');
const js = fs.readFileSync('index.js', 'utf8');

// Find all path="..." strings to get React Router routes
const pathRegex = /path:\s*["']([^"']+)["']/g;
const paths = new Set();
let match;
while ((match = pathRegex.exec(js)) !== null) {
    paths.add(match[1]);
}

// Find standard HTML strings or specific text that looks like navigation or features
const featureRegex = />([A-Za-z\s]{3,40})</g;
const features = new Set();
while ((match = featureRegex.exec(js)) !== null) {
    if (match[1].trim().length > 3) {
        features.add(match[1].trim());
    }
}

// Check for keywords
const keywords = ['login', 'dashboard', 'admin', 'user', 'project', 'contract', 'procurement', 'report'];
const foundKeywords = keywords.filter(k => js.toLowerCase().includes(k));

fs.writeFileSync('extracted_apms.txt', `
Routes:
${Array.from(paths).join('\n')}

Keywords Found:
${foundKeywords.join('\n')}

Sample Strings:
${Array.from(features).slice(0, 100).join(' | ')}
`);
console.log('Extraction complete. Saved to extracted_apms.txt');
