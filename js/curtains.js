
var mousePosition = {
    x: 0,
    y: 0,
};


var webGLCurtain = new Curtains({
    container: "canvas"
});


var planeElement = document.getElementsByClassName("plane")[0];


var params = {
    vertexShaderID: "plane-vs",
    fragmentShaderID: "plane-fs",
    widthSegments: 20,
    heightSegments: 20,
    uniforms: {
        time: {
            name: "uTime",
            type: "1f",
            value: 0,
        },
        mousePosition: {
            name: "uMousePosition",
            type: "2f",
            value: [mousePosition.x, mousePosition.y],
        },
        mouseStrength: {
            name: "uMouseStrength",
            type: "1f",
            value: 0,
        },
    }
}

var plane = webGLCurtain.addPlane(planeElement, params);


plane && plane.onReady(function () {

    plane.setPerspective(35);


    document.body.addEventListener("mousemove", function (e) {
        handleMovement(e, plane);
    });

    document.body.addEventListener("touchmove", function (e) {
        handleMovement(e, plane);
    });

}).onRender(function () {

    plane.uniforms.time.value++;


    plane.uniforms.mouseStrength.value = Math.max(0, plane.uniforms.mouseStrength.value - 0.0075);
});



function handleMovement(e, plane) {


    if (e.targetTouches) {
        mousePosition.x = e.targetTouches[0].clientX;
        mousePosition.y = e.targetTouches[0].clientY;
    }

    else {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    }


    var mouseCoords = plane.mouseToPlaneCoords(mousePosition.x, mousePosition.y);

    plane.uniforms.mousePosition.value = [mouseCoords.x, mouseCoords.y];


    plane.uniforms.mouseStrength.value = 1;
}



