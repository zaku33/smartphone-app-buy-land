const moment = require('moment');

function converTimeShort(time) {
  return moment(time).fromNow();
}
export { converTimeShort };
