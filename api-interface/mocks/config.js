/**
 * 系統資訊
 *
 * @url config
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      clientName: 'OG東方',
      clientCode: 'ogEast'
    }
  }
}
