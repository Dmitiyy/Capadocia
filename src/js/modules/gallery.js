function gellary(){
    const modal = document.querySelector('.modal');
    const images = document.querySelectorAll('.hotel__img__gallery');
    const imgInModal = document.querySelector('.img__modal');

    images.forEach((img, i) => {
        img.addEventListener('click', function(){
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            imgInModal.src = `images/gallery-${i + 1}.jpg`;
        });
    });

    modal.addEventListener('click', function(e){
        if(e.target == this){
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}
export default gellary;