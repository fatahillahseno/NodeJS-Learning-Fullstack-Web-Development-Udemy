// --- MODULE IMPORTS ---
// Mengimpor module Express
const express = require("express");
// Mengimpor controller yang berisi logika bisnis (fungsi-fungsi handler)
const tasksController = require("./tasks.controller.js");

// Membuat instance dari Express Router untuk mengelola rute spesifik
const tasksRouter = express.Router();

// --- TASK ROUTES DEFINITION ---
// Mendefinisikan semua rute yang berkaitan dengan '/tasks'
// Rute ini akan digunakan pada file utama (misalnya: app.use('/api', tasksRouter);)

// [GET] /tasks: Mengambil semua daftar tugas
tasksRouter.get("/tasks", tasksController.handleGetTasks);

// [POST] /tasks: Membuat tugas baru
tasksRouter.post("/tasks", tasksController.handlePostTasks);

// [PATCH] /tasks: Memperbarui (sebagian/minor update) tugas yang sudah ada
tasksRouter.patch("/tasks", tasksController.handlePatchTasks);

// [DELETE] /tasks: Menghapus tugas
tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

// --- MODULE EXPORT ---
// Mengekspor router agar bisa digunakan dan di-mount di file utama aplikasi
module.exports = tasksRouter;
