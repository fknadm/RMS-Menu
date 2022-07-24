import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faPowerOff, faUser, faChevronCircleLeft, faEdit, faHome, faHamburger, faShoppingCart, faPlusCircle,faMinusCircle , faThumbsUp, faStar,faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faChevronCircleLeft)
  library.add(faEdit)
  library.add(faHome)
  library.add(faHamburger)
  library.add(faShoppingCart)
  library.add(faPlusCircle)
  library.add(faMinusCircle)
  library.add(faThumbsUp)
  library.add(faStar)
  library.add(faChevronLeft)



}

export default initFontAwesome;
