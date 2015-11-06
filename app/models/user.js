import Ember from 'ember';

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  conversations : DS.hasMany('conversation',{ async: true }),
  chats : DS.hasMany('chat',{ async: true })
});
