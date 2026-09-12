import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Relative design units, deliberately not a manufacturing drawing.
export const keyLayout=[[-.88,-.24,'↑'],[-1.76,-1.14,'←'],[-.88,-1.14,'↓'],[0,-1.14,'→'],[.88,-.24,'OPT'],[1.76,-.24,'EDIT'],[-.44,-2.13,'SHIFT'],[.55,-2.13,'PLAY']];
function rect(x,y,w,h){const p=new THREE.Path();p.moveTo(x,y);p.lineTo(x,y+h);p.lineTo(x+w,y+h);p.lineTo(x+w,y);p.closePath();return p;}
export function createModel(){
 const root=new THREE.Group(),parts=[];
 const dark=new THREE.MeshStandardMaterial({color:0x292c2d,roughness:.72,metalness:.3});
 const keyMat=new THREE.MeshStandardMaterial({color:0x16191b,roughness:.6,metalness:.18});
 const pcb=new THREE.MeshStandardMaterial({color:0x175751,roughness:.85});
 const metal=new THREE.MeshStandardMaterial({color:0x979b98,metalness:.8,roughness:.35});
 function part(name,z,spread){const g=new THREE.Group();g.name=name;g.position.z=z;g.userData={base:z,spread};root.add(g);parts.push(g);return g;}
 function box(parent,w,h,d,x,y,z,mat=dark,r=.04){const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,3,r),mat);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
 const back=part('Задня кришка',-.43,-1.3);box(back,5.1,7.6,.15,0,0,0);
 const frame=part('Корпус',0,0);
 box(frame,.16,7.6,.76,-2.47,0,0);box(frame,.16,7.6,.76,2.47,0,0);box(frame,4.95,.16,.76,0,3.72,0);box(frame,4.95,.16,.76,0,-3.72,0);
 const boards=part('Pi 4 + Teensy',-.19,.65);
 box(boards,3.4,2.24,.07,-.3,.8,0,pcb);box(boards,.68,2.44,.07,1.67,1,0,pcb);
 box(boards,.75,.75,.18,-.25,.75,.13,metal);box(boards,.3,.3,.1,1.67,1,.1,keyMat);
 for(let i=0;i<20;i++){box(boards,.065,.1,.055,-1.8+i*.15,1.7,.12,metal,.01);box(boards,.065,.1,.055,1.94,-.1+i*.115,.1,metal,.01);}
 for(let i=0;i<2;i++)box(boards,.6,.6,.48,-1.55+i*.73,-.03,.15,metal);
 const front=part('Передня панель',.44,1.9);
 const outline=new THREE.Shape();outline.moveTo(-2.55,-3.8);outline.lineTo(2.55,-3.8);outline.lineTo(2.55,3.8);outline.lineTo(-2.55,3.8);outline.closePath();
 outline.holes.push(rect(-2.2,.43,4.4,2.93));
 keyLayout.forEach(([x,y])=>outline.holes.push(rect(x-.39,y-.39,.78,.78)));
 for(const x of [-1.84,1.7])for(let i=0;i<5;i++)outline.holes.push(rect(x-.3,-2.75+i*.13,.6,.045));
 const frontMesh=new THREE.Mesh(new THREE.ExtrudeGeometry(outline,{depth:.095,bevelEnabled:false}),dark);front.add(frontMesh);
 const display=part('HDMI-дисплей',.38,1.15);
 box(display,4.52,3.05,.12,0,1.89,0,keyMat);
 const canvas=document.createElement('canvas');canvas.width=640;canvas.height=440;const c=canvas.getContext('2d');
 c.fillStyle='#05090c';c.fillRect(0,0,640,440);c.font='19px monospace';c.fillStyle='#63e9e5';c.fillText('SONG  00                     T:120',20,40);
 c.fillStyle='#6e7289';c.fillText('    1   2   3   4   5   6   7   8',20,78);
 for(let i=0;i<13;i++){const y=107+i*23;c.fillStyle=i===2?'#71ede7':'#727990';c.fillText(i.toString(16).toUpperCase().padStart(2,'0'),20,y);for(let j=0;j<8;j++){c.fillStyle=j<3?'#cf9aba':'#333848';c.fillText(j<3?(i%4).toString(16).padStart(2,'0'):'--',96+j*65,y);}}
 c.fillStyle='#ff9365';c.fillRect(88,137,41,24);c.fillStyle='#141a21';c.fillText('02',96,156);c.fillStyle='#63e9e5';c.fillText('M8 HEADLESS          STUDY / DEMO',20,420);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(4.34,2.89),new THREE.MeshBasicMaterial({map:texture}));screen.position.set(0,1.89,.068);display.add(screen);
 const keys=part('8 кнопок',.65,2.55);
 keyLayout.forEach(([x,y,label])=>{box(keys,.78,.78,.19,x,y,0,keyMat);const cv=document.createElement('canvas');cv.width=128;cv.height=64;const ctx=cv.getContext('2d');ctx.font='20px monospace';ctx.fillStyle='#b5b8b5';ctx.textAlign='center';ctx.fillText(label,64,38);const tx=new THREE.CanvasTexture(cv);const m=new THREE.Mesh(new THREE.PlaneGeometry(.57,.285),new THREE.MeshBasicMaterial({map:tx,transparent:true}));m.position.set(x,y,.101);keys.add(m);});
 for(const x of [-2.32,2.32])for(const y of [-3.55,3.55]){const screw=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.03,12),metal);screw.rotation.x=Math.PI/2;screw.position.set(x,y,.11);front.add(screw);}
 return {root,parts};
}
