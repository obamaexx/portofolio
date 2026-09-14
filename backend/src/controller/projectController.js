const db = require("../config/db.js");

const getAllProjects = (req, res) => {
  const query = "SELECT * FROM projects ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data proyek",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil semua proyek",
      data: results,
    });
  });
};

const getProjectById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM projects WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data proyek",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Proyek dengan ID ${id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data proyek",
      data: results[0],
    });
  });
};

// POST /projects - Tambah proyek baru
const createProject = (req, res) => {
  const { title, description, image } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Field title wajib diisi",
    });
  }

  if (!description) {
    return res.status(400).json({
      success: false,
      message: "Field description wajib diisi",
    });
  }

  if (!image) {
    return res.status(400).json({
      success: false,
      message: "Field image wajib diisi",
    });
  }

  const query =
    "INSERT INTO projects (title, description, image) VALUES (?, ?, ?)";

  db.query(
    query,
    [title, description || null, image || null],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Gagal menambahkan proyek",
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Proyek berhasil ditambahkan",
        data: {
          id: result.insertId,
          title,
          description: description || null,
          image: image || null,
        },
      });
    },
  );
};

// PUT /projects/:id - Edit proyek yang ada
const updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Field title wajib diisi untuk melakukan update",
    });
  }

  const checkQuery = "SELECT * FROM projects WHERE id = ?";
  db.query(checkQuery, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendeteksi proyek",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Proyek dengan ID ${id} tidak ditemukan`,
      });
    }

    const existing = results[0];
    const newTitle = title || existing.title;
    const newDescription =
      typeof description !== "undefined" ? description : existing.description;
    const newImage = typeof image !== "undefined" ? image : existing.image;

    const updateQuery =
      "UPDATE projects SET title = ?, description = ?, image = ? WHERE id = ?";
    db.query(updateQuery, [newTitle, newDescription, newImage, id], (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Gagal memperbarui proyek",
          error: err.message,
        });
      }

      res.status(200).json({
        success: true,
        message: "Proyek berhasil diperbarui",
        data: {
          id: parseInt(id, 10),
          title: newTitle,
          description: newDescription,
          image: newImage,
        },
      });
    });
  });
};

// DELETE /projects/:id - Hapus proyek
const deleteProject = (req, res) => {
  const { id } = req.params;

  const checkQuery = "SELECT * FROM projects WHERE id = ?";
  db.query(checkQuery, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendeteksi proyek",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Proyek dengan ID ${id} tidak ditemukan`,
      });
    }

    const deleteQuery = "DELETE FROM projects WHERE id = ?";
    db.query(deleteQuery, [id], (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Gagal menghapus proyek",
          error: err.message,
        });
      }

      res.status(200).json({
        success: true,
        message: `Proyek dengan ID ${id} berhasil dihapus!`,
      });
    });
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
