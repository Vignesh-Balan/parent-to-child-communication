import { LightningElement,api } from 'lwc';

export default class ChildCompeg1 extends LightningElement {

    colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#268ce6', '#4b0082', '#8b00ff']; // Red, Orange, Yellow, Green, Blue, Indigo, Violet]
    @api child1SliderValue;

    @api handleParentSliderChange(parentSliderValue) {
        this.child1SliderValue = parentSliderValue;
        const childInput = this.template.querySelector('.slider');
        childInput.value = this.child1SliderValue;

        const inputEvent = new Event('input', {
            bubbles: true,
            composed: true
        });
        childInput.dispatchEvent(inputEvent);
    }



    handleInput(event) {
        this.child1SliderValue = event.target.value;
        this.updateSliderBackground(event.target);
    }
    
    updateSliderBackground(slider) {
        const value = slider.value;
        //console.log("here is value" + value);
        //const colorIndex = Math.floor(value / (100 / this.colors.length)); // Determine which color to use
        const color = this.colors[4];
        slider.style.background = `linear-gradient(90deg, ${color} ${value}%, #ddd ${value}%)`;
    }

    renderedCallback() {
        const slider = this.template.querySelector('.slider');
        this.updateSliderBackground(slider);
    }
}