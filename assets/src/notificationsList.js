class NotificationList{
    constructor(){
    this._notificationList = []
    }

    addToList(props){
        this.notificationList.push(props)
    }

    get notificationList(){
        return this.notificationList
    }
}