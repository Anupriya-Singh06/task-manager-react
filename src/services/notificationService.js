export function notify(message){

  if(Notification.permission === "granted"){
    new Notification("Task Reminder", {
      body: message
    });
  }

}