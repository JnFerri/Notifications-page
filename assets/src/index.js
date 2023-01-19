import { Notification } from "./Notification.js";
import { NotificationList } from "./notificationsList.js";

const notification = new Notification()

function addNotificationToList(userImage,userName,userMessage){
    NotificationList.addToList(new Notification(userImage,userName,userMessage))
    console.log()
}

addNotificationToList('jean','jean','jean')