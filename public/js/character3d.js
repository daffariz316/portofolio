// File: public/scripts/character3d.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the container
    const container = document.getElementById('character-container');
    if (!container) return; // Safety check
    
    // Set up scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
  
    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  
    // Create a simple 3D character (a humanoid figure)
    function createCharacter() {
      const group = new THREE.Group();
      
      // Materials
      const skinMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf5d0a9,
        specular: 0x555555,
        shininess: 30
      });
      
      const clothesMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x6f42c1, // Purple to match your gradient
        specular: 0x222222,
        shininess: 10
      });
  
      // Head
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        skinMaterial
      );
      head.position.y = 3.5;
      group.add(head);
  
      // Body
      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1, 3, 20),
        clothesMaterial
      );
      body.position.y = 1.5;
      group.add(body);
  
      // Arms
      const rightArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 2.5, 16),
        skinMaterial
      );
      rightArm.position.set(1.2, 1.5, 0);
      rightArm.rotation.z = Math.PI / 4; // Arm position
      group.add(rightArm);
  
      const leftArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 2.5, 16),
        skinMaterial
      );
      leftArm.position.set(-1.2, 1.5, 0);
      leftArm.rotation.z = -Math.PI / 4; // Arm position
      group.add(leftArm);
  
      // Legs
      const rightLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 2, 16),
        new THREE.MeshPhongMaterial({ color: 0x3b82f6 }) // Blue pants
      );
      rightLeg.position.set(0.5, -0.5, 0);
      group.add(rightLeg);
  
      const leftLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 2, 16),
        new THREE.MeshPhongMaterial({ color: 0x3b82f6 }) // Blue pants
      );
      leftLeg.position.set(-0.5, -0.5, 0);
      group.add(leftLeg);
  
      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.3, 3.7, 0.8);
      group.add(rightEye);
      
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.3, 3.7, 0.8);
      group.add(leftEye);
  
      // Mouth
      const mouthGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.1);
      const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
      mouth.position.set(0, 3.3, 0.85);
      group.add(mouth);
  
      // Add a laptop for developer character
      const laptop = new THREE.Group();
      
      // Laptop base
      const laptopBase = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.1, 0.8),
        new THREE.MeshPhongMaterial({ color: 0x333333 })
      );
      laptop.add(laptopBase);
      
      // Laptop screen
      const laptopScreen = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.8, 0.05),
        new THREE.MeshPhongMaterial({ color: 0x333333 })
      );
      laptopScreen.position.set(0, 0.4, -0.4);
      laptopScreen.rotation.x = -Math.PI / 6; // Tilt screen
      laptop.add(laptopScreen);
      
      // Screen display
      const screenDisplay = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.6),
        new THREE.MeshBasicMaterial({ color: 0x67e8f9 }) // Cyan color for screen
      );
      screenDisplay.position.set(0, 0.4, -0.375);
      screenDisplay.rotation.x = -Math.PI / 6; // Same tilt as screen
      laptop.add(screenDisplay);
      
      // Position laptop in front of character
      laptop.position.set(1.8, 1, 1.5);
      laptop.rotation.y = -Math.PI / 4; // Turn laptop slightly
      group.add(laptop);
  
      return group;
    }
  
    const character = createCharacter();
    scene.add(character);
  
    // Position camera
    camera.position.z = 10;
    camera.position.y = 2;
  
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Make the character slightly rotate/animate
      character.rotation.y += 0.01;
      
      // Slight bobbing motion
      character.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    }
  
    animate();
  });