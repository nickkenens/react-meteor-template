FlowRouter.route("/", {
  name: 'Home',
  subscriptions(params) {

  },
  action(params) {
    renderMainLayoutWith(<C.Home />);
  }
});

FlowRouter.route("/login", {
  name: "Login",
  subscriptions(params) {

  },
  action(params) {
    renderMainLayoutWith(<C.UserLogin />);
  }
});

FlowRouter.route('/signup', {
  name: 'Signup',
  subscriptions(params) {

  },
  action(params) {
    renderMainLayoutWith(<C.UserSignup/>);
  }
});

function renderMainLayoutWith(component) {
  ReactLayout.render(C.MainLayout, {
    header: <C.MainHeader />,
  content: component,
  footer: <C.MainFooter />
});
}
