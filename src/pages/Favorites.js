import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList"
function Favorites(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start Adding Some?</p>
    }
    else{
        content = <MeetupList meetup = {favoritesCtx.favorites} />
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}

        </section>
    );
 }
 
 export default Favorites;