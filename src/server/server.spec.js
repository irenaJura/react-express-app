import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "My task",
    id: "12348",
  });
  await updateTask({
    name: "Done",
    id: "12348",
  });
})();
