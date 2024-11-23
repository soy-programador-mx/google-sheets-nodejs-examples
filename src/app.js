import { google } from 'googleapis';
import 'dotenv/config'
import * as path from 'path'

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(import.meta.dirname, "..", process.env.GOOGLE_KEY_JSON_PATH),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const service = google.sheets({version: 'v4', auth});
const spreadsheetId = process.env.SPREAD_SHEET_ID;
const range = "Hoja 1!A:A";

try {

  /**
   * Read https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get?hl=es-419
   */
  const result = await service.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  const numRows = result.data.values ? result.data.values.length : 0;
  console.log(`${numRows} rows retrieved.`);
  console.log(result.data.values);
} catch (err) {
  // TODO (developer) - Handle exception
  throw err;
}