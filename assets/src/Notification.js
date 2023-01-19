export class Notification{
    constructor(image, name, message){
        this._image = image
        this._name = name
        this._message = message
    }

    get image(){
        return this._image
    }
    
    get name(){
        return this._name
    }
    
    get message(){
        return this._message
    }
    
}