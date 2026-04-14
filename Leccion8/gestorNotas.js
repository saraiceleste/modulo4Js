const fs = require('fs');
const archivo = 'notas.json';

function leerNotas() {
  try {
    const data = fs.readFileSync(archivo, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarNotas(notas) {
  fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
}

function crearNota(titulo, contenido) {
  const notas = leerNotas();
  const existe = notas.find(n => n.titulo === titulo);
  if (existe) {
    console.log('Nota ya existe');
    return;
  }
  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log('Nota creada');
}

function listarNotas() {
  const notas = leerNotas();
  if (notas.length === 0) {
    console.log('No hay notas');
    return;
  }
  notas.forEach((nota, i) => {
    console.log(`${i + 1}. ${nota.titulo}: ${nota.contenido}`);
  });
}

function eliminarNota(titulo) {
  const notas = leerNotas();
  const filtradas = notas.filter(n => n.titulo !== titulo);
  if (filtradas.length === notas.length) {
    console.log('Nota no encontrada');
    return;
  }
  guardarNotas(filtradas);
  console.log('Nota eliminada');
}

// Menú interactivo simple
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Uso: node gestorNotas.js [crear "Título" "Contenido"] | [listar] | [eliminar "Título"]');
} else if (args[0] === 'crear' && args[1] && args[2]) {
  crearNota(args[1], args.slice(2).join(' '));
} else if (args[0] === 'listar') {
  listarNotas();
} else if (args[0] === 'eliminar' && args[1]) {
  eliminarNota(args[1]);
} else {
  console.log('Comando inválido');
}