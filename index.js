const { IncomingWebhook } = require('@slack/webhook');
// const HttpsProxyAgent = require('https-proxy-agent');
const url = "https://hooks.slack.com/services/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";

// One of the ways you can configure HttpsProxyAgent is using a simple string.
// See: https://github.com/TooTallNate/node-https-proxy-agent for more options
// const proxy = new HttpsProxyAgent(process.env.http_proxy || 'http://168.63.76.32:3128');

// Initialize with the proxy agent option
const webhook = new IncomingWebhook(token);

// Sending this webhook will now go through the proxy
(async () => {
    await webhook.send({
        text: 'I\'ve got news for you...',
    });
})();