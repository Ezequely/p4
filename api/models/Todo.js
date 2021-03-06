/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
            text:{
                  type: 'string',
                  required: true
            },
            date:{
                  type: 'date',
            },
            done:{
                  type: 'string',
                  defaultsTo: 'false'
            },
            prioridade:{
                  type: 'integer',
            }

  }

};
