export function initialize(container, app) {
        app.inject('route', 'session', 'service:session');
}

export default {
  name: 'init',
  initialize: initialize
};
