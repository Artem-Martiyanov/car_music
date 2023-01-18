
function Slider(sliderId) {
        this.slider = document.getElementById(sliderId);
        this.arrowLeft = this.slider.querySelector('.slider__arrow--left');
        this.arrowRight = this.slider.querySelector('.slider__arrow--right');
        this.field = this.slider.querySelector('.slider__inner');
        this.currentPosition = 0;
        this.currentOffset = () => this.currentPosition * this.itemWidth();
        this.border = {
            left: 0,
            right: -(this.slider.querySelectorAll('.slider__item').length - 3),
        };
        this.move = function () {
            this.field.style.cssText = `transform: translateX(${this.currentOffset()}px)`;
            this.field.style.transition = 'transform 0.8s ease';
        };

        this.check = function () {
                if (this.currentPosition >= this.border.left) {
                    this.arrowLeft.classList.add('disable');
                } else this.arrowLeft.classList.remove('disable');

                if (this.currentPosition <= this.border.right) {
                    this.arrowRight.classList.add('disable');
                } else this.arrowRight.classList.remove('disable');
        };
        this.itemWidth = () => this.slider.querySelector('.slider__item').offsetWidth;


        this.arrowLeft.addEventListener('click', () => {            // Клик на левую стреклу
            if (!this.arrowLeft.classList.contains('disable')) {
                this.currentPosition++;
                this.move();
            }
            this.check();
        });

        this.arrowRight.addEventListener('click', () => {           // Клик на правую стреклу
            if (!this.arrowRight.classList.contains('disable')) {
                this.currentPosition--;
                this.move();
            }
            this.check();
        });
        window.addEventListener('resize', () => this.move());
        this.check();

    }


const slider1 = new Slider('slider1');
const slider2 = new Slider('slider2');
const slider3 = new Slider('slider3');

