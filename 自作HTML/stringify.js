let stringify=item=>{
	if(typeof item=="bigint")return item+"n";
	if(typeof item=="boolean")return item;
	if(typeof item=="function")return item;
	if(typeof item=="number")return item;
	if(item===null)return"null";
	if(typeof item=="object"||typeof item=="symbol")switch(item.constructor.name){
		case"Array":
		return Object.keys(item).length?"Object.assign([],{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"})":"[]";
		case"Object":
		return"{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"}";
		case"RegExp":
		return item;
		default:
		return Object.keys(item).length?"Object.assign(new "+item.constructor.name+",{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"})":"new "+item.constructor.name;
	}
	if(typeof item=="string")return JSON.stringify(item);
	//if(typeof item=="symbol")return"Symbol("+(item.description!==undefined&&item.description!==""?"\""+item.description+"\"":"")+")";
	if(item===undefined)return;
}