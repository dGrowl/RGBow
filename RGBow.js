function Rainbow() {
	this.rgb = [0, 255, 0];
	this.alpha = 128;
	this.phase = 0;
}

Rainbow.prototype.step = function() {
	var val = 2 - (this.phase % 3);
	if (this.phase % 2 == 0) {
		this.rgb[val] += 5;
		if (this.rgb[val] >= 255) {
			this.rgb[val] = 255;
			++this.phase;
		}
	}
	else {
		this.rgb[val] -= 5;
		if (this.rgb[val] <= 0) {
			this.rgb[val] = 0;
			++this.phase;
		}
	}
}

Rainbow.prototype.getRGBAString = function() {
	return "rgba(" + 
		this.rgb[0] + ", " +
		this.rgb[1] + ", " +
		this.rgb[2] + ", " +
		(this.alpha / 255) + ")";
}

Rainbow.prototype.getHexString = function() {
	return "#" + 
		("00" + this.rgb[0].toString(16)).substr(-2) +
		("00" + this.rgb[1].toString(16)).substr(-2) +
		("00" + this.rgb[2].toString(16)).substr(-2);
}