// ---------Shape Classes-----//

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        x = Math.floor((Math.random() * 550));
        y = Math.floor((Math.random() * 550));
        this.div.style.top = `${x}px`;
        this.div.style.left = `${y}px`;
        $('.fixedCanvas').append(this.div)
    }
}

class Square extends Shape {
    constructor(height, width, x, y) {
        super(x, y);
        height = $("#squareInput").val();
        width = $("#squareInput").val();
        this.div.classList.add('square');
        this.div.style.height = `${height}px`
        this.div.style.width = `${width}px`
        

    }
}


class Rectangle extends Shape {
    constructor(rheight, rwidth, x, y) {
        super(x, y);
        rheight = $("#recHeightInput").val();
        rwidth = $("#recWidthInput").val();
        this.div.classList.add('rectangle');
        this.div.style.height = `${rheight}px`
        this.div.style.width = `${rwidth}px`
        
    }
}

class Circle extends Shape {
    constructor (x,y, radius){
        super (x,y);
        radius = (($("#circInput").val()) * 2);
        this.div.classList.add('circle');
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        

    }
}

class Triangle extends Shape {
    constructor (x,y, sideLength){
        super (x,y);
        this.div.classList.add('triangle')
        sideLength = $("#triInput").val()
        this.div.style.borderBottom = `${sideLength}px solid rgba(255, 217, 0, 0.877)`;
        this.div.style.borderRight = `${sideLength}px solid transparent`;
        
    }
}

//    #triangle-bottomleft {
//     width: 0;
//     height: 0;
//     border-bottom: 100px solid red;
//     border-right: 100px solid transparent;
//   }

$("#sqrBut").click(() => new Square);
$("#recBut").click(() => new Rectangle);
$("#cirBut").click(() => new Circle);
$("#triBut").click(() => new Triangle)

