const os = require('os');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// 1. Obtener los datos solicitados
const uniqueId = crypto.randomUUID();
const username = os.userInfo().username;
const system = os.platform();
const cpus = os.cpus().length;

const filePath = path.join(__dirname, 'ficha.txt');

const data = `ID: ${uniqueId}
Usuario: ${username}
Sistema: ${system}
CPUs: ${cpus}
`;

try {
    fs.writeFileSync(filePath, data, 'utf-8');
    console.log('Fichero "ficha.txt" creado y guardado correctamente.\n');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log('--- Contenido del fichero ---');
    console.log(fileContent.trim());
} catch (error) {
    console.error('Ocurrió un error al procesar el fichero:', error.message);
}