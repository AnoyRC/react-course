import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups(){
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
        );
   }
   return(
       <section>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetup={addMeetupHandler} />
       </section>
   );
}

export default NewMeetups;