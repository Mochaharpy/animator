let scene, camera, renderer;

function init() {
    // Set up scene
    scene = new THREE.Scene();
    
    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // White point light
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Add a light helper (optional, for debugging)
    const lightHelper = new THREE.PointLightHelper(pointLight, 0.5);
    scene.add(lightHelper);

    // Render loop
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.getElementById('addCube').addEventListener('click', function() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Change to MeshStandardMaterial for lighting
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
});

init();
