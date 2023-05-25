const allResourceTypes = Object.values(chrome.declarativeNetRequest.ResourceType);

const rules: chrome.declarativeNetRequest.Rule[] = [
  {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      responseHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
    condition: {
      urlFilter: 'https://qaets-merchant-api.fayone.tech/v3/api-docs',
      resourceTypes: allResourceTypes,
    },
  },
  {
    id: 2,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      requestHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/604.1 Edg/113.0.100.0',
        },
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'sec-ch-ua',
          value: '"Chromium";v="94", "Microsoft Edge";v="94", ";Not A Brand";v="99"',
        },
      ],
    },
    condition: {
      urlFilter: '*bing.com*',
      resourceTypes: allResourceTypes,
    },
  },
];

export default rules;
