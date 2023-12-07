import net from 'node:net';
import fs from 'node:fs';

// # EJERCICIO 1
export const ping = (ip, cb) => {
	const startTime = process.hrtime();

	const client = net.connect({ port: 80, host: ip }, () => {
		client.end();
		const info = { time: process.hrtime(startTime), ip };
		cb(null, info);
	});

	client.on('error', (err) => {
		client.end();
		cb(err, null);
	});
};

ping('midu.dev', (err, info) => {
	if (err) console.error(err);
	console.log(info);
});

// # EJERCICIO 2
export function obtenerDatosPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ data: 'datos importantes' });
		}, 2000);
	});
}

// # EJERCICIO 3

/*
 * Copia y convierte el contenido del archivo input.txt a mayusculas y lo "pega" en el archivo output.txt
 */
export function procesarArchivo(cb) {
	const encodingType = 'utf8';
	const inputFile = 'input.txt';
	const outputFile = 'output.txt';

	const enviarError = (mensaje, err) => {
		console.error(mensaje, err.message);
		cb(err);
	};

	const enviarRespuesta = (mensaje) => {
		console.log(mensaje);
		cb();
	};

	const writeFileCallback = (error) => {
		if (error) {
			enviarError('Error guardando archivo:', error);
		}

		enviarRespuesta('Archivo procesado y guardado con éxito');
	};

	const readFileCallback = (error, contenido) => {
		if (error) {
			enviarError('Error leyendo archivo:', error);
		}

		setTimeout(() => {
			const textoProcesado = contenido.toUpperCase();

			fs.writeFile(outputFile, textoProcesado, writeFileCallback);
		}, 1000);
	};

	fs.readFile(inputFile, encodingType, readFileCallback);
}

export async function procesarArchivoPromise() {
	// tu código aquí
	const encodingType = 'utf8';
	const inputFile = 'input.txt';
	const outputFile = 'output.txt';

	const enviarError = (mensaje, err) => {
		console.error(mensaje, err.message);
	};

	const enviarRespuesta = (mensaje) => {
		console.log(mensaje);
	};

	try {
		const inputTexto = await fs.promises.readFile(inputFile, encodingType);

		const textoProcesado = inputTexto.toUpperCase();

		await fs.promises.writeFile(outputFile, textoProcesado);

		enviarRespuesta('Archivo procesado y guardado con éxito');
	} catch (error) {
		enviarError('Error leyendo y guardando archivo:', error);
	}
}

// # EJERCICIO 4
/**
 * Leemos los ficheros de forma asincrona para capturar posibles errores y
 * usamos promise.all paralelizando las functiones 'readFile' para reducir el tiempo de ejecucion de la funcion 'leerArchivos'
 */
export async function leerArchivos() {
	try {
		const [archivo1, archivo2, archivo3] = await Promise.all([
			await fs.promises.readFile('archivo1.txt', 'utf8'),
			await fs.promises.readFile('archivo2.txt', 'utf8'),
			await fs.promises.readFile('archivo3.txt', 'utf8'),
		]);

		return `${archivo1} ${archivo2} ${archivo3}`;
	} catch (error) {
		console.error('Error leyendo archivos:', error.message);
		throw error;
	}
}

// # EJERCICIO 5
export async function delay(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, n);
	});
}
