
class NotificationController{
    constructor(){
        this.list = new NotificationList()
    }

    addNotification(image, name, message){
        this.list.addToList(new Notification(image, name, message))
        console.log(this.list)
    }
}