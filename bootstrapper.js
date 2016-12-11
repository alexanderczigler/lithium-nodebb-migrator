'use strict'

const logger = require('./lib/services/logger')('bootstrapper')

module.exports = {
  checkConfiguration: function () {
    const self = this

    Object.keys(self.keys).map(key => {
      if (self.keys[key].required && !process.env[key] && !process.env.NOCHECK_VARS) {
        throw new Error(`Environment variable ${key} is required but not set.`)
      }
    })

  },
  keys: {
    API_TOKEN: {},
    API_HOST: {
      required: true
    },
    API_PORT: {
      required: true
    },
    LOG_LEVEL: {},
    MONGODB: {
      required: true
    },
    ORACLE_CLIENT: {
      required: true
    },
    ORACLE_HOST: {},
    ORACLE_DATABASE: {},
    ORACLE_USER: {
      required: true
    },
    ORACLE_PASSWORD: {
      required: true
    },
    REDIS_HOST: {},
    SSO_NAME: {
      required: true
    }
  },
  print: function (data) {}
}
