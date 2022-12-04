const charReducer = (state, action)=>{
    switch (action.type) {
        case "Handle Input":
            return {
                ...state,
                [action.field]: action.payload,
            };
        case "Handle Race": 
            switch (action.type) {
                case "Dragonborn":
                    return {
                        ...state,
                        abilities:{
                            strength:+2,
                            charisma:+1,
                        }
                };
                case "Dwarf":
                    return {
                        ...state,
                        abilities:{
                        constitution:+2,
                        }
                    };
                case "Elf":
                    return {
                        ...state,
                        abilities:{
                            dexterity:+2,
                        }
                    };
                case "Gnome":
                    return {
                        ...state,
                        abilities:{
                            intelligence:+2,
                        }
                    };
                case "Half-Elf":
                    return {
                        ...state,
                        abilities:{
                            charisma:+2,
                            // two bonus scores chosen by user
                        }
                    };
                case "Halfling":
                    return {
                        ...state,
                        abilities:{
                            strength:+2,
                            charisma:+1,
                        }
                    };
                case "Half-Orc":
                    return {
                        ...state,
                        abilities:{
                            strength:+2,
                            constitution:+1,
                        }
                    };
                case "Human":
                    return {
                        ...state,
                        abilities:{
                            strength:+1,
                            dexterity:+1,
                            constitution:+1,
                            intelligence:+1,
                            wisdom:+1,
                            charisma:+1,
                        }
                    };
                case "Tiefling":
                    return {
                        ...state,
                        abilities:{
                            intelligence:+1,
                            charisma:+2
                        }
                    };
                default:
                    return state;
            }
        default:
            return state;
}};

export default charReducer;