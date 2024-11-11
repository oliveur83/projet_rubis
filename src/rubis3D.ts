import * as THREE from 'three';

export class Rubis3D {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private rubikCube!: THREE.Group;

  private animateId: number | undefined;

  constructor(private container: HTMLElement) {
    // Écouteur d'événements pour les touches R, L, F, B, D, U
    window.addEventListener('keydown', (event) => {
      if (event.key === 'r' || event.key === 'R') {
        this.rotateRightSlice();
      }
      if (event.key === 'l' || event.key === 'L') {
        this.rotateLeftSlice();
      }
      if (event.key === 'f' || event.key === 'F') {
        this.rotateFrontSlice();
      }
      if (event.key === 'b' || event.key === 'B') {
        this.rotateBackSlice(); // Rotation de la tranche arrière
      }
      if (event.key === 'd' || event.key === 'D') {
        this.rotateDownSlice(); // Rotation de la tranche bas
      }
      if (event.key === 'u' || event.key === 'U') {
        this.rotateUpSlice(); // Rotation de la tranche haut
      }
    });
  }

  public init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeeeeee);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(10, 5, 10);
    this.camera.lookAt(0, 0, 0);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);

    // Création du Rubik's Cube
    this.rubikCube = new THREE.Group();
    this.createRubiksCube();
    this.scene.add(this.rubikCube);

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // Lancer l'animation
    this.animate();
  }

  private createRubiksCube() {
    const size = 3;
    const cubeSpacing = 1.05;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const cube = this.createSmallCube(x, y, z);
          cube.position.set(
            (x - 1) * cubeSpacing,
            (y - 1) * cubeSpacing,
            (z - 1) * cubeSpacing
          );
          this.rubikCube.add(cube);
        }
      }
    }
  }

  private createSmallCube(x: number, y: number, z: number): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // blanc
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // rouge
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // bleu
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // orange
      new THREE.MeshBasicMaterial({ color: 0xff8000 }), // vert
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // jaune
    ];

    const cube = new THREE.Mesh(geometry, materials);
    this.addBlackEdges(cube);
    return cube;
  }

  private addBlackEdges(cube: THREE.Mesh) {
    const edgesGeometry = new THREE.EdgesGeometry(cube.geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cube.add(edges);
  }

  private rotateRightSlice() {
    console.log('Rotation de la tranche droite activée');

    this.rubikCube.children.forEach((cube) => {
      if (cube.position.x === 1.05) {
        cube.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
        if (cube.position.y == 1.05 && cube.position.z == 1.05) {
          cube.position.z = -1.05;
        } else if (cube.position.y == 1.05 && cube.position.z == -1.05) {
          cube.position.y = -1.05;
        } else if (cube.position.y == -1.05 && cube.position.z == 1.05) {
          cube.position.y = 1.05;
        } else if (cube.position.y == -1.05 && cube.position.z == -1.05) {
          cube.position.z = 1.05;
        }

        if (cube.position.y == 0 && cube.position.z == 1.05) {
          cube.position.y = 1.05;
          cube.position.z = 0;
        } else if (cube.position.y == 0 && cube.position.z == -1.05) {
          cube.position.y = -1.05;
          cube.position.z = 0;
        } else if (cube.position.y == 1.05 && cube.position.z == 0) {
          cube.position.z = -1.05;
          cube.position.y = 0;
        } else if (cube.position.y == -1.05 && cube.position.z == 0) {
          cube.position.z = 1.05;
          cube.position.y = 0;
        }
      }
    });
  }

  private rotateLeftSlice() {
    console.log('Rotation de la tranche gauche activée');
    this.rubikCube.children.forEach((cube) => {
      if (cube.position.x === -1.05) {
        cube.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        if (cube.position.y == 1.05 && cube.position.z == 1.05) {
          cube.position.y = -1.05;
        } else if (cube.position.y == 1.05 && cube.position.z == -1.05) {
          cube.position.z = 1.05;
        } else if (cube.position.y == -1.05 && cube.position.z == 1.05) {
          cube.position.z = -1.05;
        } else if (cube.position.y == -1.05 && cube.position.z == -1.05) {
          cube.position.y = 1.05;
        }

        if (cube.position.y == 0 && cube.position.z == -1.05) {
          cube.position.y = 1.05;
          cube.position.z = 0;
        } else if (cube.position.y == 0 && cube.position.z == 1.05) {
          cube.position.y = -1.05;
          cube.position.z = 0;
        } else if (cube.position.y == -1.05 && cube.position.z == 0) {
          cube.position.z = -1.05;
          cube.position.y = 0;
        } else if (cube.position.y == 1.05 && cube.position.z == 0) {
          cube.position.z = 1.05;
          cube.position.y = 0;
        }
      }
    });
  }

  private rotateFrontSlice() {
    console.log('Rotation de la tranche avant activée');
    this.rubikCube.children.forEach((cube) => {
      if (cube.position.z === 1.05) {
        cube.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        if (cube.position.y == 1.05 && cube.position.x == 1.05) {
          cube.position.x = -1.05;
        } else if (cube.position.y == 1.05 && cube.position.x == -1.05) {
          cube.position.y = -1.05;
        } else if (cube.position.y == -1.05 && cube.position.x == 1.05) {
          cube.position.y = 1.05;
        } else if (cube.position.y == -1.05 && cube.position.x == -1.05) {
          cube.position.x = 1.05;
        }

        if (cube.position.y == 0 && cube.position.x == -1.05) {
          cube.position.x = 0;
          cube.position.y = -1.05;
        } else if (cube.position.y == 0 && cube.position.x == 1.05) {
          cube.position.y = 1.05;
          cube.position.x = 0;
        } else if (cube.position.y == -1.05 && cube.position.x == 0) {
          cube.position.x = 1.05;
          cube.position.y = 0;
        } else if (cube.position.y == 1.05 && cube.position.x == 0) {
          cube.position.x = -1.05;
          cube.position.y = 0;
        }
      }
    });
  }

  private rotateBackSlice() {
    console.log('Rotation de la tranche arrière activée');
    this.rubikCube.children.forEach((cube) => {
      if (cube.position.z === -1.05) {
        cube.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 2);

        if (cube.position.y == 1.05 && cube.position.x == 1.05) {
          cube.position.y = -1.05;
        } else if (cube.position.y == 1.05 && cube.position.x == -1.05) {
          cube.position.x = 1.05;
        } else if (cube.position.y == -1.05 && cube.position.x == 1.05) {
          cube.position.x = -1.05;
        } else if (cube.position.y == -1.05 && cube.position.x == -1.05) {
          cube.position.y = 1.05;
        }

        if (cube.position.y == 0 && cube.position.x == -1.05) {
          cube.position.x = 0;
          cube.position.y = 1.05;
        } else if (cube.position.y == 0 && cube.position.x == 1.05) {
          cube.position.x = 0;
          cube.position.y = -1.05;
        } else if (cube.position.y == -1.05 && cube.position.x == 0) {
          cube.position.x = -1.05;
          cube.position.y = 0;
        } else if (cube.position.y == 1.05 && cube.position.x == 0) {
          cube.position.x = 1.05;
          cube.position.y = 0;
        }
        // Rotation de 90 degrés
      }
    });
  }

  private rotateDownSlice() {
    console.log('Rotation de la tranche bas activée');
    this.rubikCube.children.forEach((cube) => {
      if (cube.position.y === -1.05) {
        cube.rotation.y -= Math.PI / 2; // Rotation de 90 degrés
      }
    });
  }

  private rotateUpSlice() {
    console.log('Rotation de la tranche haut activée');
    this.rubikCube.children.forEach((cube) => {
      if (cube.position.y === 1.05) {
        cube.rotation.y += Math.PI / 2;
        // Rotation de 90 degrés
      }
    });
  }

  private animate(): void {
    this.animateId = requestAnimationFrame(() => this.animate());

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }

  public stopAnimation() {
    if (this.animateId !== undefined) {
      cancelAnimationFrame(this.animateId);
      this.animateId = undefined;
    }
  }
}
