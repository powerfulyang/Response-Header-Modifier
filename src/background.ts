import rules from '@/utils/rules';

chrome.declarativeNetRequest
  .updateDynamicRules({
    removeRuleIds: rules.map((rule) => rule.id), // remove existing rules
    addRules: rules,
  })
  .then(() => {
    console.log('Rules updated');
  })
  .catch((err) => {
    console.error(err);
  });
