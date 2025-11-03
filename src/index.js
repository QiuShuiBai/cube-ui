import {
  /* eslint-disable no-unused-vars */
  Style,
  // locale
  Locale,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList,
  // module
  BetterScroll,
  createAPI
} from './module'
import { processComponentName } from './common/helpers/util'

const components = [
  // locale
  Locale,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList
]

/**
 * Registers library components on a Vue constructor and prevents repeated installation.
 *
 * Calls each component's `install` method with the provided `Vue` constructor, skipping the `Radio` component,
 * and sets `install.installed` to `true` to guard against re-entrancy.
 * @param {Object} Vue - The Vue constructor to install components into.
 */
function install(Vue) {
  console.log(Vue)
  console.log(bb)
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    // ignore radio
    if (Component === Radio) {
      return
    }
    Component.install(Vue)
  })
}

const Cube = {
  /* eslint-disable no-undef */
  version: __VERSION__,
  install,
  BScroll: BetterScroll,
  createAPI
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Cube[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export * from './module'

export default Cube