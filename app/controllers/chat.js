import Ember from 'ember';

export default Ember.Controller.extend({
  userLoggedin: localStorage.getItem('user'),
  actions: {
    create:function(){
      var self = this,
          model = this.get('model'),
          message = this.get('message');
      if(!message) return false;

      var conversation =this.store.createRecord('conversation',{ message: message, chat: model });
      model.get('conversations').addObject(conversation);
      conversation.save().then(function(){
        model.save();
        self.set('message',null);
      });
    }
  }
});
