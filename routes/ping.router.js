'use strict';

const pingRouter = {
  ping: (req, res) => {
    return res.json ({ping: 'pong'});
  },
};

module.exports = pingRouter;
