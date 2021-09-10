/**
 * 相当于 /api/hello
 * @param {*} req 
 * @param {*} res 
 */
export default function handle(req, res) {
  res.status(200).json({ text: 'Hello World!' })
}