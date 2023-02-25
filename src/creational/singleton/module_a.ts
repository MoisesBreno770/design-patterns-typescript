import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Moises', age: 21 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Jusé', age: 25 });

export { myDatabaseClassic };