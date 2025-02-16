if (window.location.protocol === 'http:') {
    const { t } = HFS
    if (confirm(t('switchtohttps', 'This page is currently loaded over HTTP. Do you want to switch to HTTPS?'))) {
        window.location.href = window.location.href.replace('http:', 'https:');
    }
}