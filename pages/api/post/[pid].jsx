const handler = (req, res) => {
    const { pid } = req.query
    res.end(`post: ${pid}`)
}

export default handler;