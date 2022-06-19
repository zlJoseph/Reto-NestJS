# Reto-NestJS

Reto con NestJS

## Instalación

Requerimientos

 - npm
 - node 
 - xampp

1) Clonar e instalar las dependencias del proyecto
```bash
git clone https://github.com/zlJoseph/Reto-NestJS.git
cd Reto-NestJS
npm install
```
2) Necesario ejecutar mysql en xampp y crear la base de datos **prueba2**.

3) Ejecutar
```bash
npm run start
```

4) El servidor escucha el puerto 3000: [http://localhost:3000/](http://localhost:3000/)

## Api response
1. Para obtener la lista enlazada intercambiado en cada dos nodos adyacentes: [http://localhost:3000/operaciones/listaEnlazada/[4,3,5,7,8,3]](http://localhost:3000/operaciones/listaEnlazada/[4,3,5,7,8,3])
```json
3->4->7->5->3->8
```

2. Para ordenar de forma ascendente una matriz de k listas vinculadas: [http://localhost:3000/operaciones/listaVinculada/[[1,4,5],[1,3,4],[2,6]]](http://localhost:3000/operaciones/listaVinculada/[[1,4,5],[1,3,4],[2,6]])
```json
[1,1,2,3,4,4,5,6]
```
Nota: Valido solo para número enteros positivos

3. Para obtener el historial de operaciones: [http://localhost:3000/history](http://localhost:3000/history)
