import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
import Home from '../views/Home.vue'
// import Activity from '../components/Activity.vue'

Vue.use(VueRouter)

function createRouter (state) {
  /* async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('http://localhost:3000/api/v1/me')
      state.user = user
      next()
    } catch (error) {
      console.log('err', error)
      next('/login') // redirect to login if user is not authenticated
    }
  }  */

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]

  return new VueRouter([
    routes
  ])
}

export default createRouter
