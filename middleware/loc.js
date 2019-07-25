export default function ({ store, route, redirect }) {
  if(!process.server){
    store.commit('locM', localStorage)
  }
}
