import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function extractText(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
}

async function main() {
  const finopsPdf = 'src/data/PDFS/feasiblities/Feasibility Study for FinOps Agent (1).pdf';
  const secopsPdf = 'src/data/PDFS/feasiblities/Feasibility Study for SecOps Agent (2).pdf';
  const workspacePdf = 'src/data/PDFS/feasiblities/Worksense - Workspace Forecasting_FeasibilityReport (2).pdf';

  try {
    const finopsText = await extractText(finopsPdf);
    console.log('FinOps PDF Text:');
    console.log(finopsText.substring(0, 2000)); // First 2000 chars

    const secopsText = await extractText(secopsPdf);
    console.log('SecOps PDF Text:');
    console.log(secopsText.substring(0, 2000));

    const workspaceText = await extractText(workspacePdf);
    console.log('Workspace Forecasting PDF Text:');
    console.log(workspaceText.substring(0, 2000));
  } catch (error) {
    console.error('Error:', error);
  }
}

main();