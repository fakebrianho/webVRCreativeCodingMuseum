AFRAME.registerComponent("marbleroom", {
  schema: {
    // material: {}
    event: { type: `string`, default: "" },
    message: { type: "string", default: "Hello, World!" },
  },

  init: function () {
    var self = this;
    this.eventHandlerFn = function () {
      console.log(self.data.message);
    };
  },

  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    if (oldData.event && data.event !== oldData.event) {
      el.removeEventListener(oldData.event, this.eventHandlerFn);
    }

    if (data.event) {
      el.addEventListener(data.event, this.eventHandlerFn);
    } else {
      console.log(data.message);
    }
  },

  /**
   * Handle component removal.
   */
  remove: function () {
    var data = this.data;
    var el = this.el;

    // Remove event listener.
    if (data.event) {
      el.removeEventListener(data.event, this.eventHandlerFn);
    }
  },
});
