const path = require('path')
const express = reuqire('express')

const dist = path.resolve(__dirname, 'dist')

const app = express()

app.use(express.static(dist))

app.listen(3000, () => {

})
