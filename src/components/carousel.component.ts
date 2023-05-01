import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";

type TemplateInputs = {
    orientation: 'horizontal' | 'vertical',
    slides: Array<{
        image: string;
        title: string;
        description: string;
    }>
}

const defaultInputs = (): TemplateInputs => {
    return {
        orientation: 'horizontal',
        slides: []
    }
}

const template = (inputs: TemplateInputs = defaultInputs()) => {
    const slides = inputs.slides.map((slide) => `
        <div class="carousel-slide" style="background-image: url(${slide.image})">
            <div class="carousel-slide-info">
                <h1>${slide.title}</h1>        
                <p>${slide.description}</p>
            </div>
        </div>
    `).join('');

    const indicators = inputs.slides.map((_, index) => `
        <button class="carousel-indicator">${index + 1}</button>
    `).join('')

    return html(`
        <div class="carousel">
            <div class="carousel-slides" data-orientation="${inputs.orientation}">         
                ${slides}
            </div>      

            <div class="carousel-indicators" data-orientation="${inputs.orientation}">
                ${indicators}
            </div>

            <div class="carousel-controls" data-orientation="${inputs.orientation}">
                <button class="carousel-control"> 
                    ${inputs.orientation === 'horizontal' ? 'Atrás' : 'Arriba'}
                </button>
                <button class="carousel-control"> 
                    ${inputs.orientation === 'horizontal' ? 'Siguiente' : 'Abajo'}
                </button>
            </div>
        </div>
    `);
}

export const carouselComponent: Component = {
    template: template({
        orientation: 'horizontal',
        slides: [
            {
                title: 'Lorem 1',
                description: 'Ipsum 1',
                image: 'https://pixabay.com/get/gbc8f90c4da0fc68596cb860a436f66878844b15b10c2d73f7c362ade26916fb55a5bfe2b8c3e673adc7153dd2e1dc294_1920.jpg'
            },
            {
                title: 'Lorem 2',
                description: 'Ipsum 2',
                image: 'https://pixabay.com/get/g2d37b0f9ac173273cfe61799c2778843df3639e770445178ed295f3609166160e575626162cf60a530c39d70b8f9542b0d0ec7974b63dbab6c6d036387b45e29_1280.jpg'
            },
            {
                title: 'Lorem 3',
                description: 'Ipsum 3',
                image: 'https://pixabay.com/get/gc479898d72b739216505fd82e4373f264de0d000112d33cea174d4cf2f8bd4ee0765c4fbb4d26ad548dc6b84b74bd6d550c526e19116c109f60a181a3687b983_1920.jpg'
            },
            {
                title: 'Lorem 4',
                description: 'Ipsum 4',
                image: 'https://pixabay.com/get/gd64b6d9f7fb3b6eaa17ea077d7130ff4bdfaaf248e50cc974caa9cc9b41f635c5d2dce82464e4bddaad641f4728b58af095c5e2647b48490f2895b1d3af9f5ca_1920.jpg'
            },
            {
                title: 'Lorem 5',
                description: 'Ipsum 5',
                image: 'https://pixabay.com/get/g828f0b672ba1aaf2aa16143c2606b16c5c3c1e1c0baeaf137ac41c2efc2472b7731027513152a29265eefd47b05e7733c9b535f1badfac07c22ce26b3c72b102_1920.jpg'
            },
            {
                title: 'Lorem 6',
                description: 'Ipsum 6',
                image: 'https://pixabay.com/get/g763f7ff76435ea965f77ad82872015acdc0cd2217ad2a9cb5a3e3b63db64c6d8d50fc2212f55ff0a8e857c8f05455098609dca242c62ba6ab0632769a66524f6_1920.jpg'
            },
        ]
    }),
    afterViewInit() {
        const slides = this.template.querySelectorAll<HTMLDivElement>('.carousel-slide');
        const [prev, next] = this.template.querySelectorAll<HTMLButtonElement>('.carousel-control');
        const indicators = this.template.querySelectorAll<HTMLButtonElement>('.carousel-indicator')

        let currentIndex = 0;

        slides[currentIndex].classList.add('active');

        const scrollToSlide = (index: number) => {
            slides[currentIndex].classList.remove('active');

            currentIndex = index;

            if (currentIndex === slides.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }

            const activeSlide = slides[currentIndex];
            activeSlide.classList.add('active');
            activeSlide.scrollIntoView({ behavior: 'smooth' });
        }

        let interval: number = 0;

        const autoplay = () => {
            interval = setInterval(() => scrollToSlide(currentIndex + 1), 6000)
        }

        autoplay();

        prev.onclick = () => {
            clearInterval(interval);
            scrollToSlide(currentIndex - 1)
            autoplay();
        }

        next.onclick = () => {
            clearInterval(interval);
            scrollToSlide(currentIndex + 1)
            autoplay();
        }

        indicators.forEach((indicator, position) => {
            indicator.onclick = () => {
                scrollToSlide(position)
            }
        });
    },
}