import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetups(){
   const navigate = useNavigate();

   function addMeetupHandler(meetupData){
       fetch(
           'https://react-getting-started-91f70-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               headers:{
                   'Content-Type' : 'application/json'
               }
           }
        ).then(()=>{
            navigate('/',{replace:true});
        });
   }
   return(
       <section>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetup={addMeetupHandler} />
       </section>
   );
}

export default NewMeetups;