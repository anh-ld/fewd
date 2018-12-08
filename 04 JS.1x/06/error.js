try {
  myFunction();
} catch(e) {
  console.log(e.message);
} finally {
  console.log("Finally, it still runs");
}
