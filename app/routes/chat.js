import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model:function(params){
    var self = this;
    var session = this.get('session.user');
    return this.store.query('chat',{ equalTo:params.chat_id}).then(function(chat){
      if( !chat.get('firstObject') ) self.transitionTo('index');

      return session.then(function(user){

        return chat.get('firstObject.users').pushObject(user).save().then(function(){
          return user.get('chats').pushObject(chat.get('firstObject')).save().then(function(){
            return chat.get('firstObject');
            
          });
        });

      });

    });
  }
});
