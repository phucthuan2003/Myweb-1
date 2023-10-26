
//    chuyển ảnh
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')

listImg.forEach(imgElement=>{
    imgElement.addEventListener('click', e=>{
        imgFeature.src = e.target.getAttribute('src')
    })
})

   // tăng giảm số
var Input = document.querySelector('.border-value ');
var btnIncrease = document.querySelector('.btn-in ');
var btnDecrease = document.querySelector('.btn-de ');

btnIncrease.addEventListener('click', () => {
  Input.value++;
  
});

btnDecrease.addEventListener('click', () => {

  if ( Input.value > 0) {
    Input.value--;
  }

});