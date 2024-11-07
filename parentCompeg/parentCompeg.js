import { LightningElement } from 'lwc';

export default class ParentCompeg extends LightningElement {

    colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#268ce6', '#4b0082', '#8b00ff']; // Red, Orange, Yellow, Green, Blue, Indigo, Violet
    sliderValue;   
    child2Flag = 0;

    handleChild2Event(event) {
        this.child2Flag = 1;
        this.sliderValue = event.detail.child2SliderValue;

        const parenInput = this.template.querySelector('.slider');
        parenInput.value = this.sliderValue;
      
        const inputEvent = new Event('input', {
            bubbles: true,
            composed: true,
        });

        parenInput.dispatchEvent(inputEvent);
    }

    handleInput(event) {
        this.sliderValue = event.target.value;
        this.updateSliderBackground(event.target);
        if(this.child2Flag == 0){
            const childComp1 = this.template.querySelector('c-child-compeg1');
            childComp1.child1SliderValue = this.sliderValue;
            childComp1.handleParentSliderChange(this.sliderValue);  
        }   
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
    
    handleMouseover(event) {
        console.log('Mouseover');
        this.child2Flag = 0;
    }

}
