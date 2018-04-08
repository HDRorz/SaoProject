var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 99999999999 );

var renderer = new THREE.WebGLRenderer( { antialias: true } );
//renderer.setClearColor( 0x000000, 1 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.x = 0;
camera.position.z = 120;

var randomXY = function () {
	var radius = 50;
	//var ranx = Math.random() * radius * 2 - radius;
	var ranx = 50;
	var rany = Math.sqrt(radius * radius - ranx * ranx) * ((Math.random() - 0.5 >= 0) - 0.5) * 2;
	return {x: ranx, y: rany};
};

var geometry = new THREE.CylinderGeometry( 5, 5, 200, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );
var cylinderXY = randomXY();
cylinder.position.x = cylinderXY.x;
cylinder.position.y = cylinderXY.y;
cylinder.rotation.x = Math.PI/2;
//cylinder.rotation.y = Math.PI/2;
//cylinder.position.z = Math.PI/2;
scene.add( cylinder );

var animate = function () {
	requestAnimationFrame( animate );

	cylinder.position.z -= 0.05;

	renderer.render(scene, camera);
};

animate();

