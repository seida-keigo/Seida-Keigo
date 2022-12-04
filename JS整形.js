for(let i=0;i<$.split(/\n/).length;){
	let tabs=$.split(/\n/)[i].match(/^\t*/g)[0]
	switch(($.split(/\n/)[i].match(/;|{(?!})|(?<![\t{])}/g)||0)[0]){
		case";":
		$=$.split(/\n/)
		$[i]=$[i].replace(/;/,";\n"+tabs)
		$=$.join("\n")
		break
		case"{":
		$=$.split(/\n/)
		$[i]=$[i].replace(/{(?!})/,"{\n\t"+tabs)
		$=$.join("\n")
		break
		case"}":
		if(!$.split(/\n/)[i].match(/^}/g)){
			$=$.split(/\n/)
			$[i]=$[i].replace(/(?<!\t)(?<!{)}/,"\n"+tabs.replace(/\t/,"")+"}")
			$=$.join("\n")
		}
	}
	++i
}
$

document.querySelectorAll(".ql-editor")[0].innerText="1234"
setTimeout(()=>document.querySelectorAll("[data-qa=texty_send_button]")[0].click(),0)

log=console.log
delete console
log("something")