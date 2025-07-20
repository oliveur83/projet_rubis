import * as THREE from 'three';
export type ActionKey =
  | 'R'
  | 'L'
  | 'U'
  | 'F'
  | 'D'
  | 'B'
  | 'r'
  | 'l'
  | 'u'
  | 'f'
  | 'd'
  | 'b'
  | 'rw'
  | 'fw'
  | 'rww'
  | 'lw'
  | 'lww'
  | 'fww';

export class Rubis3D {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  materials: THREE.MeshBasicMaterial[] | undefined;
  cubeGeometry: THREE.BoxGeometry | undefined;
  cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]>[] = [];
  container: HTMLElement;

  Rotating_Group_R!: THREE.Group;
  Rotatin_Group_F!: THREE.Group;
  Rotatin_Group_L!: THREE.Group;
  Rotatin_Group_B!: THREE.Group;
  Rotatin_Group_U!: THREE.Group;
  Rotatin_Group_D!: THREE.Group;
  Rotatin_Group_Y!: THREE.Group;
  Rotatin_Group_X!: THREE.Group;
  Rotating_Group_r!: THREE.Group;
  Rotatin_Group_f!: THREE.Group;
  Rotatin_Group_l!: THREE.Group;

  rotationAngleR = 0;
  rotationAngleL = 0;
  rotationAngleB = 0;
  rotationAngleF = 0;
  rotationAngleU = 0;
  rotationAngleD = 0;
  rotationAngleY = 0;
  rotationAngleX = 0;
  rotationAngler = 0;
  rotationAnglef = 0;
  rotationAnglel = 0;

  is_Rotation_R_Complete = false;
  is_Rotation_F_Complete = false;
  is_Rotation_L_Complete = false;
  is_Rotation_B_Complete = false;
  is_Rotation_U_Complete = false;
  is_Rotation_D_Complete = false;
  is_Rotation_Y_Complete = false;
  is_Rotation_X_Complete = false;
  is_Rotation_r_Complete = false;
  is_Rotation_f_Complete = false;
  is_Rotation_l_Complete = false;

  Flag_Rotation_R_Encours = false;
  Flag_Rotation_F_Encours = false;
  Flag_Rotation_L_Encours = false;
  Flag_Rotation_B_Encours = false;
  Flag_Rotation_U_Encours = false;
  Flag_Rotation_D_Encours = false;
  Flag_Rotation_Y_Encours = false;
  Flag_Rotation_X_Encours = false;
  Flag_Rotation_r_Encours = false;
  Flag_Rotation_f_Encours = false;
  Flag_Rotation_l_Encours = false;

  flag_ajout_groupe_R = false;
  Flag_Ajout_Groupe_F = false;
  Flag_Ajout_Groupe_B = false;
  Flag_Ajout_Groupe_L = false;
  Flag_Ajout_Groupe_U = false;
  Flag_Ajout_Groupe_D = false;
  Flag_Ajout_Groupe_Y = false;
  Flag_Ajout_Groupe_X = false;
  Flag_Ajout_Groupe_r = false;
  Flag_Ajout_Groupe_f = false;
  Flag_Ajout_Groupe_l = false;

  prime = false;
  // variable pour n
  blocage_animation = false;
  indice_recuperation_liste = 0;

  actions: { [key in ActionKey]: () => void } = {
    R: () => this.configuration_rotation_R(false),
    L: () => this.Configuration_Rotation_L(false),
    U: () => this.Configuration_Rotation_U(false),
    F: () => this.Configuration_Rotation_F(false),
    D: () => this.Configuration_Rotation_D(false),
    B: () => this.Configuration_Rotation_B(false),
    r: () => this.configuration_rotation_R(true),
    l: () => this.Configuration_Rotation_L(true),
    u: () => this.Configuration_Rotation_U(true),
    f: () => this.Configuration_Rotation_F(true),
    d: () => this.Configuration_Rotation_D(true),
    b: () => this.Configuration_Rotation_B(true),
    rw: () => this.configuration_rotation_r(false),
    fw: () => this.Configuration_Rotation_f(false),
    lw: () => this.Configuration_Rotation_l(false),
    lww: () => this.Configuration_Rotation_l(true),
    rww: () => this.configuration_rotation_r(true),
    fww: () => this.Configuration_Rotation_f(true),
  };

  constructor(container: HTMLElement) {
    this.container = container;
    // Lier la méthode resizeRendererToDisplaySize au contexte de la classe
    window.addEventListener(
      'resize',
      this.resizeRendererToDisplaySize.bind(this)
    );

    // Écoute des touches pour effectuer les rotations
    window.addEventListener('keydown', (event) => {
      if (!this.blocage_animation) {
        switch (event.key) {
          case 'y':
            this.blocage_animation = true;
            this.configuration_rotation_Y();
            break;
          case 'x':
            this.blocage_animation = true;
            this.configuration_rotation_X();
            break;
          case 'r':
            this.blocage_animation = true;
            this.configuration_rotation_r(false);
            break;
          case 'l':
            this.blocage_animation = true;
            this.Configuration_Rotation_l(false);
            break;
          /* case 'R':
          case 'r':
            this.blocage_animation = true;
            this.prime = event.key === 'r';
            this.configuration_rotation_R(this.prime);
            break;
          case 'F':
          case 'f':
            this.blocage_animation = true;
            this.prime = event.key === 'f';
            this.Configuration_Rotation_F(this.prime);
            break;
          case 'B':
          case 'b':
            this.blocage_animation = true;
            this.prime = event.key === 'b';
            this.Configuration_Rotation_B(this.prime);
            break;
          case 'L':
          case 'l':
            this.blocage_animation = true;
            this.prime = event.key === 'l';
            this.Configuration_Rotation_L(this.prime);
            break;
          case 'U':
          case 'u':
            this.blocage_animation = true;
            this.prime = event.key === 'u';
            this.Configuration_Rotation_U(this.prime);
            break;
          case 'D':
          case 'd':
            this.blocage_animation = true;
            this.prime = event.key === 'd';
            this.Configuration_Rotation_D(this.prime);
            break; */
        }
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

    // Créer les groupes de rotation
    this.Rotating_Group_R = new THREE.Group();
    this.Rotatin_Group_F = new THREE.Group();
    this.Rotatin_Group_B = new THREE.Group();
    this.Rotatin_Group_L = new THREE.Group();
    this.Rotatin_Group_U = new THREE.Group();
    this.Rotatin_Group_D = new THREE.Group();
    this.Rotatin_Group_Y = new THREE.Group();
    this.Rotatin_Group_X = new THREE.Group();
    this.Rotating_Group_r = new THREE.Group();
    this.Rotatin_Group_f = new THREE.Group();
    this.Rotatin_Group_l = new THREE.Group();
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

  resizeRendererToDisplaySize() {
    const container = document.querySelector('.threejs-container');
    const width = container!.clientWidth;
    const height = container!.clientHeight;
    this.renderer.setSize(width, height);

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
  configuration_rotation_Y() {
    this.Flag_Ajout_Groupe_Y = true;
    this.blocage_animation = true;
  }
  configuration_rotation_X() {
    this.Flag_Ajout_Groupe_X = true;
    this.blocage_animation = true;
  }
  configuration_rotation_R(prime: boolean) {
    this.flag_ajout_groupe_R = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_F(prime: boolean) {
    this.Flag_Ajout_Groupe_F = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_L(prime: boolean) {
    this.Flag_Ajout_Groupe_L = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_l(prime: boolean) {
    this.Flag_Ajout_Groupe_l = true;
    console.log('ici');
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_B(prime: boolean) {
    this.Flag_Ajout_Groupe_B = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_U(prime: boolean) {
    this.Flag_Ajout_Groupe_U = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_D(prime: boolean) {
    this.Flag_Ajout_Groupe_D = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  configuration_rotation_r(prime: boolean) {
    this.Flag_Ajout_Groupe_r = true;
    this.prime = prime;
    this.blocage_animation = true;
  }
  Configuration_Rotation_f(prime: boolean) {
    this.Flag_Ajout_Groupe_f = true;
    this.prime = prime;
    this.blocage_animation = true;
  }

  Recuperation_liste(toto: ActionKey[]) {
    let i = 0;
    const next = () => {
      if (i < toto.length) {
        if (!this.blocage_animation) {
          this.actions[toto[i]](); // Exécute ton action
          // Appelle animate ici si nécessaire
          this.animate(); // Si besoin explicite
          this.animate();
          i++;
        }

        setTimeout(next, 1000); // Laisse le temps à Angular de détecter les changements
      }
    };
    next(); // Démarre la boucle
  }
  animate() {
    //mise en palce de la rotation
    if (!this.is_Rotation_R_Complete && this.Flag_Rotation_R_Encours) {
      // if c'est égale a R
      if (this.rotationAngleR > -Math.PI / 2 && !this.prime) {
        this.rotationAngleR -= 0.04;
        if (this.rotationAngleR < -Math.PI / 2) {
          this.Rotating_Group_R.rotation.x = -Math.PI / 2;
        } else {
          this.Rotating_Group_R.rotation.x = this.rotationAngleR;
        }
      }
      // if c'est égale a R'
      else if (this.rotationAngleR < Math.PI / 2 && this.prime) {
        this.rotationAngleR += 0.04;
        if (this.rotationAngleR > Math.PI / 2) {
          this.Rotating_Group_R.rotation.x = Math.PI / 2;
        } else {
          this.Rotating_Group_R.rotation.x = this.rotationAngleR;
        }
      }
      // sinon c'est terminé
      else {
        this.is_Rotation_R_Complete = true;
        this.scene.remove(this.Rotating_Group_R);
        this.Rotating_Group_R.updateMatrixWorld();
        //mise a jour remet comme avant
        this.Rotating_Group_R.children.forEach((child) => {
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

        this.Rotating_Group_R.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.Rotating_Group_R.children[0]);
        this.scene.add(this.Rotating_Group_R.children[0]);
        this.scene.add(this.Rotating_Group_R.children[0]);
        this.scene.add(this.Rotating_Group_R.children[0]);

        this.Flag_Rotation_R_Encours = false;
        this.scene.remove(this.Rotating_Group_R);
        this.Rotating_Group_R.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleR = 0;
        this.is_Rotation_R_Complete = false;
        this.blocage_animation = false;
        this.prime = false;
      }
    }
    if (!this.is_Rotation_L_Complete && this.Flag_Rotation_L_Encours) {
      if (this.rotationAngleL > -Math.PI / 2 && this.prime) {
        this.rotationAngleL -= 0.04;
        if (this.rotationAngleL < -Math.PI / 2) {
          this.Rotatin_Group_L.rotation.x = -Math.PI / 2;
        } else {
          this.Rotatin_Group_L.rotation.x = this.rotationAngleL;
        }
      } else if (this.rotationAngleL < Math.PI / 2 && !this.prime) {
        this.rotationAngleL += 0.04;
        if (this.rotationAngleL > Math.PI / 2) {
          this.Rotatin_Group_L.rotation.x = Math.PI / 2;
        } else {
          this.Rotatin_Group_L.rotation.x = this.rotationAngleL;
        }
      } else {
        this.is_Rotation_L_Complete = true;
        this.scene.remove(this.Rotatin_Group_L);
        this.Rotatin_Group_L.updateMatrixWorld();

        this.Rotatin_Group_L.children.forEach((child) => {
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

        this.Rotatin_Group_L.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.Rotatin_Group_L.children[0]);
        this.scene.add(this.Rotatin_Group_L.children[0]);
        this.scene.add(this.Rotatin_Group_L.children[0]);
        this.scene.add(this.Rotatin_Group_L.children[0]);

        this.Flag_Rotation_L_Encours = false;
        this.scene.remove(this.Rotatin_Group_L);
        this.Rotatin_Group_L.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleL = 0;
        this.is_Rotation_L_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_l_Complete && this.Flag_Rotation_l_Encours) {
      console.log('la ');
      if (this.rotationAnglel > -Math.PI / 2 && this.prime) {
        this.rotationAnglel -= 0.04;
        if (this.rotationAnglel < -Math.PI / 2) {
          this.Rotatin_Group_l.rotation.x = -Math.PI / 2;
        } else {
          this.Rotatin_Group_l.rotation.x = this.rotationAnglel;
        }
      } else if (this.rotationAnglel < Math.PI / 2 && !this.prime) {
        this.rotationAnglel += 0.04;
        if (this.rotationAnglel > Math.PI / 2) {
          this.Rotatin_Group_l.rotation.x = Math.PI / 2;
        } else {
          this.Rotatin_Group_l.rotation.x = this.rotationAnglel;
        }
      } else {
        this.is_Rotation_l_Complete = true;
        this.scene.remove(this.Rotatin_Group_l);
        this.Rotatin_Group_l.updateMatrixWorld();

        this.Rotatin_Group_l.children.forEach((child) => {
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

        this.Rotatin_Group_l.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.scene.add(this.Rotatin_Group_l.children[0]);
        this.Flag_Rotation_l_Encours = false;
        this.scene.remove(this.Rotatin_Group_l);
        this.Rotatin_Group_l.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAnglel = 0;
        this.is_Rotation_l_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_F_Complete && this.Flag_Rotation_F_Encours) {
      if (this.rotationAngleF > -Math.PI / 2 && !this.prime) {
        this.rotationAngleF -= 0.04;
        if (this.rotationAngleF < -Math.PI / 2) {
          this.Rotatin_Group_F.rotation.z = -Math.PI / 2;
        } else {
          this.Rotatin_Group_F.rotation.z = this.rotationAngleF;
        }
      } else if (this.rotationAngleF < Math.PI / 2 && this.prime) {
        this.rotationAngleF += 0.04;
        if (this.rotationAngleF > Math.PI / 2) {
          this.Rotatin_Group_F.rotation.z = Math.PI / 2;
        } else {
          this.Rotatin_Group_F.rotation.z = this.rotationAngleF;
        }
      } else {
        this.is_Rotation_F_Complete = true;
        this.scene.remove(this.Rotatin_Group_F);
        this.Rotatin_Group_F.updateMatrixWorld();

        this.Rotatin_Group_F.children.forEach((child) => {
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

        this.Rotatin_Group_F.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_F.children[0]);
        this.scene.add(this.Rotatin_Group_F.children[0]);
        this.scene.add(this.Rotatin_Group_F.children[0]);
        this.scene.add(this.Rotatin_Group_F.children[0]);

        this.Flag_Rotation_F_Encours = false;
        this.scene.remove(this.Rotatin_Group_F);
        this.Rotatin_Group_F.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleF = 0;
        this.is_Rotation_F_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_B_Complete && this.Flag_Rotation_B_Encours) {
      if (this.rotationAngleB > -Math.PI / 2 && !this.prime) {
        this.rotationAngleB -= 0.04;
        if (this.rotationAngleB < -Math.PI / 2) {
          this.Rotatin_Group_B.rotation.z = -Math.PI / 2;
        } else {
          this.Rotatin_Group_B.rotation.z = this.rotationAngleB;
        }
      } else if (this.rotationAngleB < Math.PI / 2 && this.prime) {
        this.rotationAngleB += 0.04;
        if (this.rotationAngleB > Math.PI / 2) {
          this.Rotatin_Group_B.rotation.z = Math.PI / 2;
        } else {
          this.Rotatin_Group_B.rotation.z = this.rotationAngleB;
        }
      } else {
        this.is_Rotation_B_Complete = true;
        this.scene.remove(this.Rotatin_Group_B);
        this.Rotatin_Group_B.updateMatrixWorld();

        this.Rotatin_Group_B.children.forEach((child) => {
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

        this.Rotatin_Group_B.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_B.children[0]);
        this.scene.add(this.Rotatin_Group_B.children[0]);
        this.scene.add(this.Rotatin_Group_B.children[0]);
        this.scene.add(this.Rotatin_Group_B.children[0]);

        this.Flag_Rotation_B_Encours = false;
        this.scene.remove(this.Rotatin_Group_B);
        this.Rotatin_Group_B.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleB = 0;
        this.is_Rotation_B_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_U_Complete && this.Flag_Rotation_U_Encours) {
      if (this.rotationAngleU > -Math.PI / 2 && !this.prime) {
        this.rotationAngleU -= 0.05;
        if (this.rotationAngleU < -Math.PI / 2) {
          this.Rotatin_Group_U.rotation.y = -Math.PI / 2;
        } else {
          this.Rotatin_Group_U.rotation.y = this.rotationAngleU;
        }
      } else if (this.rotationAngleU < Math.PI / 2 && this.prime) {
        this.rotationAngleU += 0.05;
        if (this.rotationAngleU > Math.PI / 2) {
          this.Rotatin_Group_U.rotation.y = Math.PI / 2;
        } else {
          this.Rotatin_Group_U.rotation.y = this.rotationAngleU;
        }
      } else {
        this.is_Rotation_U_Complete = true;
        this.scene.remove(this.Rotatin_Group_U);
        this.Rotatin_Group_U.updateMatrixWorld();

        this.Rotatin_Group_U.children.forEach((child) => {
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

        this.Rotatin_Group_U.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_U.children[0]);
        this.scene.add(this.Rotatin_Group_U.children[0]);
        this.scene.add(this.Rotatin_Group_U.children[0]);
        this.scene.add(this.Rotatin_Group_U.children[0]);

        this.Flag_Rotation_U_Encours = false;
        this.scene.remove(this.Rotatin_Group_U);
        this.Rotatin_Group_U.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleU = 0;
        this.is_Rotation_U_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_D_Complete && this.Flag_Rotation_D_Encours) {
      if (this.rotationAngleD > -Math.PI / 2 && !this.prime) {
        this.rotationAngleD -= 0.04;
        if (this.rotationAngleD < -Math.PI / 2) {
          this.Rotatin_Group_D.rotation.y = -Math.PI / 2;
        } else {
          this.Rotatin_Group_D.rotation.y = this.rotationAngleD;
        }
      } else if (this.rotationAngleD < Math.PI / 2 && this.prime) {
        this.rotationAngleD += 0.04;
        if (this.rotationAngleD > Math.PI / 2) {
          this.Rotatin_Group_D.rotation.y = Math.PI / 2;
        } else {
          this.Rotatin_Group_D.rotation.y = this.rotationAngleD;
        }
      } else {
        this.is_Rotation_D_Complete = true;
        this.scene.remove(this.Rotatin_Group_D);
        this.Rotatin_Group_D.updateMatrixWorld();

        this.Rotatin_Group_D.children.forEach((child) => {
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

        this.Rotatin_Group_D.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_D.children[0]);
        this.scene.add(this.Rotatin_Group_D.children[0]);
        this.scene.add(this.Rotatin_Group_D.children[0]);
        this.scene.add(this.Rotatin_Group_D.children[0]);

        this.Flag_Rotation_D_Encours = false;
        this.scene.remove(this.Rotatin_Group_D);
        this.Rotatin_Group_D.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleD = 0;
        this.is_Rotation_D_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_Y_Complete && this.Flag_Rotation_Y_Encours) {
      if (this.rotationAngleY > -Math.PI / 2 && !this.prime) {
        this.rotationAngleY -= 0.04;
        if (this.rotationAngleY < -Math.PI / 2) {
          this.Rotatin_Group_Y.rotation.y = -Math.PI / 2;
        } else {
          this.Rotatin_Group_Y.rotation.y = this.rotationAngleY;
        }
      } else if (this.rotationAngleY < Math.PI / 2 && this.prime) {
        this.rotationAngleY += 0.04;
        if (this.rotationAngleY > Math.PI / 2) {
          this.Rotatin_Group_Y.rotation.y = Math.PI / 2;
        } else {
          this.Rotatin_Group_Y.rotation.y = this.rotationAngleY;
        }
      } else {
        this.is_Rotation_Y_Complete = true;
        this.scene.remove(this.Rotatin_Group_Y);
        this.Rotatin_Group_Y.updateMatrixWorld();

        this.Rotatin_Group_Y.children.forEach((child) => {
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

        this.Rotatin_Group_Y.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.scene.add(this.Rotatin_Group_Y.children[0]);
        this.Flag_Rotation_Y_Encours = false;
        this.scene.remove(this.Rotatin_Group_Y);
        this.Rotatin_Group_Y.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleY = 0;
        this.is_Rotation_Y_Complete = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_X_Complete && this.Flag_Rotation_X_Encours) {
      // if c'est égale a R
      if (this.rotationAngleX > -Math.PI / 2 && !this.prime) {
        this.rotationAngleX -= 0.04;
        if (this.rotationAngleX < -Math.PI / 2) {
          this.Rotatin_Group_X.rotation.x = -Math.PI / 2;
        } else {
          this.Rotatin_Group_X.rotation.x = this.rotationAngleX;
        }
      }
      // sinon c'est terminé
      else {
        this.is_Rotation_X_Complete = true;
        this.scene.remove(this.Rotatin_Group_X);
        this.Rotatin_Group_X.updateMatrixWorld();
        //mise a jour remet comme avant
        this.Rotatin_Group_X.children.forEach((child) => {
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

        this.Rotatin_Group_X.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);
        this.scene.add(this.Rotatin_Group_X.children[0]);

        this.Flag_Rotation_X_Encours = false;
        this.scene.remove(this.Rotatin_Group_X);
        this.Rotatin_Group_X.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngleX = 0;
        this.is_Rotation_X_Complete = false;
        this.blocage_animation = false;
      }
    }
    if (!this.is_Rotation_r_Complete && this.Flag_Rotation_r_Encours) {
      // if c'est égale a R
      if (this.rotationAngler > -Math.PI / 2 && !this.prime) {
        this.rotationAngler -= 0.04;
        if (this.rotationAngler < -Math.PI / 2) {
          this.Rotating_Group_r.rotation.x = -Math.PI / 2;
        } else {
          this.Rotating_Group_r.rotation.x = this.rotationAngler;
        }
      }
      // if c'est égale a R'
      else if (this.rotationAngler < Math.PI / 2 && this.prime) {
        this.rotationAngler += 0.04;
        if (this.rotationAngler > Math.PI / 2) {
          this.Rotating_Group_r.rotation.x = Math.PI / 2;
        } else {
          this.Rotating_Group_r.rotation.x = this.rotationAngler;
        }
      }
      // sinon c'est terminé
      else {
        this.is_Rotation_r_Complete = true;
        this.scene.remove(this.Rotating_Group_r);
        this.Rotating_Group_r.updateMatrixWorld();
        //mise a jour remet comme avant
        this.Rotating_Group_r.children.forEach((child) => {
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

        this.Rotating_Group_r.children.forEach((cube, index) => {
          this.scene.add(cube);
        });

        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.scene.add(this.Rotating_Group_r.children[0]);
        this.Flag_Rotation_r_Encours = false;
        this.scene.remove(this.Rotating_Group_r);
        this.Rotating_Group_r.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAngler = 0;
        this.is_Rotation_r_Complete = false;
        this.blocage_animation = false;
        this.prime = false;
      }
    }

    if (!this.is_Rotation_f_Complete && this.Flag_Rotation_f_Encours) {
      if (this.rotationAnglef > -Math.PI / 2 && !this.prime) {
        this.rotationAnglef -= 0.04;
        if (this.rotationAnglef < -Math.PI / 2) {
          this.Rotatin_Group_f.rotation.z = -Math.PI / 2;
        } else {
          this.Rotatin_Group_f.rotation.z = this.rotationAnglef;
        }
      } else if (this.rotationAnglef < Math.PI / 2 && this.prime) {
        this.rotationAnglef += 0.04;
        if (this.rotationAnglef > Math.PI / 2) {
          this.Rotatin_Group_f.rotation.z = Math.PI / 2;
        } else {
          this.Rotatin_Group_f.rotation.z = this.rotationAnglef;
        }
      } else {
        this.is_Rotation_f_Complete = true;
        this.scene.remove(this.Rotatin_Group_f);
        this.Rotatin_Group_f.updateMatrixWorld();

        this.Rotatin_Group_f.children.forEach((child) => {
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

        this.Rotatin_Group_f.children.forEach((cube, index) => {
          this.scene.add(cube);
        });
        this.cubes = [];

        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.scene.add(this.Rotatin_Group_f.children[0]);
        this.Flag_Rotation_f_Encours = false;
        this.scene.remove(this.Rotatin_Group_f);
        this.Rotatin_Group_f.clear();

        this.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            this.cubes.push(object);
          }
        });
        this.rotationAnglef = 0;
        this.is_Rotation_f_Complete = false;
        this.prime = false;
        this.blocage_animation = false;
      }
    }

    // ajout de groupe dans la scene pour la rotation
    if (this.flag_ajout_groupe_R) {
      //ajout dans un groupe pour rotation
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === 2) {
          this.Rotating_Group_R.add(cube);
        }
      });
      this.scene.add(this.Rotating_Group_R);
      this.Flag_Rotation_R_Encours = true;
      this.flag_ajout_groupe_R = false;
    }
    if (this.Flag_Ajout_Groupe_L) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === -2) {
          this.Rotatin_Group_L.add(cube);
        }
      });

      this.scene.add(this.Rotatin_Group_L);
      this.Flag_Rotation_L_Encours = true;
      this.Flag_Ajout_Groupe_L = false;
    }
    if (this.Flag_Ajout_Groupe_l) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === -2) {
          this.Rotatin_Group_l.add(cube);
        }
        if (Math.round(cube.position.x) === 0) {
          this.Rotatin_Group_l.add(cube);
        }
      });
      console.log('putain');
      this.scene.add(this.Rotatin_Group_l);
      this.Flag_Rotation_l_Encours = true;
      this.Flag_Ajout_Groupe_l = false;
    }
    if (this.Flag_Ajout_Groupe_F) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.z) === 2) {
          this.Rotatin_Group_F.add(cube);
        }
      });
      this.scene.add(this.Rotatin_Group_F);
      this.Flag_Rotation_F_Encours = true;
      this.Flag_Ajout_Groupe_F = false;
    }
    if (this.Flag_Ajout_Groupe_B) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.z) === -2) {
          this.Rotatin_Group_B.add(cube);
        }
      });
      this.scene.add(this.Rotatin_Group_B);
      this.Flag_Rotation_B_Encours = true;
      this.Flag_Ajout_Groupe_B = false;
    }
    if (this.Flag_Ajout_Groupe_U) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.y) === 2) {
          this.Rotatin_Group_U.add(cube);
        }
      });
      this.scene.add(this.Rotatin_Group_U);
      this.Flag_Rotation_U_Encours = true;
      this.Flag_Ajout_Groupe_U = false;
    }
    if (this.Flag_Ajout_Groupe_D) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.y) === -2) {
          this.Rotatin_Group_D.add(cube);
        }
      });
      this.scene.add(this.Rotatin_Group_D);
      this.Flag_Rotation_D_Encours = true;
      this.Flag_Ajout_Groupe_D = false;
    }
    if (this.Flag_Ajout_Groupe_Y) {
      this.cubes.forEach((cube) => {
        this.Rotatin_Group_Y.add(cube);
      });
      this.scene.add(this.Rotatin_Group_Y);
      this.Flag_Rotation_Y_Encours = true;
      this.Flag_Ajout_Groupe_Y = false;
    }
    if (this.Flag_Ajout_Groupe_X) {
      this.cubes.forEach((cube) => {
        this.Rotatin_Group_X.add(cube);
      });
      this.scene.add(this.Rotatin_Group_X);
      this.Flag_Rotation_X_Encours = true;
      this.Flag_Ajout_Groupe_X = false;
    }
    if (this.Flag_Ajout_Groupe_r) {
      //ajout dans un groupe pour rotation
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.x) === 2) {
          this.Rotating_Group_r.add(cube);
        }
        if (Math.round(cube.position.x) === 0) {
          this.Rotating_Group_r.add(cube);
        }
      });
      this.scene.add(this.Rotating_Group_r);
      this.Flag_Rotation_r_Encours = true;
      this.Flag_Ajout_Groupe_r = false;
    }
    if (this.Flag_Ajout_Groupe_f) {
      this.cubes.forEach((cube) => {
        if (Math.round(cube.position.z) === 2) {
          this.Rotatin_Group_f.add(cube);
        }
        if (Math.round(cube.position.z) === 0) {
          this.Rotatin_Group_f.add(cube);
        }
      });
      this.scene.add(this.Rotatin_Group_f);
      this.Flag_Rotation_f_Encours = true;
      this.Flag_Ajout_Groupe_f = false;
    }
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.animate());
  }
}
