import logger from "./singeltonPattern.js";
export default function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First loger");
  logger.printLogCount();
}
