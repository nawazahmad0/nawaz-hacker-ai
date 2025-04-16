// Dummy context memory manager
const memory = {};
module.exports = {
  save: (user, msg) => { memory[user] = msg; },
  get: (user) => memory[user] || ''
};
