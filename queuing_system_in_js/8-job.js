function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error("Jobs is not an array");
  }

  jobs.forEach((jobData) => {
    const job = queue
      .create("push_notification_code_3", jobData)
      .save((err) => {
        if (err) {
          console.log("Error creating job:", err);
        } else if (!queue.testMode.active) {
          // Only access job.id when not in test mode
          console.log(`Notification job created: ${job.id}`);
        }
      });

    job.on("complete", () => {
      if (!queue.testMode.active) {
        console.log(`Notification job ${job.id} completed`);
      }
    });

    job.on("failed", (error) => {
      if (!queue.testMode.active) {
        console.log(`Notification job ${job.id} failed: ${error}`);
      }
    });

    job.on("progress", (percent) => {
      if (!queue.testMode.active) {
        console.log(`Notification job ${job.id} ${percent}% complete`);
      }
    });
  });
}

export default createPushNotificationsJobs;
