let stringify=item=>{
	if(typeof item=="bigint")return item+"n";
	if(typeof item=="boolean")return item;
	if(typeof item=="function")return item;
	if(typeof item=="number")return item;
	if(item===null)return"null";
	if(typeof item=="object"||typeof item=="symbol")switch(item.constructor.name){
		case"Array":
		return"Object.assign([],{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"})";
		break;
		case"Object":
		return"{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"}";
		break;
		case"RegExp":
		return item;
		break;
		default:
		if(!Object.keys(item).length)return"new "+item.constructor.name;
		return"Object.assign(new "+item.constructor.name+",{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"})";
	}
	if(typeof item=="string")return JSON.stringify(item);
	//if(typeof item=="symbol")return"Symbol("+(item.description!==undefined&&item.description!==""?"\""+item.description+"\"":"")+")";
	if(item===undefined)return;
}