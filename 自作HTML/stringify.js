let stringify=item=>{
	if(typeof item=="bigint")return item+"n";
	if(typeof item=="boolean")return item;
	if(typeof item=="function")return item;
	if(typeof item=="number")return item;
	if(item===null)return"null";
	//if(item.constructor.name=="Array")return"["+item.map(element=>stringify(element)).join(",")+"]";
	//if(item.constructor.name=="Object")return"{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"}";
	if(typeof item=="object")return"Object.assign(new "+item.constructor.name+",{"+Object.keys(item).map(key=>"\""+key+"\":"+stringify(item[key])).join(",")+"})";
	if(typeof item=="string")return JSON.stringify(item);
	if(typeof item=="symbol")return"Symbol(\""+item.description+"\")";
	if(item===undefined)return;
}