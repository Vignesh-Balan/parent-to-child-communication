import { LightningElement } from 'lwc';

export default class ChildCompeg2 extends LightningElement {

    child2SliderValue;
    colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#268ce6', '#4b0082', '#8b00ff']; // Red, Orange, Yellow, Green, Blue, Indigo, Violet

    handleInput(event) {
        this.child2SliderValue = event.target.value;
        this.updateSliderBackground(event.target);

        const customEvent = new CustomEvent('child2sliderchange', {
            detail: {child2SliderValue:this.child2SliderValue}
        });
        this.dispatchEvent(customEvent);
    }

    updateSliderBackground(slider) {
        const value = slider.value;
        //const colorIndex = Math.floor(value / (100 / this.colors.length)); // Determine which color to use
        const color = this.colors[4];
        slider.style.background = `linear-gradient(90deg, ${color} ${value}%, #ddd ${value}%)`;
    }

    renderedCallback() {
        const slider = this.template.querySelector('.slider');
        this.updateSliderBackground(slider);
    }
}