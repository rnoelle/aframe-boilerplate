// var boxEl = document.querySelector('a-box');
//   boxEl.addEventListener('mouseenter', function () {
//     console.log('entered');
//     boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
//   });
//   AFRAME.registerComponent('scale-on-mouseenter', {
//   schema: {
//     to: {default: '2.5 2.5 2.5'}
//   },
//   init: function () {
//     var data = this.data;
//     this.el.addEventListener('click', function () {
//       this.setAttribute('scale', data.to);
//     });
//   }
// });
var camera = document.querySelector('a-camera')
document.addEventListener('keydown', function (event) {
  if (event.key == la) {
    position.x += -100;

  }
  var position = camera.getAttribute('position');
  position.y += 100;
  position.z += 100;
  console.log(position);
  camera.setAttrubute('position', position)

})
