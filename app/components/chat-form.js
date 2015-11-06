import Ember from 'ember';

export default Ember.Component.extend({
  busy:false,
  session: Ember.inject.service(),
  
  actions: {
    create:function(){
      var self = this,
          model = this.get('model'),
          message = this.get('message'),
          session  = this.get('session.user');
      if(!message) return false;
      self.set('busy',true);
      session.then(function(user){
        var conversation = self.store.createRecord('conversation',{ message: message, chat: model, user: user});
        user.get('conversations').pushObject(conversation);
        model.get('conversations').addObject(conversation);

        conversation.save().then(function(){
          user.save();
          model.save();
          self.set('message',null);
          self.set('busy',false);
        });
      });
    }
  }
});
