
const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {

  async createOng (req, res) {
    const { name, email, whatsapp, city, uf } = req.body
    const id = generateUniqueId()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
        
    res.json({ id })
  },

  async listOngs (req, res) {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
  },

  async showOng (req, res) {
    const { id } = req.params
    const ong = await connection('ongs').select('*').where('id', '=', id)
    if (!ong) {
      return res.json({ message: 'Ong não encontrada!' })
    }

    return res.json(ong)
  }
}
