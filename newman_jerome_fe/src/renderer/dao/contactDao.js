export default class ContactRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT,
            lastName TEXT,
            email TEXT,
            phone TEXT
            )`
        return this.dao.run(sql);
    }

    create(firstName, lastName, email, phone) {
        return this.dao.run(
            `INSERT INTO tasks (firstName, lastName, email, phone)
             VALUES (?, ?, ? ?)`,
            [firstName, lastName, email, phone]
        );
    }

    update(id, firstName, lastName, email, phone) {
        return this.dao.run(`
            UPDATE contacts
            SET firstName = ?, 
                lastName = ?, 
                email = ?, 
                phone = ?
            WHERE id = ?
            `,
            [firstName, lastName, email, phone]
        );
    }

    delete(id) {
        return this.dao.run(
            `DELETE FROM contacts WHERE id = ?`,
            [id]
        );
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM contacts WHERE id = ?`,
            [id]);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM contacts`);
    }

    getAllLikeFirstName() {
        return this.dao.all(
            `SELECT * FROM contacts WHERE firstName LIKE ? `,
            [firstName]
        );
    }
}