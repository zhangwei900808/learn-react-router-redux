const mystore = (state={
    id:0,
    whoweare:'no whoweare',
    some1:'no some1',
    some2:'no some2'},action) => {

    console.log('mystore state tree is:')
    console.log(state);
    switch(action.type){
        case "ISME":
            return {
                    id:action.id,
                    whoweare:action.text,
                    some1:'is some one',
                    some2:'is some two'
                }
        default:
            return state;
    }
}

export default mystore