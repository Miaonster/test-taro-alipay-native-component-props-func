Component({
  mixins: [],
  data: {},
  props: {
    onIncrease: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap(event) {
      this.props.onIncrease()
    }
  },
});
