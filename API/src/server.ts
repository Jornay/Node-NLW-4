<<<<<<< HEAD
import { app } from "./app";

=======
import 'reflect-metadata';
import express from 'express';
import "./database";
import { router } from './routers';

const app = express();

app.use(express.json());
app.use(router);
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3

app.listen(3333, () => console.log("Server is running!"));