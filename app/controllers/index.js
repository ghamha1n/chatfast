import Ember from 'ember';

export default Ember.Controller.extend({
  editNameValue:false,
  actions: {
    newChat:function(){
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 12;
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
      }

      var self = this;
      var user = this.get('model');
      var chat = this.store.createRecord('chat',{name:randomstring});

      user.get('chats').addObject(chat);
      chat.get('users').pushObject(user);

      chat.save().then(function(chat){
        user.save().then(function(){
        });
      });
    },
    delete:function(model){
      var conversations = model.get("conversations");
      var users = model.get("users");

        conversations.toArray().forEach(function(conv){
          conv.destroyRecord();
        });

        users.toArray().forEach(function(user){
          user.get('chats').popObject(model);
          user.save();
        });
        model.destroyRecord();
    },
    editName:function(){
      this.set('editNameValue',true);
    },
    saveName:function(){
      this.get('model').save();
      this.set('editNameValue',false);
    }
  }
});
