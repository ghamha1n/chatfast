import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  user : DS.belongsTo('user',{ async: true }),
  chat : DS.belongsTo('chat',{ async: true })
});
