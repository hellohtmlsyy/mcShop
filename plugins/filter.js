import Vue from 'vue'
export function amountCon (val) {
  if(val == '面议') return val
  var str = JSON.stringify(val)
  var arr = str.split('').reverse()
  for(var i=0;i<arr.length;i++){
        if((i+1)%4==0){
            arr.splice(i,0,',');
        }
  }

  var result = arr.reverse().join("")
  return result
}
const filters = {
  amountCon
}
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
