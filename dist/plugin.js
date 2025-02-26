exports.version = 2.11
exports.apiRequired = 8.65
exports.repo = "W-i-n-7/hfs-askhttps"
exports.description = "Kindly prompts the user to switch to HTTPS when they are using HTTP"
exports.frontend_js = 'https.js'
exports.config = {
    moreInfo: {
        type: 'boolean',
        label: 'More info',
        helperText: 'Tell the user to continue anyway with an invalid certificate error.',
        defaultValue: false,
        frontend: true
    }
}
