// Import Kue and create a queue
const kue = require("kue");
const queue = kue.createQueue();

// Array to hold blacklisted phone numbers
const blacklistedNumbers = ["4153518780", "4153518781"];

// Function to send a notification
function sendNotification(phoneNumber, message, job, done) {
  // Start tracking job progress
  job.progress(0, 100);

  // Check if phone number is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job if the number is blacklisted
    const error = new Error(`Phone number ${phoneNumber} is blacklisted`);
    job.failed(error);
    return done(error);
  }

  // Track progress to 50%
  job.progress(50, 100);

  // Log the notification being sent
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );

  // Simulate sending notification and completing the job
  setTimeout(() => {
    console.log(`Notification sent to ${phoneNumber}`);
    job.complete();
    done();
  }, 1000);
}

// Function to process queue jobs
function processQueueJobs() {
  // Set up queue to process jobs, two at a time
  queue.process("push_notification_code_2", 2, (job, done) => {
    const { phoneNumber, message } = job.data;
    sendNotification(phoneNumber, message, job, done);
  });
}

// Function to create jobs in the queue
function createJobs() {
  // List of phone numbers to send notifications to
  const phoneNumbers = [
    "4153518743",
    "4153538781",
    "4153118782",
    "4153718781",
    "4159518782",
    "4158718781",
    "4153818782",
    "4154318781",
    "4151218782",
  ];

  // Message to send with each notification
  const message = "This is the code 4321 to verify your account";

  // Create jobs for each phone number
  phoneNumbers.forEach((phoneNumber) => {
    const job = queue
      .create("push_notification_code_2", {
        phoneNumber,
        message,
      })
      .save((err) => {
        if (err) {
          console.log("Error creating job:", err);
        } else {
          console.log(`Notification job created: ${job.id}`);
        }
      });
  });
}

// Create jobs and process them
createJobs();
processQueueJobs();
