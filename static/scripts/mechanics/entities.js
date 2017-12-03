var entities = {
	valid:{},
	active:[],
    index:0, // Each entity should have an Id / Index for lookup.

	create(type){
		if(!entities.valid[type]){
			console.log("Failed to create non-existant entity: "+type);
			return;
		}
		let ent = entities.valid[type]();
		entities.active.push(ent); // Add to all ents.
		ent.id = entities.index++;
		ent.class = type;

		return ent;
	},

	render(context){
		for(let i=0;i<entities.active.length;i++){
			entities.active[i].render(context);
		}
	},

	// TODO: Pass / Handle delta time.
	tick(delta){
		for (let i = 0; i < entities.active.length;i++){
			entities.active[i].tick(delta);
		}
	}
}