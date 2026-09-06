import { expect } from "chai";
import kue from "kue";
import createPushNotificationsJobs from "./8-job.js";

describe("createPushNotificationsJobs", function () {
  let queue;

  beforeEach(function () {
    queue = kue.createQueue();
    queue.testMode.enter();
  });

  afterEach(function () {
    queue.testMode.clear();
    queue.testMode.exit();
  });

  it("should throw an error if jobs is not an array", function () {
    expect(() => createPushNotificationsJobs("not an array", queue)).to.throw(
      "Jobs is not an array"
    );
  });

  it("should create two new jobs in the queue", function () {
    const jobs = [
      { phoneNumber: "4153518780", message: "Code 1234" },
      { phoneNumber: "4153518781", message: "Code 5678" },
    ];

    createPushNotificationsJobs(jobs, queue);

    // Check number of jobs in the queue
    expect(queue.testMode.jobs.length).to.equal(2);

    // Validate job types
    queue.testMode.jobs.forEach((job) => {
      expect(job.type).to.equal("push_notification_code_3");
    });

    // Validate job data
    expect(queue.testMode.jobs.map((job) => job.data)).to.deep.equal(jobs);
  });
});
