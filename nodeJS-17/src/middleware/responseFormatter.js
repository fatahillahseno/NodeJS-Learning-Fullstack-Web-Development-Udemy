// --- MODULE IMPORTS ---
// Mengimpor fungsi getReasonPhrase dari package http-status-codes.
// Fungsi ini digunakan untuk mendapatkan deskripsi teks (Reason Phrase) dari kode status HTTP numerik.
const { getReasonPhrase } = require("http-status-codes");

// --- MIDDLEWARE DEFINITION ---

/**
 * responseFormatter: Middleware yang bertugas memformat respons JSON secara terstruktur.
 * Middleware ini menimpa (override) metode res.json asli.
 */
function responseFormatter(req, res, next) {
  // Menyimpan referensi ke fungsi res.json asli sebelum di-override
  const originalJson = res.json;

  // Menimpa (override) fungsi res.json dengan implementasi kustom
  res.json = (data) => {
    // Membuat objek respons terstruktur yang konsisten
    const response = {
      // Menentukan status respons: 'success' jika status code 200-299, selain itu 'error'.
      status:
        res.statusCode >= 200 && res.statusCode < 300 ? "success" : "error",

      // Menyertakan kode status HTTP numerik yang ditetapkan pada respons
      statusCode: res.statusCode,

      // Menyertakan pesan deskriptif (Reason Phrase, cth: 'OK', 'Not Found')
      message: getReasonPhrase(res.statusCode),

      // Menyertakan data asli (payload) yang dikirimkan oleh handler
      data: res.statusCode >= 200 && res.statusCode < 300 ? data : null,
      error: res.statusCode >= 200 && res.statusCode < 300 ? null : data,
    };

    // Memanggil fungsi json asli yang telah disimpan, menggunakan konteks 'res' dan respons yang sudah diformat
    originalJson.call(res, response);
  };

  // Melanjutkan eksekusi ke middleware atau handler rute berikutnya
  next();
}

// --- MODULE EXPORT ---
// Mengekspor middleware responseFormatter agar dapat digunakan di file aplikasi utama (app.js)
module.exports = responseFormatter;
