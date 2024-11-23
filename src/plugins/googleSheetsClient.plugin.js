import 'dotenv/config'
import { google } from 'googleapis';
import * as path from 'path'

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(import.meta.dirname, "..","..", process.env.GOOGLE_KEY_JSON_PATH),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const googleSheetsClient = google.sheets({version: 'v4', auth});