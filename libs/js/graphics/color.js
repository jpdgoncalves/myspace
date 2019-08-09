class Color {

    constructor(red,green,blue,alpha = 1) {
        red = Number.isInteger(red) ? red : this.red;
        green = Number.isInteger(green) ? green : this.green;
        blue = Number.isInteger(blue) ? blue : this.blue;
        alpha = typeof alpha === "number" ? alpha : 1;

        this.red = red >= 0 ? red % 256 : 0;
        this.green = green >= 0 ? green % 256 : 0;
        this.blue = blue >= 0 ? blue % 256 : 0;
        
        alpha = alpha <= 1 ? alpha : 1;
        alpha = alpha >= 0 ? alpha : 0;
        this.alpha = alpha;
    }

    /**
     * 
     * @param {string} rgba 
     */
    static fromRGBAString(rgba){
        if(rgba.startsWith("rgba(") && rgba.endsWith(")")) {
            let values = rgba.match(/[0-9]{1,3}(\.)?[0-9]*/g)
                             .map((value) => parseFloat(value));
            return new Color(values[0],values[1],values[2],values[3]);
        }
        throw new Error("Bad RGA String");
    }

    /**
     * 
     * @param {string} rgb 
     */
    static fromRGBString(rgb) {
        if(rgb.startsWith("rgb(") && rgb.endsWith(")")) {
            let values = rgb.match(/[0-9]{1,3}/g)
                            .map((value) => parseInt(value));
            return new Color(values[0], values[1],values[2]);
        }
        throw new Error("Bad rgb string");
    }

    /**
     * 
     * @param {string} hex 
     */
    static fromHEXString(hex) {
        if(hex.startsWith("#")) {
            let values = hex.match(/[0-9a-fA-F]{2}/g)
                            .map((value) => parseInt(value,16));
            return new Color(values[0],values[1],values[2]);
        }
        throw new Error("Bad Hex String");
    }

    toRGBAString() {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }

    toRGBString() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

    toHexString() {
        return `#${this.red.toString(16)}${this.green.toString(16)}${this.blue.toString(16)}`;
    }

    transparency(transparency) {
        transparency = transparency <= 1 ? transparency : 1;
        transparency = transparency >= 0 ? transparency : 0;
        return new Color(this.red,this.green,this.blue, 1 - transparency);
    }

    rgb(red,green,blue) {
        red = Number.isInteger(red) ? red : this.red;
        green = Number.isInteger(green) ? green : this.green;
        blue = Number.isInteger(blue) ? blue : this.blue;

        this.red = red >= 0 ? red % 256 : 0;
        this.green = green >= 0 ? green % 256 : 0;
        this.blue = blue >= 0 ? blue % 256 : 0; 
    }
}

export {Color}