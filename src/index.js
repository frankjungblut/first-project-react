import express from 'express';
import { v4 } from 'uuid';

const port = 3001;
const app = express();
app.use(express.json());

const user = [];

const checkUserId = (request, response, next) => {
  const {id} = request.params;
}