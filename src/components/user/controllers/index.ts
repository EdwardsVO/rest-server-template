import client from "../../../db";

export const getUsers = async (req: any, res: any) => {
  client.query(`SELECT * FROM userperson`, (err, result) => {
    res.send(result.rows);
    client.end;
  });
};
