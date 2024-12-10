import queue from "../../Config/kue.js";
import Mailer from "./Mailer.js";


queue.process('confirmationMail' , function(job, done){
    console.log("inside queue worker")
  console.log("worket starting to process queue" , job.data)
Mailer(job.data)
    done();


}
)
