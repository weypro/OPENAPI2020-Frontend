import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Button, Input, message, notification, Form } from "ant-design-vue";
import { Row, Col } from "ant-design-vue";

import "./assets/css/global.css";

Vue.use(Button);
Vue.use(Input);
//Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$form = Form;
/*
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
*/

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
