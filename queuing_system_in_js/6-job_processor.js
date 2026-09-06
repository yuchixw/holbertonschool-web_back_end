import kue from "kue";

const queue = kue.createQueue();

// Function for sending a notification
function sendNotification(phoneNumber, message) {
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );
}

// Process jobs in the "push_notification_code" queue
queue.process("push_notification_code", (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
