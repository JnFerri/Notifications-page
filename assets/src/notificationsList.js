export class NotificationList{
    constructor(){
    this._notificationList = []
    }

   static addToList(props){
        this.notificationList.push(props)
    }

    get notificationList(){
        return this.notificationList
    }
}