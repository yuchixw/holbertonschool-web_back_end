import { createClient } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Function to create the hash
function createHash() {
  client.hset("HolbertonSchools", "Portland", 50, (err, reply) => {
    if (err) {
      console.log("Error setting Portland value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
  client.hset("HolbertonSchools", "Seattle", 80, (err, reply) => {
    if (err) {
      console.log("Error setting Seattle value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
  client.hset("HolbertonSchools", "New York", 20, (err, reply) => {
    if (err) {
      console.log("Error setting New York value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
  client.hset("HolbertonSchools", "Bogota", 20, (err, reply) => {
    if (err) {
      console.log("Error setting Bogota value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
  client.hset("HolbertonSchools", "Cali", 40, (err, reply) => {
    if (err) {
      console.log("Error setting Cali value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
  client.hset("HolbertonSchools", "Paris", 2, (err, reply) => {
    if (err) {
      console.log("Error setting Paris value:", err);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
}

// Function to display the hash
function displayHash() {
  client.hgetall("HolbertonSchools", (err, reply) => {
    if (err) {
      console.log(`Error retrieving hash: ${err}`);
    } else {
      console.log(reply);
    }
  });
}

createHash();
displayHash();
