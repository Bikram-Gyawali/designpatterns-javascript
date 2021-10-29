import logger from "./singeltonPattern.js";
export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second Logger");
  logger.printLogCount();
}
