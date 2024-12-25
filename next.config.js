const nextConfig = {
  async headers() {
    return [
      {
        source: '/Vitaly Gorelik - CV.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Vitaly Gorelik - CV.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

