if (window.location.protocol === 'http:') {
    const { t } = HFS
    const conf = HFS.getPluginConfig()
    let redirect
    if (conf['moreInfo'])
    {
        redirect = confirm(t('switchtohttps', 'This page is currently loaded over HTTP. Do you want to switch to HTTPS?') + '\n' + t('continueanyway', 'You may need to click "More info" and a small link "Continue anyway"'))
    }
    else
    {
        redirect = confirm(t('switchtohttps', 'This page is currently loaded over HTTP. Do you want to switch to HTTPS?'))
    }
    if (redirect) {
        window.location.href = window.location.href.replace('http:', 'https:');
    }
}
