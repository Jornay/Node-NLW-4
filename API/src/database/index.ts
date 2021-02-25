<<<<<<< HEAD
import {Connection, createConnection, getConnectionOptions} from 'typeorm';

export default async (): Promise<Connection> => {

    const defaultOptions = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' 
            ? "./src/database/database.test.sqlite" 
            : defaultOptions.database
        })
    )
}
=======
import {createConnection} from 'typeorm';

createConnection();
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3
