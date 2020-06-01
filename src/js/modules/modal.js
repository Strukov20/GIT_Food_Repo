function modal () {

    const btnMore = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';

            clearInterval(modalTimerId); // Якщо користувач уже выдкрив модальне вікно то не відкривати його знову.
        }

        btnMore.forEach(btn => {
            btn.addEventListener('click', openModal);
        });


        function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
       } 

        modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal){
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === "Escape" && modal.classList.contains('show')) {
                closeModal();
            }
        });

        const modalTimerId = setTimeout(openModal, 15000);

        function showModalByScroll() {
                if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
        window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;