import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import { saveScroll, setScroll } from './components/scroller/save'
import './components'
import './docs/docs.scss'
import VueElement from './components/util/element'

Vue.use(VueRouter)
Vue.use(VueElement)

const router = new VueRouter()

router.map({
  '/': {
    scroll: true,
    component: resolve => {
      require(['./docs/home'], resolve)
    }
  },
  '/bases/colors': {
    component: resolve => {
      require(['./docs/bases/colors'], resolve)
    }
  },
  '/bases/typography': {
    component: resolve => {
      require(['./docs/bases/typography'], resolve)
    }
  },
  '/grids/flex': {
    component: resolve => {
      require(['./docs/grids/flex'], resolve)
    }
  },
  '/components/button': {
    component: resolve => {
      require(['./docs/components/button'], resolve)
    }
  },
  '/components/card': {
    component: resolve => {
      require(['./docs/components/card'], resolve)
    }
  },
  '/components/form': {
    component: resolve => {
      require(['./docs/components/form'], resolve)
    }
  },
  '/components/popup': {
    component: resolve => {
      require(['./docs/components/popup'], resolve)
    }
  }
})

router.beforeEach((transition) => {
  saveScroll(transition.from)
  transition.next()
})

router.afterEach((transition) => {
  setScroll(transition.to)
})

router.start(App, 'app')
