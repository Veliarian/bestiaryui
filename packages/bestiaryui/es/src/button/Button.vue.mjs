import { defineComponent as e, computed as s, createElementBlock as u, openBlock as l, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const c = e({
  name: "b-button"
}), d = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = s(() => ({ [`b-button--${t.type}`]: t.type }));
    return (r, b) => (l(), u("button", {
      class: p(["b-button", n.value])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
