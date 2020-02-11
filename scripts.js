// ---------Shape Classes-----//

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        x = Math.floor((Math.random() * 550));
        y = Math.floor((Math.random() * 550));
        this.div.style.top = `${x}px`;
        this.div.style.left = `${y}px`;
        $('.fixedCanvas').append(this.div);
        $(this.div).dblclick(() => {
            this.div.remove();
            $(".values").val('px')
        })
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
        $(this.div).click(()=> this.shapeInfo(height, width))

    }
    shapeInfo(a,b){
        let area = (a * b)
        let perimeter = ((a*2) * 2)
        $("#shapeType").val('Square');
        $("#widthValue").val(`${b}px`)
        $("#heightValue").val(`${a}px`);
        $('#radiusValue').val('n/a')
        $("#areaValue").val(`${area}px`);
        $("#perimeterValue").val(`${perimeter} px`);
    }
}


class Rectangle extends Shape {
    constructor(rheight, rwidth, x, y) {
        super(x, y);
        rheight = $("#recHeightInput").val();
        rwidth = $("#recWidthInput").val();
        this.div.classList.add('rectangle');
        this.div.style.height = `${rheight}px`;
        this.div.style.width = `${rwidth}px`;
        $(this.div).click(()=> this.shapeInfo(rheight, rwidth));
        
    }
    shapeInfo(a,b){
        let area = (a * b)
        let perimeter = ((a*2) + (b*2))
        $("#shapeType").val('Rectangle');
        $("#widthValue").val(`${b}px`)
        $("#heightValue").val(`${a}px`);
        $('#radiusValue').val('n/a')
        $("#areaValue").val(`${area}px`);
        $("#perimeterValue").val(`${perimeter} px`);
    }
}

class Circle extends Shape {
    constructor (x,y, radius){
        super (x,y);
        radius = (($("#circInput").val()) * 2);
        this.div.classList.add('circle');
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        $(this.div).click(()=> this.shapeInfo(radius));
    }

    shapeInfo(a){
        let a2 = (a*a)
        let area = Math.floor(Math.PI * a2)
        $("#shapeType").val('Circle');
        $("#widthValue").val('n/a')
        $("#heightValue").val('n/a');
        $('#radiusValue').val(`${a}px`)
        $("#areaValue").val(`~${area}px`);
        $("#perimeterValue").val('n/a');
    }
}

class Triangle extends Shape {
    constructor (x,y, sideLength){
        super (x,y);
        this.div.classList.add('triangle')
        sideLength = $("#triInput").val()
        this.div.style.borderBottom = `${sideLength}px solid rgba(255, 217, 0, 0.877)`;
        this.div.style.borderRight = `${sideLength}px solid transparent`;
        $(this.div).click(()=> this.shapeInfo(sideLength));
    }

    shapeInfo(a){
        let a2 = (a*a)
        let area = (0.5 * a2)
        let perimeter = Math.floor(2 * (a + (Math.sqrt(2))) + a)
        $("#shapeType").val('Triangle');
        $("#widthValue").val(`${a}px`)
        $("#heightValue").val(`${a}px`);
        $('#radiusValue').val('n/a')
        $("#areaValue").val(`${area}px`);
        $("#perimeterValue").val(`${perimeter}px`);
    }
}



$("#sqrBut").click(() => {
    new Square;
    $(".form-control").val('')
});

$("#recBut").click(() => {
    new Rectangle;
    $(".form-control").val('');
});

$("#cirBut").click(() => {
    new Circle;
    $(".form-control").val('')
});


$("#triBut").click(() => {
    new Triangle;
    $(".form-control").val('')
})

