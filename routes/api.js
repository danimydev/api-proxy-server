const express = require('express')
const router = express.Router()
const needle = require('needle')
const url = require('url')
const apiCache = require('apicache')
const config = require('../config').getConfig()

let cache = apiCache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {
    try {
        const params = new URLSearchParams({
            'APPID': config.api.key,
            ...url.parse(req.url, true).query
        })
        const apiRes = await needle(
            'get',
            `${config.api.url}?${params}`
        )
        const data = apiRes.body
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/help', (req, res) => {
    res.status(200).json({
        msg: 'OK',
        hint: 'Trying adding query params! this implements open weather api',
        example: '?q=Boston'
    })
})

module.exports = router