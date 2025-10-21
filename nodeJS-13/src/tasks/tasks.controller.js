// --- MODULE IMPORTS ---
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
// StatusCodes: Untuk kode status numerik HTTP (misalnya, 200, 404).
// ReasonPhrases: Untuk deskripsi status yang bisa dibaca manusia (misalnya, 'OK', 'NOT_FOUND').

// --- CONTROLLER HANDLERS ---
// Fungsi-fungsi ini menangani logika bisnis dan memproses permintaan dari router.

/**
 * handleGetTasks: Menangani request GET. Mengambil dan mengirimkan daftar tugas.
 * Biasanya akan mengambil data dari database, namun di sini menggunakan data dummy (mock data).
 */
function handleGetTasks(req, res) {
  // handle Request dari api endpoint
  let response = [
    {
      title: "Title of the task",
      date: "2025-01-01T12:00:00",
      description:
        "Ini adalah deskrispi yang ada di dalam task, berisikan apa saja yang akan dilakukan",
      priority: "normal",
      status: "todo",
    },
    {
      title: "Title of the task 2",
      date: "2025-01-01T12:00:00",
      description:
        "Ini adalah deskrispi yang ada di dalam task, berisikan apa saja yang akan dilakukan",
      priority: "normal",
      status: "todo",
    },
  ];

  // Mengirimkan respons dengan status code 200 (OK).
  res.status(StatusCodes.OK).json(response);
}

/**
 * handlePostTasks: Menangani request POST. Logika untuk membuat tugas baru.
 */
function handlePostTasks(req, res) {
  res.send("POST Tasks Controller");
}

/**
 * handlePatchTasks: Menangani request PATCH. Logika untuk memperbarui sebagian data tugas.
 */
function handlePatchTasks(req, res) {
  res.send("PATCH Tasks Controller");
}

/**
 * handleDeleteTasks: Menangani request DELETE. Logika untuk menghapus tugas.
 */
function handleDeleteTasks(req, res) {
  res.send("DELETE Tasks Controller");
}

// --- MODULE EXPORT ---
// Mengekspor semua fungsi handler agar dapat diakses oleh router.
module.exports = {
  handleGetTasks,
  handlePostTasks,
  handlePatchTasks,
  handleDeleteTasks,
};
