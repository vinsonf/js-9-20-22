export class Player {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.element = document.createElement('div');
        this.element.style.displayer = 'inline-block';
        this.element.style.width = '100px';
        this.element.style.height = '100px';
        this.element.style.backgroundColor = this.color;
        this.element.innerHTML = this.name;
        this.element.style.color = 'white';
        this.element.style.textAlign = 'center';
        document.body.append(this.element);
        this.element.addEventListener('click', () => {
            this.move();
        })
    }
    move() {
        this.element.style.marginLeft = Math.random() * 400 + 'px';
    }

}


export class Enemy extends Player {
    constructor(name, color) {
        super(name, color);
    }
    move() {
        this.element.remove();
    }
}
