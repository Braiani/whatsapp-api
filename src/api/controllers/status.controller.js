const config = require('../../config/config')


exports.init = async (req, res) => {
    return res.json('OK')
}


exports.webhook = async (req, res) => {
    return res.json({
        error: false,
        message: 'Webhook configured successfully',
        webhook_data: {
            url: config.webhookUrl
        },
    })
}