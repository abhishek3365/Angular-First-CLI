export class Player {

    name : string;
    club : string;
    hide : boolean;

    constructor( name : string , club : string ) {
        this.name = name;
        this.club = club;
        this.hide = true;   
    }

    toggle() {
        this.hide = !this.hide;
    }

}
