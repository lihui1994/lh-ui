
export function getStyle() {

}

export function addClass(el, cls) {
  if(!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for(var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if(!clsName) continue;

    if(el.classList) {
      el.classList.add(clsName); 
    } else if(!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }

  if(!el.classList) {
    el.className = curClass;
  }
}

export function removeClass() {

}

export function hasClass() {

}