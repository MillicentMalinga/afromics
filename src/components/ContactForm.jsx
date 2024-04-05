import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {db} from '../firebaseConfig'
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
 
function ContactForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [email, setEmail] = React.useState("");
  const [organisation, setOrganisation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addDoc(collection(db, "contact"), {
      email: email,
      organisation: organisation,
    });
    toast.success("We will contact you soon");
    handleOpen();

  }
 
  return (
    <>
      <button onClick={handleOpen} className="text-teal-600 text-left font-bold text-sm font-body-plex">Contact Sales 
      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-body-plex max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className="font-body-plex">
              Contact Sales
            </Typography>
            <Typography
              className="mb-3 font-normal font-body-plex"
              variant="paragraph"
              color="gray"
            >
             Enter your Email and Organisation Name we will contact you
            </Typography>
            <Typography className="mb-2 font-body-plex" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <Typography className="-mb-2 font-body-plex"  variant="h6">
              Organisation Name
            </Typography>
            <Input label="Organisation" size="lg" value={organisation}  onChange={(e) => setOrganisation(e.target.value)}/>
           
          </CardBody>
          <CardFooter className="pt-0 font-body-plex">
            <Button variant="gradient" onClick={handleSubmit} className="font-body-plex" fullWidth>
              Send
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
          
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                 Close
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default ContactForm;