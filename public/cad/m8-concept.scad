// M8 / BUILD original visual concept, 2026-09-13.
// NOT manufacturing-ready. Dimensions below are illustrative only.
// No confirmed display holes, PCB mounts, cable exits or thermal validation.
// Adapt with actual module drawings before any final print.
// Model:02 inspired; not Dirtywave CAD. All values in nominal mm.
width=102;
height=152;
depth=19;
wall=2;
exploded=0; // preview separation, mm
part="assembly"; // assembly / front / back / shell / button-test
screen_w=88; // placeholder, measure selected HDMI module
screen_h=58.6;
switch_hole=15.6; // placeholder, not a Kailh verified footprint
keys=[[-17.6,-4.8],[-35.2,-22.8],[-17.6,-22.8],[0,-22.8],[17.6,-4.8],[35.2,-4.8],[-8.8,-42.6],[11,-42.6]];
module front(){difference(){translate([-width/2,-height/2,0])cube([width,height,wall]);translate([-screen_w/2,8.6,-1])cube([screen_w,screen_h,wall+2]);for(p=keys)translate([p[0]-switch_hole/2,p[1]-switch_hole/2,-1])cube([switch_hole,switch_hole,wall+2]);for(x=[-36.8,34])for(i=[0:4])translate([x-6,-55+i*2.6,-1])cube([12,.9,wall+2]);}}
module shell(){difference(){translate([-width/2,-height/2,0])cube([width,height,depth]);translate([-width/2+wall,-height/2+wall,-1])cube([width-2*wall,height-2*wall,depth+2]);}}
module back(){translate([-width/2,-height/2,0])cube([width,height,wall]);}
module button_test(){difference(){cube([28,28,wall]);translate([(28-switch_hole)/2,(28-switch_hole)/2,-1])cube([switch_hole,switch_hole,wall+2]);}}
if(part=="front")front();
else if(part=="back")back();
else if(part=="shell")shell();
else if(part=="button-test")button_test();
else {color("#303333")shell();color("#202424")translate([0,0,-wall-exploded])back();color("#303333")translate([0,0,depth+exploded])front();}
