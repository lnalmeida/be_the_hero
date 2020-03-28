const connection = require('../database/connection')

module.exports = {
  async createSession (req, res) {
    const { id } = req.body
    const session = await connection('ongs').where('id', id).select('name').first()

    if (!session) {
      return res.status(400).send('Nenhuma ONG encontrada com este ID!')
    }

    return res.status(200).json(session)
  }
}
