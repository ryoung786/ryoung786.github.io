require(['jquery', 'lib/three.min'], function($, _threejs_is_not_yet_amd_) {
    var scene, camera, renderer;

    function init() {
        scene = new THREE.Scene();
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;

        // Create a renderer and add it to the DOM.
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);

        // Create a camera, zoom it out from the model a bit, and add it to the scene.
        camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
        camera.position.set(0,6,0);
        scene.add(camera);

        // Set the background color of the scene.
        renderer.setClearColorHex(0x333F47, 1);
        
        // Create a light, set its position, and add it to the scene.
        var light = new THREE.PointLight(0xffffff);
        light.position.set(-100,200,100);
        scene.add(light);
    }

    function bindResizeHandler() {
        window.addEventListener('resize', function() {
            var WIDTH = window.innerWidth;
            var HEIGHT = window.innerHeight;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();
        });
    }
    
    // Renders the scene and updates the render as needed.
    function animate() {
        requestAnimationFrame(animate);
        
        // Render the scene.
        renderer.render(scene, camera);
    }

    init();
    bindResizeHandler();
    animate();
});
