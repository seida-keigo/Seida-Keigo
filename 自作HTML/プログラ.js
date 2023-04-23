let comp
ondeviceorientation=()=>{
	if(!event.webkitCompassHeading) return
	comp=event.webkitCompassHeading
	ondeviceorientation=null
}