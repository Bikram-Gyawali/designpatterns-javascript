import FancyLogger from './basicProgram';
const logger=new FancyLogger();


export default function logSecondImplementation(){
    logger.printLogCount()
    logger.log("Second File")
    logger.printLogCount()
}