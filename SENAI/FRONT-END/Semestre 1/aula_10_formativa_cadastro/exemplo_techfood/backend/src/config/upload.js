const multer = require("multer");
const path = require("node:path");
const fs = require("node:fs");

// Caminho físico da pasta onde as imagens serão salvas
const uploadPath = path.resolve(
  __dirname,
  "..",
  "public",
  "uploads",
  "produtos",
);

// Cria a pasta automaticamente caso ela ainda não exista
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Define como o arquivo será armazenado no disco
const storage = multer.diskStorage({
  // Pasta de destino do upload
  destination: (req, file, callback) => {
    callback(null, uploadPath);
  },

  // Define o nome final do arquivo salvo
  filename: (req, file, callback) => {
    const timestamp = Date.now();
    const extensao = path.extname(file.originalname);

    const nomeArquivo = file.originalname
      .replace(extensao, "")
      .toLowerCase()
      .replace(/\s+/g, "-");

    callback(null, `${nomeArquivo}-${timestamp}${extensao}`);
  },
});

// Bloqueia arquivos que não sejam imagem
const fileFilter = (req, file, callback) => {
  const tiposPermitidos = ["image/jpeg", "image/png", "image/webp"];

  if (tiposPermitidos.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Formato de imagem inválido."));
  }
};

// Exporta a configuração final do Multer
module.exports = multer({
  storage,
  fileFilter,
  // Limita o tamanho máximo para 2 MB, para proteger o banco
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
  },
});
