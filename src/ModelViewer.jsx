import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {STLExporter} from 'three/addons/exporters/STLExporter.js';
import {RotateCcw,Layers,Download,MoveUpRight} from 'lucide-react';
import {createModel} from './model';
import {download} from './state';
export default function ModelViewer({large=false}){
 const host=useRef(null),api=useRef(null);const [explode,setExplode]=useState(0),[selected,setSelected]=useState('Увесь пристрій'),[failed,setFailed]=useState(false);
 useEffect(()=>{
  let renderer,frameId,observer,controls;const materials=new Set(),geometries=new Set(),textures=new Set();
  try{
   renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;host.current.appendChild(renderer.domElement);
   renderer.domElement.setAttribute('aria-label','Інтерактивна 3D-концепція корпусу M8: перетягни для обертання');renderer.domElement.setAttribute('role','img');
   const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(34,1,.1,100);camera.position.set(8,-7,15);
   controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=11;controls.maxDistance=28;controls.target.set(0,0,.3);
   scene.add(new THREE.HemisphereLight(0xe2f3ff,0x403c33,3));const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-5,6,9);scene.add(key);const rim=new THREE.DirectionalLight(0xffc9a1,2);rim.position.set(5,-2,4);scene.add(rim);
   const model=createModel();scene.add(model.root);
   model.root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material){materials.add(o.material);if(o.material.map)textures.add(o.material.map);}});
   let target=0;
   api.current={setExplode:v=>target=v,reset:()=>{camera.position.set(8,-7,15);controls.target.set(0,0,.3);controls.update();},focus:name=>{for(const p of model.parts)p.visible=name==='Увесь пристрій'||p.name===name;},export:()=>{const clone=model.root.clone(true);clone.children.forEach(p=>{p.position.z=p.userData.base;});download('m8-concept-NOT-FOR-PRINT.stl',new STLExporter().parse(clone),'model/stl');}};
   observer=new ResizeObserver(()=>{const {width,height}=host.current.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/Math.max(height,1);camera.updateProjectionMatrix();});observer.observe(host.current);
   const animate=()=>{model.parts.forEach(p=>{const z=p.userData.base+p.userData.spread*target;p.position.z+=(z-p.position.z)*.13;});controls.update();renderer.render(scene,camera);frameId=requestAnimationFrame(animate);};animate();
  }catch(e){console.error('3D unavailable',e);setFailed(true);}
  return()=>{cancelAnimationFrame(frameId);observer?.disconnect();controls?.dispose();geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());renderer?.dispose();renderer?.domElement.remove();api.current=null;};
 },[]);
 return <div className={`model-view ${large?'large':''}`}>
  <div className="view-top"><span><span className="status-dot"/> LIVE 3D / КОНЦЕПЦІЯ</span><button className="icon-button" aria-label="Скинути ракурс" onClick={()=>api.current?.reset()}><RotateCcw size={16}/></button></div>
  <div className="three-host" ref={host}/>
  {failed&&<div className="fallback">3D потребує WebGL. Вихідна концепція доступна у <a href="/cad/m8-concept.scad" download>OpenSCAD</a>.</div>}
  <div className="view-caption"><span>MODEL:02 INSPIRED</span><span>01 / DESIGN STUDY</span></div>
  <div className="view-controls"><Layers size={17}/><label htmlFor={large?'explode-large':'explode'}>Розібрати</label><input id={large?'explode-large':'explode'} aria-label="Розсунути шари корпусу" type="range" min="0" max="100" value={explode} onChange={e=>{setExplode(+e.target.value);api.current?.setExplode(+e.target.value/100);}}/><span>{explode}%</span></div>
  {large&&<div className="model-tools"><label>Показати <select value={selected} onChange={e=>{setSelected(e.target.value);api.current?.focus(e.target.value);}}>{['Увесь пристрій','Передня панель','HDMI-дисплей','8 кнопок','Pi 4 + Teensy','Корпус','Задня кришка'].map(x=><option key={x}>{x}</option>)}</select></label><button className="button" disabled={failed} onClick={()=>api.current?.export()}><Download size={16}/> STL концепції</button></div>}
  <div className="view-hint"><MoveUpRight size={12}/> Перетягни, щоб обертати · прокрути для масштабу</div>
 </div>;
}
