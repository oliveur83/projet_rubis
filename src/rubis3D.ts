import * as THREE from 'three';

export class Rubis3D {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  materials: THREE.MeshBasicMaterial[] | undefined;
  cubeGeometry: THREE.BoxGeometry | undefined;
  cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]>[] = [];
  container: HTMLElement;
  rotatingGroupR!: THREE.Group;
  rotatingGroupF!: THREE.Group;
  rotatingGroupL!: THREE.Group;
  rotatingGroupB!: THREE.Group;
  rotatingGroupU!: THREE.Group;
  rotatingGroupD!: THREE.Group;
  rotationAngleR = 0;
  rotationAngleL = 0;
  rotationAngleB = 0;
  rotationAngleF = 0;
  rotationAngleU = 0;
  rotationAngleD = 0;
  isRotationRComplete = false;
  isRotationFComplete = false;
  isRotationLComplete = false;
  isRotationBComplete = false;
  isRotationUComplete = false;
  isRotationDComplete = false;
  varvar = false;
  ror = false;
  rorf = false;
  rorl = false;
  rorb = false;
  roru = false;
  rord = false;
  rotaterr = false;
  rotateff = false;
  rotatebb = false;
  rotatell = false;
  rotateuu = false;
  rotatedd = false;
  prime = false;

  constructor(container: HTMLElement) {
    this.container = container;
    window.addEventListener('keydown', (event) => {
      if (event.key === 'R') {
        this.rotater(this.prime);
      }
      if (event.key === 'F') {
        this.rotatef(this.prime);
      }
      if (event.key === 'B') {
        this.rotateb(this.prime);
      }
      if (event.key === 'L') {
        this.rotatel(this.prime);
      }
      if (event.key === 'U') {
        this.rotateu(this.prime);
      }
      if (event.key === 'D') {
        this.rotated(this.prime);
      }
      //------------------------
      if (event.key === 'r') {
        this.prime = true;
        this.rotater(this.prime);
      }
      if (event.key === 'f') {
        this.prime = true;
        this.rotatef(this.prime);
      }
      if (event.key === 'b') {
        this.prime = true;
        this.rotateb(this.prime);
      }
      if (event.key === 'l') {
        this.prime = true;

        this.rotatel(this.prime);
      }
      if (event.key === 'u') {
        this.prime = true;
        this.rotateu(this.prime);
      }
      if (event.key === 'd') {
        this.prime = true;
        this.rotated(this.prime);
      }
    });
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(6, 6, 6);
    this.camera.lookAt(0, 0, 0);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);
    this.materials = [
      new THREE.MeshBasicMaterial({ color: 0xff8000 }), // face 5 - orange
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // face 6 - rouge

      new THREE.MeshBasicMaterial({ color: 0xffffff }), // face 1 - blanc
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // face 2 - jaune
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // face 3 - bleu
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // face 4 - vert
    ];
    this.cubeGeometry = new THREE.BoxGeometry(1.9, 1.9, 1.9);

    this.rotatingGroupR = new THREE.Group();
    this.rotatingGroupF = new THREE.Group();
    this.rotatingGroupB = new THREE.Group();
    this.rotatingGroupL = new THREE.Group();
    this.rotatingGroupU = new THREE.Group();
    this.rotatingGroupD = new THREE.Group();

    const spacing = 2;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          const cube = new THREE.Mesh(this.cubeGeometry, this.materials);
          cube.position.set(
            x * spacing - spacing, // Position selon X
            y * spacing - spacing, // Position selon Y
            z * spacing - spacing // Position selon Z
          );
          this.scene.add(cube);
          this.cubes.push(cube);
        }
      }
    }
    this.animate();
  }
  rotater(prime: boolean) {
    this.rotaterr = true;
    this.prime = prime;
  }
  rotatef(prime: boolean) {
    this.rotateff = true;
    this.prime = prime;
  }
  rotatel(prime: boolean) {
    this.rotatell = true;
    this.prime = prime;
  }
  rotateb(prime: boolean) {
    this.rotatebb = true;
    this.prime = prime;
  }
  rotateu(prime: boolean) {
    this.rotateuu = true;
    this.prime = prime;
  }
  rotated(prime: boolean) {
    this.rotatedd = true;
    this.prime = prime;
  }
  animate() {
    if (!this.isRotationRComplete && this.ror) {
      if (this.rotationAngleR > -Math.PI / 2 && !this.prime) {
        this.rotationAngleR -= 0.04;
        if (this.rotationAngleR < -Math.PI / 2) {
          this.rotatingGroupR.rotation.x = -Math.PI / 2;
        } else {
          this.rotatingGroupR.rotation.x = this.rotationAngleR;
        }
      } else if (this.rotationAngleR < Math.PI / 2 && this.prime) {
        this.rotationAngleR += 0.04;
        if (this.rotationAngleR > Math.PI / 2) {
          this.rotatingGroupR.rotation.x = Math.PI / 2;
        } else {
          this.rotatingGroupR.rotation.x = this.rotationAngleR;
        }
      } else {
        this.isRotationRComplete = true;
        this.scene.remove(this.rotatingGroupR);
        this.rotatingGroupR.updateMatrixWorld();

        this.rotatingGroupR.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupR.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.rotatingGroupR.children[0]);
        this.scene.add(this.rotatingGroupR.children[0]);
        this.scene.add(this.rotatingGroupR.children[0]);
        this.scene.add(this.rotatingGroupR.children[0]);

        this.ror = false;
        this.scene.remove(this.rotatingGroupR);
        this.rotatingGroupR.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleR = 0;
        this.isRotationRComplete = false;
        this.prime = false;
      }
    }
    if (!this.isRotationLComplete && this.rorl) {
      if (this.rotationAngleL > -Math.PI / 2 && this.prime) {
        this.rotationAngleL -= 0.04;
        if (this.rotationAngleL < -Math.PI / 2) {
          this.rotatingGroupL.rotation.x = -Math.PI / 2;
        } else {
          this.rotatingGroupL.rotation.x = this.rotationAngleL;
        }
      } else if (this.rotationAngleL < Math.PI / 2 && !this.prime) {
        this.rotationAngleL += 0.04;
        if (this.rotationAngleL > Math.PI / 2) {
          this.rotatingGroupL.rotation.x = Math.PI / 2;
        } else {
          this.rotatingGroupL.rotation.x = this.rotationAngleL;
        }
      } else {
        this.isRotationLComplete = true;
        this.scene.remove(this.rotatingGroupL);
        this.rotatingGroupL.updateMatrixWorld();

        this.rotatingGroupL.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupL.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.rotatingGroupL.children[0]);
        this.scene.add(this.rotatingGroupL.children[0]);
        this.scene.add(this.rotatingGroupL.children[0]);
        this.scene.add(this.rotatingGroupL.children[0]);

        this.rorl = false;
        this.scene.remove(this.rotatingGroupL);
        this.rotatingGroupL.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleL = 0;
        this.isRotationLComplete = false;
        this.prime = false;
      }
    }
    if (!this.isRotationFComplete && this.rorf) {
      if (this.rotationAngleF > -Math.PI / 2 && this.prime) {
        this.rotationAngleF -= 0.04;
        if (this.rotationAngleF < -Math.PI / 2) {
          this.rotatingGroupF.rotation.z = -Math.PI / 2;
        } else {
          this.rotatingGroupF.rotation.z = this.rotationAngleF;
        }
      } else if (this.rotationAngleF < Math.PI / 2 && !this.prime) {
        this.rotationAngleF += 0.04;
        if (this.rotationAngleF > Math.PI / 2) {
          this.rotatingGroupF.rotation.z = Math.PI / 2;
        } else {
          this.rotatingGroupF.rotation.z = this.rotationAngleF;
        }
      } else {
        this.isRotationFComplete = true;
        this.scene.remove(this.rotatingGroupF);
        this.rotatingGroupF.updateMatrixWorld();

        this.rotatingGroupF.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupF.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.rotatingGroupF.children[0]);
        this.scene.add(this.rotatingGroupF.children[0]);
        this.scene.add(this.rotatingGroupF.children[0]);
        this.scene.add(this.rotatingGroupF.children[0]);

        this.rorf = false;
        this.scene.remove(this.rotatingGroupF);
        this.rotatingGroupF.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleF = 0;
        this.isRotationFComplete = false;
        this.prime = false;
      }
    }
    if (!this.isRotationBComplete && this.rorb) {
      if (this.rotationAngleB > -Math.PI / 2 && !this.prime) {
        this.rotationAngleB -= 0.04;
        if (this.rotationAngleB < -Math.PI / 2) {
          this.rotatingGroupB.rotation.z = -Math.PI / 2;
        } else {
          this.rotatingGroupB.rotation.z = this.rotationAngleB;
        }
      } else if (this.rotationAngleB < Math.PI / 2 && this.prime) {
        this.rotationAngleB += 0.04;
        if (this.rotationAngleB > Math.PI / 2) {
          this.rotatingGroupB.rotation.z = Math.PI / 2;
        } else {
          this.rotatingGroupB.rotation.z = this.rotationAngleB;
        }
      } else {
        this.isRotationBComplete = true;
        this.scene.remove(this.rotatingGroupB);
        this.rotatingGroupB.updateMatrixWorld();

        this.rotatingGroupB.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupB.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.rotatingGroupB.children[0]);
        this.scene.add(this.rotatingGroupB.children[0]);
        this.scene.add(this.rotatingGroupB.children[0]);
        this.scene.add(this.rotatingGroupB.children[0]);

        this.rorb = false;
        this.scene.remove(this.rotatingGroupB);
        this.rotatingGroupB.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleB = 0;
        this.isRotationBComplete = false;
        this.prime = false;
      }
    }
    if (!this.isRotationUComplete && this.roru) {
      if (this.rotationAngleU > -Math.PI / 2 && !this.prime) {
        this.rotationAngleU -= 0.05;
        if (this.rotationAngleU < -Math.PI / 2) {
          this.rotatingGroupU.rotation.y = -Math.PI / 2;
        } else {
          this.rotatingGroupU.rotation.y = this.rotationAngleU;
        }
      } else if (this.rotationAngleU < Math.PI / 2 && this.prime) {
        this.rotationAngleU += 0.05;
        if (this.rotationAngleU > Math.PI / 2) {
          this.rotatingGroupU.rotation.y = Math.PI / 2;
        } else {
          this.rotatingGroupU.rotation.y = this.rotationAngleU;
        }
      } else {
        this.isRotationUComplete = true;
        this.scene.remove(this.rotatingGroupU);
        this.rotatingGroupU.updateMatrixWorld();

        this.rotatingGroupU.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupU.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.rotatingGroupU.children[0]);
        this.scene.add(this.rotatingGroupU.children[0]);
        this.scene.add(this.rotatingGroupU.children[0]);
        this.scene.add(this.rotatingGroupU.children[0]);

        this.roru = false;
        this.scene.remove(this.rotatingGroupU);
        this.rotatingGroupU.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleU = 0;
        this.isRotationUComplete = false;
        this.prime = false;
      }
    }
    if (!this.isRotationDComplete && this.rord) {
      if (this.rotationAngleD > -Math.PI / 2 && !this.prime) {
        this.rotationAngleD -= 0.04;
        if (this.rotationAngleD < -Math.PI / 2) {
          this.rotatingGroupD.rotation.y = -Math.PI / 2;
        } else {
          this.rotatingGroupD.rotation.y = this.rotationAngleD;
        }
      } else if (this.rotationAngleD < Math.PI / 2 && this.prime) {
        this.rotationAngleD += 0.04;
        if (this.rotationAngleD > Math.PI / 2) {
          this.rotatingGroupD.rotation.y = Math.PI / 2;
        } else {
          this.rotatingGroupD.rotation.y = this.rotationAngleD;
        }
      } else {
        this.isRotationDComplete = true;
        this.scene.remove(this.rotatingGroupD);
        this.rotatingGroupD.updateMatrixWorld();

        this.rotatingGroupD.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const worldPosition = new THREE.Vector3();
            child.getWorldPosition(worldPosition);
            child.position.copy(worldPosition);

            const worldQuaternion = new THREE.Quaternion();
            child.getWorldQuaternion(worldQuaternion);
            child.quaternion.copy(worldQuaternion);
          } else {
            console.log('Objet ignoré :', child);
          }
        });

        this.rotatingGroupD.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.rotatingGroupD.children[0]);
        this.scene.add(this.rotatingGroupD.children[0]);
        this.scene.add(this.rotatingGroupD.children[0]);
        this.scene.add(this.rotatingGroupD.children[0]);

        this.rord = false;
        this.scene.remove(this.rotatingGroupD);
        this.rotatingGroupD.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleD = 0;
        this.isRotationDComplete = false;
        this.prime = false;
      }
    }
    if (this.rotaterr) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === 2) {
          this.rotatingGroupR.add(cube);
        }
      });
      console.log();
      this.scene.add(this.rotatingGroupR);
      this.ror = true;
      this.rotaterr = false;
    }
    if (this.rotatell) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === -2) {
          this.rotatingGroupL.add(cube);
        }
      });

      this.scene.add(this.rotatingGroupL);
      this.rorl = true;
      this.rotatell = false;
    }
    if (this.rotateff) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.z) === 2) {
          this.rotatingGroupF.add(cube);
        }
      });
      this.scene.add(this.rotatingGroupF);
      this.rorf = true;
      this.rotateff = false;
    }
    if (this.rotatebb) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.z) === -2) {
          this.rotatingGroupB.add(cube);
        }
      });
      this.scene.add(this.rotatingGroupB);
      this.rorb = true;
      this.rotatebb = false;
    }
    if (this.rotateuu) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.y) === 2) {
          this.rotatingGroupU.add(cube);
        }
      });
      this.scene.add(this.rotatingGroupU);
      this.roru = true;
      this.rotateuu = false;
    }
    if (this.rotatedd) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.y) === -2) {
          this.rotatingGroupD.add(cube);
        }
      });
      this.scene.add(this.rotatingGroupD);
      this.rord = true;
      this.rotatedd = false;
    }

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.animate());
  }
}
