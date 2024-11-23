import { googleSheets } from "./plugins/googleSheets.plugin.js";

/**
 * Read data
 */
const spreadsheetId = process.env.SPREAD_SHEET_ID;
const rangeForRead = "Hoja 1!A:A";
let resultRead;

try {
  resultRead = await googleSheets.read(spreadsheetId, rangeForRead);
  console.log(resultRead);
} catch (err) {
  // TODO (developer) - Handle exception
  throw err;
}

/**
 * Write data
 */
const rangeForWrite = "Hoja 1!B1";
let resultWrite;
const data = [
  [
    'Email',
  ],
  [
    '1@localhost',
  ],
  [
    '2@localhost',
  ],
  [
    '3@localhost',
  ],
  [
    '4@localhost',
  ],
  [
    '5@localhost',
  ],
]

try {
  resultWrite = await googleSheets.write(spreadsheetId, rangeForWrite, data, 'RAW');
  console.log(resultWrite.data);
} catch (error) {
  throw error;
}