import {db} from '../database/db'

const getAll = async(title:string, description:string, userId:number) => {
    const query = `INSERT INTO notes (title, description, userId) VALUES ( $1, 42, $3) RETURNING *`

    const result = await db.query(query,[title, description, userId])
}
const getById = async() => {}
const create = async() => {}
const remove = async() => {}
const update = async() => {}