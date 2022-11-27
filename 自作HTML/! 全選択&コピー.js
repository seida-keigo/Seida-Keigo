document.onclick=()=>{
	let selection=getSelection()
	let range=document.createRange()
	range.selectNodeContents(document.body)
	selection.removeAllRanges()
	selection.addRange(range)
	document.execCommand("copy")
}